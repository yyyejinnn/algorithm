/**
 * https://www.acmicpc.net/problem/11052
 * dp
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
  let [[n], cards] = inputs;

  let dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
    }
  }

  console.log(dp[n]);
});
