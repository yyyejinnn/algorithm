{
  /**
   * https://www.acmicpc.net/problem/2468
   * dfs
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
    let [n, ...area] = inputs;

    // 최대 높이 찾기
    let high = -Infinity;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        high = Math.max(high, area[i][j]);
      }
    }

    let d = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    // dfs
    let visited;

    const dfs = (i, j, h) => {
      let queue = [[i, j]];
      let head = 0;

      while (head < queue.length) {
        let [y, x] = queue[head++];

        for (let [dy, dx] of d) {
          let [ady, adx] = [y + dy, x + dx];

          if (ady > -1 && ady < n && adx > -1 && adx < n && !visited[ady][adx] && area[ady][adx] > h) {
            visited[ady][adx] = true;
            queue.push([ady, adx]);
          }
        }
      }
    };

    const solution = (h) => {
      let cnt = 0;
      visited = Array.from({ length: n }, () => Array(n).fill(false));

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (!visited[i][j] && area[i][j] > h) {
            cnt++;
            dfs(i, j, h);
          }
        }
      }

      return cnt;
    };

    // 높이 별 안전영역 최대 개수
    let maxSafeCnt = -Infinity;

    // 아무 지역도 잠기지 않을 수 있음 + 모두 1일 경우 고려 -> high 범위 0 포함해야 함
    while (high > -1) {
      maxSafeCnt = Math.max(maxSafeCnt, solution(high--));
    }

    console.log(maxSafeCnt);
  });
}
