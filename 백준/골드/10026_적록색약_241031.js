{
  /**
   * https://www.acmicpc.net/problem/10026
   * graph
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];

  rl.on('line', (line) => {
    inputs.push(line);
  });

  rl.on('close', () => {
    let [n, ...colors] = inputs;

    let visited;

    let d = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    const dfs = (i, j, targetColors) => {
      visited[i][j] = true;

      for (let [dy, dx] of d) {
        let [ady, adx] = [i + dy, j + dx];

        if (
          ady > -1 &&
          ady < n &&
          adx > -1 &&
          adx < n &&
          !visited[ady][adx] &&
          targetColors.includes(colors[ady][adx])
        ) {
          visited[i][j] = true;
          dfs(ady, adx, targetColors);
        }
      }
    };

    const solution = (isColorBlind) => {
      let cnt = 0;
      visited = Array.from({ length: n }, () => Array(n).fill(false));

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (!visited[i][j]) {
            cnt++;

            const ifCB = colors[i][j] !== 'B' ? ['R', 'G'] : ['B'];

            dfs(i, j, isColorBlind ? ifCB : [colors[i][j]]);
          }
        }
      }

      return cnt;
    };

    console.log(solution(false), solution(true));
  });
}
