{
  /**
   * https://www.acmicpc.net/problem/24445
   * 알고리즘 수업 - 너비 우선 탐색 2
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;
  let n, m, r;

  let vertices;

  rl.on('line', (line) => {
    if (i == 0) {
      [n, m, r] = line.split(' ').map(Number);

      vertices = [...Array(n + 1)].map((a) => []);
    } else {
      let [u, v] = line.split(' ').map(Number);
      vertices[u].push(v);
      vertices[v].push(u);
    }

    i++;
  });

  let visited;

  rl.on('close', () => {
    vertices.forEach((vArr) => vArr.sort((a, b) => b - a));
    visited = Array(n).fill(0);

    bfs(r);

    console.log(visited.join('\n'));
  });

  function bfs(v) {
    let queue = [];
    let head = 0;
    let cnt = 1;

    queue.push(v);
    visited[v - 1] = cnt++;

    while (head < queue.length) {
      const target = queue[head++];

      // 인접
      for (const ad of vertices[target]) {
        if (visited[ad - 1] === 0) {
          visited[ad - 1] = cnt++;
          queue.push(ad);
        }
      }
    }
  }
}
