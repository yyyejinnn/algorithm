{
  /**
   * https://www.acmicpc.net/problem/1753
   * 다익스트라
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let v, e, k;
  let inputs = [];

  rl.on('line', (line) => {
    if (i === 0) {
      [v, e] = line.split(' ').map(Number);
    } else if (i === 1) {
      k = Number(line);
    } else {
      inputs.push(line);
    }

    i++;
  });

  let graph;

  rl.on('close', () => {
    // graph = Array(v + 1).fill({}); -> 이렇게 하면 동일 객체 참조하게 됨
    graph = Array.from({ length: v + 1 }, () => ({}));

    for (let i of inputs) {
      let [u, v, w] = i.split(' ').map(Number);
      graph[u][v] = Math.min(graph[u][v] ?? Infinity, w); // !!가중치 여러개일 경우 고려!!
    }

    // 다익스트라
    let visited = Array(v + 1).fill(0);
    let minPathArr = Array(v + 1).fill(Infinity);

    minPathArr[k] = 0;
    let cnt = 0;

    while (cnt < v) {
      let curr;
      let minDistance = Infinity;

      for (let i = 1; i <= v; i++) {
        if (!visited[i] && minPathArr[i] < minDistance) {
          minDistance = minPathArr[i];
          curr = i;
        }
      }

      visited[curr] = 1;

      for (let ad in graph[curr]) {
        let distance = minPathArr[curr] + graph[curr][ad];

        if (distance < minPathArr[ad]) {
          minPathArr[ad] = distance;
        }
      }

      cnt++;
    }

    console.log(
      minPathArr
        .slice(1)
        .map((p) => (p === Infinity ? 'INF' : p))
        .join('\n')
    );
  });
}
