{
  /**
   * https://www.acmicpc.net/problem/1260
   * DFS와 BFS
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;
  let n, m, v;

  let vertices;

  rl.on('line', (line) => {
    if (i == 0) {
      [n, m, v] = line.split(' ').map(Number);
      vertices = [...Array(n + 1)].map(() => []);
    } else {
      let [u, v] = line.split(' ').map(Number);
      vertices[u].push(v);
      vertices[v].push(u);
    }
    i++;
  });

  let dfsVisited, bfsVisited;
  let dfsResult = '';
  let bfsResult = '';

  rl.on('close', () => {
    vertices.forEach((vArr) => vArr.sort((a, b) => a - b));

    dfsVisited = Array(n + 1).fill(0);
    bfsVisited = Array(n + 1).fill(0);

    dfs(v);
    bfs(v);

    console.log(dfsResult + '\n' + bfsResult);
  });

  function dfs(v) {
    dfsResult += `${v} `;
    dfsVisited[v]++;

    for (const ad of vertices[v]) {
      if (!dfsVisited[ad]) {
        dfs(ad);
      }
    }
  }

  function bfs(v) {
    let queue = [];
    let head = 0;

    queue.push(v);
    bfsVisited[v]++;
    bfsResult += `${v} `;

    while (head < queue.length) {
      const target = queue[head++];

      for (const ad of vertices[target]) {
        if (!bfsVisited[ad]) {
          queue.push(ad);

          bfsVisited[ad]++;
          bfsResult += `${ad} `;
        }
      }
    }
  }
}
