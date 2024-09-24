{
  /**
   * https://www.acmicpc.net/problem/9184
   * dp
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];

  rl.on('line', (line) => {
    let [a, b, c] = line.split(' ').map(Number);

    if (!(a === -1 && b === -1 && c === -1)) {
      inputs.push([a, b, c]);
    }
  });

  rl.on('close', () => {
    let memo = {};

    const w = (a, b, c) => {
      if (a < 1 || b < 1 || c < 1) {
        return 1;
      }

      let value = memo[`${a}_${b}_${c}`];

      if (value != null) {
        return value;
      }

      if (a > 20 || b > 20 || c > 20) {
        memo[`${a}_${b}_${c}`] = w(20, 20, 20);
      } else if (a < b && b < c) {
        memo[`${a}_${b}_${c}`] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
      } else {
        memo[`${a}_${b}_${c}`] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
      }

      return memo[`${a}_${b}_${c}`];
    };

    const result = inputs.map((i) => {
      let [a, b, c] = i;

      return `w(${a}, ${b}, ${c}) = ${w(a, b, c)}`;
    });

    console.log(result.join('\n'));
  });
}
