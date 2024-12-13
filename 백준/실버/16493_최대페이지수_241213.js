/**
 * https://www.acmicpc.net/problem/16493
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
  let [[n, m], ...chs] = inputs;

  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let d = 1; d <= n; d++) {
    for (let c = 1; c <= m; c++) {
      let [day, pages] = chs[c - 1];

      dp[d][c] = Math.max(dp[d][c - 1], d >= day ? dp[d - day][c - 1] + pages : 0);
    }
  }

  console.log(dp[n][m]);
});
