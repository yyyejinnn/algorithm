{
  /**
   * https://www.acmicpc.net/problem/1904
   * dp
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
    let memo = Array(n + 1).fill(0);
    memo[1] = 1;
    memo[2] = 2;

    const dp = (n) => {
      for (let i = 3; i <= n; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
      }
    };

    dp(n);
    console.log(memo[n]);

    /** 런타임 에러 */
    //   let memo = {};
    //   const dp = (n) => {
    //     if (memo[n]) {
    //       return memo[n];
    //     }
    //     if (n <= 2) {
    //       return n;
    //     }
    //     memo[n] = dp(n - 1) + dp(n - 2);
    //     return memo[n];
    //   };
    //   console.log(dp(n) % 15746);
  });
}
