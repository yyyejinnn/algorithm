/**
 * https://www.acmicpc.net/problem/10870
 * 재귀
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number;

rl.on('line', (line) => {
  number = Number(line);
});

rl.on('close', () => {
  console.log(fibonacci(number));
});

function fibonacci(num) {
  if (num <= 1) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}
