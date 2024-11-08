/**
 * https://acmicpc.net/problem/2206
 * 반례: https://www.acmicpc.net/board/view/119335
 * 그리디, bfs
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
  let [n, m] = inputs[0].split(' ').map(Number);

  let area = inputs.slice(1).map((i) => i.split('').map(Number));
  let visited = Array.from({ length: n }, () => Array.from({ length: m }, () => Array(2).fill(0)));
  /** visited 3차원 배열?
   *  - 원래 bfs는 한 번 방문한 지점은 방문하지않음
   *  - but 1)벽 부순 경우, 2)부수지 않은 경우 두 경우의 경로가 있기 때문에 방문 여부를 따로 관리해야함
   */

  let d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const bfs = () => {
    let queue = [[0, 0, 0, 1]]; // y, x, hasBroken(벽 부순 적 있는 지), distance
    let head = 0;
    visited[0][0][0] = 1;

    while (head < queue.length) {
      let [y, x, hasBroken, distance] = queue[head++];

      if (y === n - 1 && x === m - 1) {
        return distance;
      }

      for (let [dy, dx] of d) {
        let [ady, adx] = [y + dy, x + dx];

        if (ady < 0 || ady >= n || adx < 0 || adx >= m) continue;

        // 벽 있는 경우 -> 부순 적 없으면 부수기
        if (area[ady][adx] === 1 && !hasBroken && !visited[ady][adx][1]) {
          visited[ady][adx][1] = 1;
          queue.push([ady, adx, 1, distance + 1]);
        }

        // 벽 없으면?
        // 1) 이전에 벽 부순 적이 있을 경우
        // 2) 이전에 벽 부순 적이 없는 경우
        if (area[ady][adx] === 0 && !visited[ady][adx][hasBroken]) {
          visited[ady][adx][hasBroken] = 1;
          queue.push([ady, adx, hasBroken, distance + 1]);
        }
      }
    }

    return -1;
  };

  console.log(bfs());
});
