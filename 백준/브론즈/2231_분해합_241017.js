{
  /**
   * https://www.acmicpc.net/problem/2231
   * 완전 탐색
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
    const solution = () => {
      for (let i = 1; i < n; i++) {
        let arr = i.toString().split('').map(Number);

        if (i + arr.reduce((a, b) => a + b, 0) === n) {
          return i;
        }
      }

      return 0;
    };

    console.log(solution());
  });
}
