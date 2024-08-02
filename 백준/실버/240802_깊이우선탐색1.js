{
  /**
   * https://www.acmicpc.net/problem/24479
   * 알고리즘 수업 - 깊이 우선 탐색1
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let count = 0;

  let n;
  let m;
  let r;

  let vertices; // 객체 타입 사용하면 타임아웃..

  rl.on('line', (line) => {
    if (count == 0) {
      [n, m, r] = line.split(' ').map(Number);

      vertices = [...Array(n + 1)].map(() => []);
    } else {
      let [u, v] = line.split(' ').map(Number);

      vertices[u].push(v);
      vertices[v].push(u);
    }

    count++;
  });

  let visitedVertices;
  let answer;

  rl.on('close', () => {
    visitedVertices = Array(n + 1).fill(0);
    answer = Array(n).fill(0);

    vertices.forEach((v) => v.sort((a, b) => a - b));

    dfs(r);

    console.log(answer.join('\n'));
  });

  let currentOrder = 1;

  function dfs(v) {
    visitedVertices[v] = 1;
    answer[v - 1] = currentOrder++;

    for (const a of vertices[v]) {
      if (visitedVertices[a] == 1) {
        continue;
      } else {
        dfs(a);
      }
    }
  }
}

/** [...Array(n+1)] 왜 이렇게 사용함? */

//   const graph = new Array(3);
//   const graph2 = [...Array(3)];

//   console.log(graph); // [ <3 empty items> ]
//   console.log(graph2); // [ undefined, undefined, undefined ]

//   console.log(graph.map((x) => 1)); // [ <3 empty items> ]
//   console.log(graph2.map((x) => 1)); // [ 1, 1, 1 ];
