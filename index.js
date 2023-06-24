import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { homedir } from 'node:os';

import getUserName from './src/getUserName.js';

const userName = getUserName();
const rl = readline.createInterface({ input, output });
process.chdir(homedir());
console.log(`Welcome to the File Manager, ${userName}! \n`);
console.log(`You are currently in ${process.cwd()}`);

rl.on('close', () => { console.log(`\n Thank you for using File Manager, ${userName}, goodbye! \n`); });

rl.on('line', (input) => {
  switch (input) {
    case '.exit':
      rl.close();
      break;
    default:
      console.log('default');
  }
  if (input !== '.exit') {
    console.log(`\n You are currently in ${process.cwd()} \n`);
  };
});


