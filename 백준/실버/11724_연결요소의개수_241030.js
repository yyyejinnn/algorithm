{
  /**
   * https://www.acmicpc.net/problem/11724
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
    let [[u, v], ...connections] = inputs;

    let graph = Array.from({ length: u + 1 }, () => []);

    connections.forEach(([a, b]) => {
      graph[a].push(b);
      graph[b].push(a);
    });

    let visited = Array(u + 1).fill(false);

    const dfs = (u) => {
      if (visited[u]) {
        return;
      }

      visited[u] = true;

      let ads = graph[u];

      for (let ad of ads) {
        if (!visited[ad]) dfs(ad);
      }
    };

    let cnt = 0;

    for (let i = 1; i <= u; i++) {
      if (!visited[i]) {
        dfs(i);
        cnt++;
      }
    }

    console.log(cnt);
  });
}
