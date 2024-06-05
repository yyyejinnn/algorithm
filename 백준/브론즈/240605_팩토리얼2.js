/**
 * https://www.acmicpc.net/problem/27433
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
  console.log(factorial(number));
});

function factorial(number) {
  if (number <= 1) return 1;

  return number * factorial(number - 1);
}
