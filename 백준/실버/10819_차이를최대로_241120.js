/**
 * https://www.acmicpc.net/problem/10819
 * 브루트포스+백트래킹
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line.split(' ').map(Number));
});

rl.on('close', () => {
  let [[n], numbers] = inputs;

  let max = -Infinity;

  const permute = (start) => {
    if (start >= n) return;                                                                                                                                                                                                                                                                                                                                                                                                                                                              

    let sum = numbers.reduce((acc, value, idx) => acc + Math.abs(numbers[idx - 1] - value || 0), 0);
    max = Math.max(max, sum);

    for (let i = start; i < n; i++) {
      [numbers[start], numbers[i]] = [numbers[i], numbers[start]];
      permute(start + 1);
      [numbers[i], numbers[start]] = [numbers[start], numbers[i]];
    }
  };

  permute(0);

  console.log(max);
});
