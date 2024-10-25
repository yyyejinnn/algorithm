{
  /**
   * https://www.acmicpc.net/problem/14940
   * bfs
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
    let [[n, m], ...maps] = inputs;

    let visited = Array.from({ length: n }, () => Array(m).fill(0));

    let queue = [];

    // 2 위치 찾기
    (() => {
      for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
          if (maps[y][x] === 2) {
            visited[y][x] = 1;
            maps[y][x] = 0;
            queue.push([y, x]);
            return;
          }
        }
      }
    })();

    // bfs
    let head = 0;

    let adY = [0, 0, -1, 1];
    let adX = [-1, 1, 0, 0];

    while (head < queue.length) {
      let [currY, currX] = queue[head++];

      for (let d = 0; d < 4; d++) {
        let nextY = currY + adY[d];
        let nextX = currX + adX[d];

        if (!(nextY >= 0 && nextY < n && nextX >= 0 && nextX < m)) {
          continue;
        }

        if (!visited[nextY][nextX] && maps[nextY][nextX]) {
          maps[nextY][nextX] = maps[currY][currX] + 1;
          visited[nextY][nextX] = 1;
          queue.push([nextY, nextX]);
        }
      }
    }

    // 결과
    let result = [];

    for (let i = 0; i < n; i++) {
      let str = [];

      for (let j = 0; j < m; j++) {
        str.push(maps[i][j] && !visited[i][j] ? -1 : maps[i][j]);
      }

      result.push(str.join(' '));
    }

    console.log(result.join('\n'));
  });
}
