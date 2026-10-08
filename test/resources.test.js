import test from 'node:test';
import assert from 'node:assert/strict';
import { createResource, validateResources, renderList } from '../lib/resources.js';
const categories = [{ id: 'books', label: 'Books' }];
const input = { category: 'books', title: ' A book ', url: 'https://EXAMPLE.com:443' };
test('normalizes input and supports missing notes', () => {
  const resource = createResource(input, categories);
  assert.equal(resource.title, 'A book');
  assert.equal(resource.url, 'https://example.com/');
  assert.equal(resource.notes, undefined);
  validateResources([resource], categories);
});
test('rejects missing fields, unknown categories and unsafe URLs', () => {
  for (const change of [{title: ' '}, {category: 'unknown'}, {url: 'javascript:alert(1)'}, {url: 'https://user:pass@example.com'}, {url: 'no url'}, {notes: 7}]) {
    assert.throws(() => createResource({...input, ...change}, categories));
  }
});
test('rejects normalized duplicates but preserves meaningful URL components', () => {
  const existing = [createResource(input, categories)];
  assert.throws(() => createResource({...input, url: 'https://example.com/'}, categories, existing));
  for (const url of ['https://example.com/A?q=1#part', 'https://example.com/a?q=2']) {
    assert.equal(createResource({...input, url}, categories, existing).url, url);
  }
});
test('rejects duplicate IDs and escapes contributor Markdown', () => {
  const resource = createResource({...input, title: '<script>[title]', notes: '**not bold**\n# heading'}, categories);
  assert.throws(() => validateResources([resource, {...resource, url: 'https://other.example/'}], categories));
  const markdown = renderList([resource], categories);
  assert.ok(!markdown.includes('<script>'));
  assert.ok(!markdown.includes('\n# heading'));
  assert.ok(markdown.includes('\\*\\*not bold'));
});

test('labels tagged Amazon URLs as paid links', () => {
  const resource = createResource({
    ...input,
    url: 'https://www.amazon.com/dp/1234567890/?tag=frontendhappy-20',
  }, categories);
  assert.match(renderList([resource], categories), /\(paid link\)/);
});
