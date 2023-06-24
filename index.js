import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import getUserName from './src/getUserName.js';

const userName = getUserName();
const rl = readline.createInterface({ input, output });
console.log(`Welcome to the File Manager, ${userName}!`);

rl.on('close', () => { console.log(`Thank you for using File Manager, ${userName}, goodbye!`); });

rl.on('line', (input) => {
  switch (input) {
    case '.exit':
      rl.close();
      break;
    default:
      console.log('default');
  }
});


