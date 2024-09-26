{
  /**
   * https://www.acmicpc.net/problem/9461
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
    let memo = {};

    memo[1] = 1;
    memo[2] = 1;
    memo[3] = 1;

    const dp = (n) => {
      if (memo[n]) {
        return memo[n];
      }

      memo[n] = dp(n - 2) + dp(n - 3);

      return memo[n];
    };

    console.log(
      inputs
        .slice(1)
        .map((i) => dp(i))
        .join('\n')
    );
  });
}
