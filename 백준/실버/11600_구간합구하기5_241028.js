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

    const result = inputs.slice(n + 1).map((i) => {
      let [x1, y1, x2, y2] = i;

      let dp = Array.from({ length: n }, () => Array(n).fill(0));
      let [x, y] = [x1 - 1, y1 - 1];

      dp[x][y] = tables[x][y];

      while (x < x2) {
        while (y < y2) {
          let nextX = y === n - 1 ? x + 1 : x;
          let nextY = y === n - 1 ? y1 - 1 : y + 1;

          if (nextX < n && nextY < n) {
            dp[nextX][nextY] = dp[x][y] + tables[nextX][nextY];
          }

          y++;
        }

        x++;
        y = y1 - 1;
      }

      return dp[x2 - 1][y2 - 1];
    });

    console.log(result);
  });
}
