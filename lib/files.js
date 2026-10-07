import { readFile, writeFile, rename } from 'node:fs/promises';
export const root = new URL('../', import.meta.url);
export const read = async name => JSON.parse(await readFile(new URL(name, root), 'utf8'));
export async function writeJson(name, data) {
  const destination = new URL(name, root);
  const temporary = new URL(`${name}.${process.pid}.tmp`, root);
  await writeFile(temporary, JSON.stringify(data, null, 2) + '\n', { flag: 'wx' });
  await rename(temporary, destination);
}
