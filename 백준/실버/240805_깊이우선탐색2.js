{
  /**
   * https://www.acmicpc.net/problem/24480
   * 알고리즘 수업 - 깊이 우선 탐색2
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
  let cnt = 0;
  let answer;

  rl.on('close', () => {
    visited = Array(n).fill(0); // 방문했는지 여부 기록
    answer = Array(n).fill(0); // 방문 cnt 기록

    vertices.map((vArr) => vArr.sort((a, b) => b - a));

    dfs(r);

    console.log(answer.join('\n'));
  });

  function dfs(v) {
    visited[v - 1] = 1;
    answer[v - 1] = ++cnt;

    // 인접 방문
    for (const a of vertices[v]) {
      if (visited[a - 1]) {
        continue;
      }

      dfs(a);
    }
  }
}
