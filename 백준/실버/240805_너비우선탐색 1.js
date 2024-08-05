{
  /**
   * https://www.acmicpc.net/problem/24444
   * 알고리즘 수업 - 너비 우선 탐색 1
   */

  /**
   * 시간 초과 빡시다
   * -> shift() 사용 X -> head 변수 사용
   * -> answer, visited 두개 사용하던 걸 -> visited 하나로 합침
   * -> visited = Array(n).fill(0); => Array(n + 1)
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
    visited = Array(n + 1).fill(0);
    vertices.map((vArr) => vArr.sort((a, b) => a - b));

    bfs(r);

    console.log(visited.slice(1).join('\n'));
  });

  function bfs(v) {
    let queue = [];
    let cnt = 0;
    let head = 0;

    queue.push(v);
    visited[v] = ++cnt;

    while (head < queue.length) {
      const current = queue[head++];

      for (const a of vertices[current]) {
        if (visited[a]) {
          continue;
        } else {
          queue.push(a);
          visited[a] = ++cnt;
        }
      }
    }
  }
}
