import { parseArgs } from 'node:util';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { read, writeJson } from '../lib/files.js';
import { createResource, validateResources } from '../lib/resources.js';
import { generate } from './generate.js';

let prompt;
try {
  const { values } = parseArgs({ options: {
    category: { type: 'string' }, title: { type: 'string' }, url: { type: 'string' }, notes: { type: 'string' }, help: { type: 'boolean' }
  } });
  if (values.help) {
    console.log('npm run add -- [--category books --title "Title" --url "https://example.com" --notes "Why it helps"]\nOmit flags to use interactive prompts.');
  } else {
    const categories = await read('categories.json');
    const resources = await read('resources.json');
    validateResources(resources, categories);
    let input = values;
    if (!Object.keys(values).length) {
      if (!stdin.isTTY) throw new Error('Interactive mode needs a terminal. Supply --category, --title, and --url instead.');
      prompt = createInterface({ input: stdin, output: stdout });
      console.log(categories.map((category, index) => `${index + 1}. ${category.label}`).join('\n'));
      const choice = (await prompt.question('Category number: ')).trim();
      const category = /^\d+$/.test(choice) ? categories[Number(choice) - 1]?.id : undefined;
      input = { category, title: await prompt.question('Title: '), url: await prompt.question('URL: '), notes: await prompt.question('Why are you sharing this? (optional): ') };
    }
    const resource = createResource(input, categories, resources);
    await writeJson('resources.json', [...resources, resource]);
    await generate();
    console.log(`Added ${resource.title}. Review the JSON and README changes, then commit and open a PR.`);
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally {
  prompt?.close();
}
