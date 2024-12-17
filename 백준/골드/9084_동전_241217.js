/**
 * https://www.acmicpc.net/problem/9084
 * DP (0/1 배낭)
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
  let [[t], ...ipts] = inputs;

  let result = [];

  let i = -1;
  while (++i < t) {
    let [[n], coins, [money]] = ipts.slice(i * 3, i * 3 + 3);

    let dp = Array(money + 1).fill(0);
    dp[0] = 1;

    for (let c of coins) {
      for (let j = c; j <= money; j++) {
        dp[j] += dp[j - c];
      }
    }

    result.push(dp[money]);
  }

  console.log(result.join('\n'));
});
