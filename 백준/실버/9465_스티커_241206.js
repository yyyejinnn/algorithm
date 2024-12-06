/**
 * https://www.acmicpc.net/problem/9465
 * dp
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line);
});

rl.on('close', () => {
  const dp = (n, stickers) => {
    let maxDp = Array.from({ length: 2 }, () => Array(n + 1).fill(0));

    maxDp[0][1] = stickers[0][0];
    maxDp[1][1] = stickers[1][0];

    for (let i = 2; i <= n; i++) {
      /** Math.max(maxDp[1][i - 2], maxDp[1][i - 1])
       * maxDp[1][i - 1]: 이전 대각선 스티커
       * maxDp[1][i - 2]: 충돌없이 선택가능한 가장 가까운 열
       * -> 계단 문제랑 비슷한 듯?
       */
      maxDp[0][i] = Math.max(maxDp[1][i - 2], maxDp[1][i - 1]) + stickers[0][i - 1];
      maxDp[1][i] = Math.max(maxDp[0][i - 2], maxDp[0][i - 1]) + stickers[1][i - 1];
    }

    return Math.max(maxDp[0][n], maxDp[1][n]);
  };

  let result = [];

  let tCase = +inputs[0];
  let i = 1;

  for (let t = 0; t < tCase; t++) {
    let n = +inputs[i];

    let stickers = inputs.slice(i + 1, i + 3).map((row) => row.split(' ').map(Number));
    result.push(dp(n, stickers));

    i += 3;
  }

  console.log(result.join('\n'));
});
