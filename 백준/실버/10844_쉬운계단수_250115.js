/**
 * https://www.acmicpc.net/problem/10844
 * 다이나믹프로그래밍
 *
 * 테스트케이스: https://ideone.com/n9K9id
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

rl.on('line', (line) => {
  n = Number(line);
});

rl.on('close', () => {
  const MOD = 1_000_000_000;

  // dp[끝 자리수][길이]
  let dp = Array.from({ length: 10 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= 9; i++) dp[i][1]++; // 한자리 수는 전부 1

  for (let len = 2; len <= n; len++) {
    for (let endNum = 0; endNum <= 9; endNum++) {
      if (endNum > 0) dp[endNum][len] += dp[endNum - 1][len - 1];
      if (endNum < 9) dp[endNum][len] += dp[endNum + 1][len - 1];

      dp[endNum][len] %= MOD; // 10^9 오버플로우 방지
    }
  }

  console.log(dp.reduce((acc, curr) => acc + curr[n], 0) % MOD);
});
