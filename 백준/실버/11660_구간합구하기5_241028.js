{
  /**
   * https://www.acmicpc.net/problem/11660
   * 누적합
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
    let [n, _] = inputs[0];

    let tables = inputs.slice(1, n + 1);

    let sum = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    // (1,1) ~ 누적 합
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        sum[i][j] = tables[i - 1][j - 1] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
      }
    }

    // 구간 합
    const result = inputs.slice(n + 1).map((i) => {
      let [x1, y1, x2, y2] = i;

      return sum[x2][y2] - sum[x1 - 1][y2] - sum[x2][y1 - 1] + sum[x1 - 1][y1 - 1];
    });

    console.log(result.join('\n'));
  });
}
