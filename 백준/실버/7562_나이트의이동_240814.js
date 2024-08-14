{
  /**
   * https://www.acmicpc.net/problem/7562
   * bfs로 최단거리 구하기
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let tCnt;
  let inputs = [];

  rl.on('line', (line) => {
    if (!i) {
      tCnt = Number(line);
    } else {
      inputs.push(line);
    }

    i++;
  });

  let testCase = [];
  let result = [];

  rl.on('close', () => {
    // input
    for (let i = 0; i < tCnt; i++) {
      const len = Number(inputs[i * 3]);
      const curr = inputs[i * 3 + 1].split(' ').map(Number);
      const target = inputs[i * 3 + 2].split(' ').map(Number);

      testCase.push({
        len,
        curr,
        target,
      });
    }

    const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    const dy = [1, 2, 2, 1, -1, -2, -2, -1];

    // bfs
    for (let t of testCase) {
      const { len, curr, target } = t;

      let visited = [...Array(len)].map(() => Array(len).fill(0));

      const bfs = () => {
        let queue = [];
        let head = 0;

        queue.push(curr);

        while (head < queue.length) {
          let [x, y] = queue[head++];

          if (y === target[1] && x === target[0]) {
            result.push(visited[y][x]);
            return;
          }

          for (let i = 0; i < 8; i++) {
            let xIdx = x + dx[i];
            let yIdx = y + dy[i];

            if (xIdx > -1 && xIdx < len && yIdx > -1 && yIdx < len && !visited[yIdx][xIdx]) {
              visited[yIdx][xIdx] = visited[y][x] + 1;
              queue.push([xIdx, yIdx]);
            }
          }
        }
      };

      bfs();
    }

    console.log(result.join('\n'));
  });
}
