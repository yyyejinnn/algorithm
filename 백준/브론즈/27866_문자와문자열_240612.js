/**
 * https://www.acmicpc.net/problem/27866
 * 문자열
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str;
let len;

let count = 0;

rl.on('line', (line) => {
  if (count == 0) {
    str = line;
  } else {
    len = Number(line);
  }
  count++;
});

rl.on('close', () => {
  console.log(str[len - 1]);
});
