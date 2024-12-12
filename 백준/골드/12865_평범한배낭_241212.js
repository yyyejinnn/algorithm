/**
 * https://www.acmicpc.net/problem/12865
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
  let [[n, k], ...items] = inputs;

  let dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  for (let maxW = 1; maxW <= k; maxW++) {
    for (let i = 1; i <= n; i++) {
      let [prevW, prevV] = items[i - 1];
      dp[i][maxW] = Math.max(dp[i - 1][maxW], prevV + dp[i - 1][maxW - prevW] || 0);
    }
  }

  console.log(dp[n][k]);
});
