/**
 * https://www.acmicpc.net/problem/1535
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
  let [[n], l, j] = inputs;

  let dp = Array(101).fill(0); // 해당 체력일 때 최대 기쁨

  for (let i = 0; i < n; i++) {
    let [hp, happy] = [l[i], j[i]];

    // 중복 방지 위해 역순 순회
    for (let h = 100; h > hp; h--) {
      dp[h] = Math.max(dp[h], dp[h - hp] + happy);
      // dp[h]: 해당 기쁨 선택하지 않은 경우
      // dp[h - hp] + happy: 해당 기쁨 선택한 경우 dp[i 체력만큼 깎인 체력] + 현재 i 기쁨
    }
  }

  console.log(Math.max(...dp));
});
