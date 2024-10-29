{
  /**
   * https://www.acmicpc.net/problem/9095
   * dp
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
    let dp = Array(11).fill(0);

    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let n = 4; n < 11; n++) {
      dp[n] = dp[n - 1] + dp[n - 2] + dp[n - 3];
    }

    console.log(
      inputs
        .slice(1)
        .map((i) => dp[i])
        .join('\n')
    );
  });
}
