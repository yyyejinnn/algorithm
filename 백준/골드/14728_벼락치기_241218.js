/**
 * https://www.acmicpc.net/problem/14728
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
  let [[n, maxT], ...sjs] = inputs;

  let dp = Array.from({ length: maxT + 1 }, () => Array(n + 1).fill(0));

  for (let ch = 1; ch <= n; ch++) {
    let [k, s] = sjs[ch - 1];

    for (let t = 0; t <= maxT; t++) {
      dp[t][ch] = Math.max(dp[t][ch - 1], t >= k ? s + dp[t - k][ch - 1] : 0);
    }
  }

  console.log(dp[maxT][n]);
});
