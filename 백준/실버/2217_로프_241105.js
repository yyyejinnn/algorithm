/**
 * https://acmicpc.net/problem/2217
 * 그리디
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(Number(line));
});

rl.on('close', () => {
  let [m, ...ropes] = inputs;

  ropes.sort((b, a) => a - b);

  let max = -Infinity;

  for (let i = 0; i < m; i++) {
    max = Math.max(max, ropes[i] * (i + 1));
  }

  console.log(max);
});
