{
  /**
   * https://www.acmicpc.net/problem/11725
   * graph
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
    let [[n], ...nodes] = inputs;

    let graph = Array.from({ length: n + 1 }, () => []);

    nodes.forEach(([u, v]) => {
      graph[u].push(v);
      graph[v].push(u);
    });

    let visited = Array(n + 1).fill(false);
    let result = Array(n + 1).fill(null);

    let queue = [1];
    visited[1] = true;

    let head = 0;

    while (head < queue.length) {
      let curr = queue[head++];

      let ads = graph[curr];

      for (let ad of ads) {
        if (!visited[ad]) {
          result[ad] = curr;
          visited[ad] = true;

          queue.push(ad);
        }
      }
    }

    console.log(result.slice(2).join('\n'));
  });
}
