/**
 * https://acmicpc.net/problem/10773
 * 스택
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stack = [];
let count = 0;

rl.on('line', (line) => {
  if (count > 0) {
    line == 0 ? stack.pop() : stack.push(line);
  }
  count++;
});

rl.on('close', () => {
  console.log(stack.reduce((pre, acc) => pre + Number(acc), 0));
});
