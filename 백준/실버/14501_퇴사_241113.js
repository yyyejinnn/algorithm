/**
 * https://www.acmicpc.net/problem/14501
 * 브루트포스, DP...
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
  let [[n], ...tables] = inputs;

  let dp = Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    let [t, p] = tables[i];

    dp[i + 1] = Math.max(dp[i], dp[i + 1]);

    let next = i + t;

    if (next <= n) {
      dp[next] = Math.max(dp[next], dp[i] + p);
    }
  }

  console.log(dp[n]);
});
