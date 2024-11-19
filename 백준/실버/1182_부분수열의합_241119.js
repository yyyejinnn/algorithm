/**
 * https://www.acmicpc.net/problem/1182
 * 브루트포스
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
  let [[n, s], numbers] = inputs;

  let as = [];
  let cnt = 0;

  let solution = (idx) => {
    if (as.length && as.reduce((acc, value) => acc + value, 0) === s) cnt++;
    if (idx >= n) return;

    for (let i = idx; i < n; i++) {
      as.push(numbers[i]);
      solution(i + 1);
      as.pop();
    }
  };

  solution(0);
  console.log(cnt);
});
