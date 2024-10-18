{
  /**
   * https://www.acmicpc.net/problem/19532
   * 완전 탐색
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs;

  rl.on('line', (line) => {
    inputs = line.split(' ').map(Number);
  });

  rl.on('close', () => {
    let [a, b, c, d, e, f] = inputs;

    const solution = () => {
      for (let x = -1000; x < 1000; x++) {
        for (let y = -1000; y < 1000; y++) {
          if (a * x + b * y === c && d * x + e * y === f) {
            return `${x} ${y}`;
          }
        }
      }
    };

    console.log(solution());
  });
}
