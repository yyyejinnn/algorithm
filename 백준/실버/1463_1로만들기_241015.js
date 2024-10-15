{
  /**
   * https://www.acmicpc.net/problem/1463
   * dp
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let x;

  rl.on('line', (line) => {
    x = Number(line);
  });

  rl.on('close', () => {
    const dp = {};

    dp[1] = 0;

    for (let i = 2; i <= x; i++) {
      dp[i] = dp[i - 1] + 1;

      if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
      }

      if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
      }
    }

    console.log(dp[x]);
  });
}
