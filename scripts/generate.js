import { readFile, writeFile } from 'node:fs/promises';
import { read, root } from '../lib/files.js';
import { renderList } from '../lib/resources.js';
export async function generate(check = false) {
  const template = await readFile(new URL('README.template.md', root), 'utf8');
  const output = template.replace('<!-- RESOURCE_LIST -->', renderList(await read('resources.json'), await read('categories.json')));
  const path = new URL('README.md', root);
  if (check) {
    if (await readFile(path, 'utf8') !== output) throw new Error('README is stale. Run npm run generate.');
  } else await writeFile(path, output);
}
if (process.argv[1] && new URL(`file://${process.argv[1]}`).href === import.meta.url) {
  await generate(process.argv.includes('--check'));
}
