/**
 * https://www.acmicpc.net/problem/17845
 * DP (0/1 배낭문제)
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
  let [[n, k], ...sjs] = inputs;

  let dp = Array(n + 1).fill(0);

  for (let [i, t] of sjs) {
    for (let j = n; j >= t; j--) {
      dp[j] = Math.max(dp[j], dp[j - t] + i);
    }
  }

  console.log(dp[n]);
});
