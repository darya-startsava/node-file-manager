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
  const inputArray = input.split(' ');
  if (inputArray.length === 1) {
    switch (inputArray[0]) {
      case '.exit':
        rl.close();
        break;
      case 'up':
        console.log('up');
        break;
      case 'ls':
        console.log('ls');
        break;
      default:
        console.log('Invalid input');
    }
    if (input !== '.exit') {
      console.log(`\n You are currently in ${process.cwd()} \n`);
    };
  } else if (inputArray.length === 2) {
    switch (inputArray[0]) {
      case 'cd':
        console.log('cd');
        break;
      case 'cat':
        console.log('cat');
        break;
      case 'add':
        console.log('add');
        break;
      case 'rm':
        console.log('rm');
        break;
      case 'os':
        console.log('os');
        break;
      case 'hash':
        console.log('hash');
        break;
      default:
        console.log('Invalid input');
    }
    console.log(`\n You are currently in ${process.cwd()} \n`);
  } else if (inputArray.length === 3) {
    switch (inputArray[0]) {
      case 'rn':
        console.log('rn');
        break;
      case 'cp':
        console.log('cp');
        break;
      case 'mv':
        console.log('mv');
        break;
      case 'compress':
        console.log('compress');
        break;
      case 'decompress':
        console.log('decompress');
        break;
      default:
        console.log('Invalid input');
    }
    console.log(`\n You are currently in ${process.cwd()} \n`);
  }

});


