import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { homedir } from 'node:os';
import path from 'node:path';

import getUserName from './src/getUserName.js';
import getPathToUpFolder from './src/getPathToUpFolder.js';
import goToFolder from './src/goToFolder.js';
import showListTable from './src/showListTable.js';


const userName = getUserName();
const rl = readline.createInterface({ input, output });
process.chdir(homedir());
let currentWorkDirectory = process.cwd();
console.log(`Welcome to the File Manager, ${userName}! \n`);
console.log(`You are currently in ${currentWorkDirectory}`);


rl.on('close', () => { console.log(`\n Thank you for using File Manager, ${userName}, goodbye! \n`); });

rl.on('line', async (input) => {
  let inputArray = input.trim().split(' ');
  inputArray = inputArray.filter(i => i !== '');
  if (inputArray.length === 1) {
    switch (inputArray[0]) {
      case '.exit':
        rl.close();
        break;
      case 'up':
        process.chdir(getPathToUpFolder(currentWorkDirectory));
        currentWorkDirectory = process.cwd();
        break;
      case 'ls':
        try {
          console.log('currentWorkDirectory', currentWorkDirectory);
          await showListTable(currentWorkDirectory);
        } catch { console.log('Operation failed'); }
        break;
      default:
        console.log('Invalid input');
    }
    if (input !== '.exit') {
      console.log(`\n You are currently in ${currentWorkDirectory} \n`);
    };
  } else if (inputArray.length === 2) {
    switch (inputArray[0]) {
      case 'cd':
        try {
          currentWorkDirectory = goToFolder(currentWorkDirectory, inputArray[1]);
        } catch { console.log('Operation failed'); }
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
    console.log(`\n You are currently in ${currentWorkDirectory} \n`);
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
    console.log(`\n You are currently in ${currentWorkDirectory} \n`);
  }

});


