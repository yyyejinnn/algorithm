{
  /**
   * https://www.acmicpc.net/problem/2839
   * 브루트 포스
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
      let maxFive = Math.floor(n / 5);
      let maxThree = Math.floor(n / 3);

      for (let i = maxFive; i >= 0; i--) {
        for (let j = 0; j <= maxThree; j++) {
          let w = 5 * i + 3 * j;

          if (w === n) return i + j;
        }
      }

      return -1;
    };

    console.log(solution());
  });
}
