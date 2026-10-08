import { randomUUID } from 'node:crypto';

export function normalizeUrl(value) {
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) {
    throw new Error('Use an HTTP(S) URL without embedded credentials.');
  }
  return url.href;
}

function field(value, name, limit, optional = false) {
  if (optional && value === undefined) return '';
  if (typeof value !== 'string' || (!optional && !value.trim())) throw new Error(`${name} is required.`);
  const clean = value.trim();
  if (clean.length > limit || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/u.test(clean)) throw new Error(`${name} is too long or contains control characters.`);
  return clean;
}

export function validateCategories(categories) {
  if (!Array.isArray(categories) || !categories.length) throw new Error('Categories must be a nonempty array.');
  const ids = new Set();
  for (const category of categories) {
    if (!/^[a-z]+(?:-[a-z]+)*$/.test(category.id) || ids.has(category.id)) throw new Error('Invalid or duplicate category ID.');
    field(category.label, 'Category label', 100);
    ids.add(category.id);
  }
}

export function createResource(input, categories, existing = []) {
  validateCategories(categories);
  const category = field(input.category, 'Category', 100);
  if (!categories.some(item => item.id === category)) throw new Error('Choose a known category.');
  const title = field(input.title, 'Title', 200);
  const url = normalizeUrl(field(input.url, 'URL', 2048));
  const notes = field(input.notes, 'Notes', 2000, true);
  if (existing.some(item => normalizeUrl(item.url) === url)) throw new Error('This URL is already in the list.');
  return { id: randomUUID(), category, title, url, ...(notes ? { notes } : {}) };
}

export function validateResources(resources, categories) {
  validateCategories(categories);
  if (!Array.isArray(resources)) throw new Error('Resources must be an array.');
  const seen = [];
  const ids = new Set();
  for (const resource of resources) {
    if (typeof resource.id !== 'string' || !/^[a-zA-Z0-9-]+$/.test(resource.id) || ids.has(resource.id)) throw new Error('Invalid or duplicate resource ID.');
    const clean = createResource(resource, categories, seen);
    for (const key of ['category', 'title', 'url']) {
      if (resource[key] !== clean[key]) throw new Error(`Resource ${resource.id}: ${key} must be normalized.`);
    }
    if (resource.notes !== undefined && resource.notes !== (clean.notes ?? '')) throw new Error('Notes must be trimmed.');
    ids.add(resource.id);
    seen.push(resource);
  }
}

const escape = value => value.replace(/\s+/g, ' ').replace(/[\\`*_{}\[\]()<>#!|~]/g, '\\$&');
export function renderList(resources, categories) {
  validateResources(resources, categories);
  if (!resources.length) return 'The collection is taking shape. Resources will appear here as I add them.\n';
  return categories.filter(category => resources.some(item => item.category === category.id)).map(category => {
    const entries = resources.filter(item => item.category === category.id).map(item => {
      const url = item.url.replace(/[<>()\\]/g, character => encodeURIComponent(character).replace('(', '%28').replace(')', '%29'));
      return `- [${escape(item.title)}](<${url}>)${item.notes ? ` — ${escape(item.notes)}` : ''}`;
    });
    return `### ${category.label}\n\n${entries.join('\n')}\n`;
  }).join('\n');
}
