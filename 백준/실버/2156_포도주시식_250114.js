/**
 * https://www.acmicpc.net/problem/2156
 * 다이나믹프로그래밍
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
  let [n, ...glasses] = inputs;

  let dp = Array(n + 1).fill(0);

  if (n < 3) {
    console.log(glasses.reduce((prev, curr) => prev + curr, 0));
    return;
  }

  dp[1] = glasses[0];
  dp[2] = glasses[0] + glasses[1];

  for (let i = 3; i < n + 1; i++) {
    // dp[i-2] + glasses[i-1]: 직전 잔을 건너뛰고 현재 잔을 마시는 경우
    // dp[i-3] + glasses[i-2] + glasses[i-1]: 연속된 두 잔을 마시고, 한 잔을 건너뛴 경우
    // dp[i-1]: 현재 잔을 마시지 않는 경우 -> 2579 계단 문제와의 차이점
    dp[i] = Math.max(dp[i - 2] + glasses[i - 1], dp[i - 3] + glasses[i - 2] + glasses[i - 1], dp[i - 1]);
  }

  console.log(dp[n]);
});
