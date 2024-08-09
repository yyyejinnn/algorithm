/**
 * https://www.acmicpc.net/problem/9086
 * 문자열
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = [];
let count;

let i = 0;

rl.on('line', (line) => {
  if (i == 0) {
    count = Number(line);
  } else {
    result.push(line[0] + line[line.length - 1]);
  }
  i++;
});

rl.on('close', () => {
  console.log(result.join('\n'));
});
