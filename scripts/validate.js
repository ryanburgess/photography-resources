import { read } from '../lib/files.js';
import { validateResources } from '../lib/resources.js';
validateResources(await read('resources.json'), await read('categories.json'));
console.log('Resource data is valid.');
