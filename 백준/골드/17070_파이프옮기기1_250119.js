/**
 * https://www.acmicpc.net/problem/17070
 * 그래프, dp
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
  let [[n], ...pipes] = inputs;

  // 0: 가로, 1: 세로, 2: 대각선 (끝점 기준)
  let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Array(3).fill(0)));
  dp[0][1][0] = 1; // 처음 (1,1)(1,2) 가로 방향

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (pipes[r][c] === 1) continue;

      let [prevr, prevc] = [r - 1, c - 1];

      // 가로
      if (prevc >= 0 && pipes[r][prevc] === 0) {
        dp[r][c][0] += dp[r][prevc][0] + dp[r][prevc][2];
      }

      // 세로
      if (prevr >= 0 && pipes[prevr][c] === 0) {
        dp[r][c][1] += dp[prevr][c][1] + dp[prevr][c][2];
      }

      // 대각선
      if (prevc >= 0 && prevr >= 0 && pipes[prevr][prevc] === 0 && pipes[prevr][c] === 0 && pipes[r][prevc] === 0) {
        dp[r][c][2] += dp[prevr][prevc][0] + dp[prevr][prevc][1] + dp[prevr][prevc][2];
      }
    }
  }

  console.log(dp[n - 1][n - 1].reduce((acc, value) => acc + value, 0));
});
