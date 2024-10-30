{
  /**
   * https://www.acmicpc.net/problem/7576
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
    let [[m, n], ...box] = inputs;

    let queue = [];
    let unripeCnt = 0;

    // 1. 익은/안익은 토마토
    (() => {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (box[i][j] === 1) queue.push([i, j]);
          else if (box[i][j] === 0) unripeCnt++;
        }
      }
    })();

    let d = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    // bfs
    let day = -1;
    let head = 0;

    while (head < queue.length) {
      let size = queue.length - head;
      day++;

      for (let s = 0; s < size; s++) {
        let [currY, currX] = queue[head++];

        for (let [dy, dx] of d) {
          let [adY, adX] = [currY + dy, currX + dx];

          if (adY > -1 && adY < n && adX > -1 && adX < m && box[adY][adX] === 0) {
            queue.push([adY, adX]);
            box[adY][adX] = 1;
            unripeCnt--;
          }
        }
      }
    }

    console.log(unripeCnt > 0 ? -1 : day);
  });
}
