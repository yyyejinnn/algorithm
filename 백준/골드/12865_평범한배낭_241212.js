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
      let [w, v] = items[i - 1];
      dp[i][maxW] = Math.max(dp[i - 1][maxW], v + dp[i - 1][maxW - w] || 0);
      // dp[i - 1][maxW]: 현재(i) 물건을 넣지 않을 경우 -> maxW kg 배낭에 바로 직전 물건(i-1)까지 넣었을 때의 최대 가치
      // v + dp[i - 1][maxW - w]: 현재 물건을 넣을 경우
      //                          -> '현재 물건의 가치(v) + maxW-현재 물건 무게(w)'kg 배낭에 i-1 물건까지 넣었을 때의 최대 가치
    }
  }

  console.log(dp[n][k]);
});
