/**
 * https://www.acmicpc.net/problem/2743
 * 문자열
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str;

rl.on('line', (line) => {
  str = line;
});

rl.on('close', () => {
  console.log(str.length);
});
