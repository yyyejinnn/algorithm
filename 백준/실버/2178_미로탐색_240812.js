{
  /**
   * https://www.acmicpc.net/problem/2178
   * bfs로 최단거리 구하기
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;
  let n, m;

  let input = [];

  rl.on('line', (line) => {
    if (i == 0) {
      [n, m] = line.split(' ').map(Number);
    } else {
      input.push(line.split('').map(Number));
    }
    i++;
  });

  let distance;

  rl.on('close', () => {
    distance = [...Array(n)].map(() => Array(m).fill(0));
    n--;
    m--;

    console.log(bfs(0, 0));
  });

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function bfs(y, x) {
    let queue = [];
    let head = 0;

    queue.push([y, x]);
    distance[y][x]++;
    input[y][x] = 0;

    while (head <= queue.length) {
      const [yIdx, xIdx] = queue[head++];

      // 인접 노드 방문
      for (let i = 0; i < 4; i++) {
        let adX = xIdx + dx[i];
        let adY = yIdx + dy[i];

        // 인덱스 벗어났거나 방문불가한 노드면 건너 뜀
        if (adY < 0 || adY > n || adX < 0 || adX > m || input[adY][adX] === 0) {
          continue;
        }

        if (input[adY][adX] === 1) {
          input[adY][adX] = 0; // 방문했으므로 방문불가 노드로 update
          distance[adY][adX] = distance[yIdx][xIdx] + 1; // 거리 계산
          queue.push([adY, adX]);
        }

        if (adY === n && adX === m) {
          return distance[adY][adX];
        }
      }
    }
  }
}
