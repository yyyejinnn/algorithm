{
  /**
   * https://www.acmicpc.net/problem/24416
   * 동적계획법1
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
    let [fibCnt, dpCnt] = [0, 0];

    const fib = (n) => {
      if (n <= 2) {
        fibCnt++;
        return 1;
      }

      return fib(n - 1) + fib(n - 2);
    };

    let memo = {};

    const fibDp = (n, cnt = 0) => {
      if (memo[n]) {
        return memo[n];
      }

      if (n <= 2) {
        return 1;
      }

      dpCnt++;
      memo[n] = fibDp(n - 1, cnt + 1) + fibDp(n - 2, cnt + 1);

      return [memo[n], cnt];
    };

    fib(n);
    fibDp(n);
    console.log(fibCnt, dpCnt);
  });
}
