{
  /**
   * https://www.acmicpc.net/problem/1504
   * 다익스트라 (우선순위 큐)
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let n, e;
  let inputs = [];

  rl.on('line', (line) => {
    if (!i) {
      [n, e] = line.split(' ').map(Number);
    } else {
      inputs.push(line);
    }
    i++;
  });

  rl.on('close', () => {
    // base
    let graph = Array.from({ length: n + 1 }, () => ({}));

    inputs.slice(0, inputs.length - 1).forEach((i) => {
      let [a, b, c] = i.split(' ').map(Number);

      graph[a][b] = c;
      graph[b][a] = c;
    });

    /**
     * 다익스트라 with 우선순위 큐
     * -> 현재 정점과 가까운 노드일 수록 우선순위 높다.
     */
    const dijkstra = (start, end) => {
      let minPath = Array(n + 1).fill(Infinity);
      minPath[start] = 0;

      let pq = [[0, start]];

      while (pq.length > 0) {
        let [minDist, curr] = pq.pop();

        if (minDist > minPath[curr]) {
          continue;
        }

        for (let ad in graph[curr]) {
          let adDist = minPath[curr] + graph[curr][ad];

          if (adDist < minPath[ad]) {
            minPath[ad] = adDist;
            pq.push([adDist, ad]);
          }
        }

        pq.sort((a, b) => b[0] - a[0]); // min-heap (내림차순)
      }

      return minPath[end];
    };

    let [v1, v2] = inputs[inputs.length - 1].split(' ').map(Number);

    const path1 = dijkstra(1, v1) + dijkstra(v1, v2) + dijkstra(v2, n);
    const path2 = dijkstra(1, v2) + dijkstra(v2, v1) + dijkstra(v1, n);

    const answer = Math.min(path1, path2);

    console.log(answer === Infinity ? -1 : answer);
  });
}

/** 시간 초과 ~.. */
// {
//   rl.on('close', () => {
//     // base
//     let graph = Array.from({ length: n + 1 }, () => ({}));

//     inputs.slice(0, inputs.length - 1).forEach((i) => {
//       let [a, b, c] = i.split(' ').map(Number);

//       graph[a][b] = c;
//       graph[b][a] = c;
//     });

//     // 다익스트라
//     const dijkstra = (start, end) => {
//       let visited = Array(n + 1).fill(0);
//       let minPath = Array(n + 1).fill(Infinity);

//       minPath[start] = 0;

//       while (!visited[end]) {
//         let minDistance = Infinity;

//         let curr;

//         for (let i = 1; i <= n; i++) {
//           if (!visited[i] && minPath[i] < minDistance) {
//             minDistance = minPath[i];
//             curr = i;
//           }
//         }

//         visited[curr] = 1;

//         // 인접
//         for (let ad in graph[curr]) {
//           let distance = minPath[curr] + graph[curr][ad];

//           if (distance < minPath[ad]) {
//             minPath[ad] = distance;
//           }
//         }
//       }

//       return minPath[end];
//     };

//     let [v1, v2] = inputs[inputs.length - 1].split(' ').map(Number);

//     const path1 = dijkstra(1, v1) + dijkstra(v1, v2) + dijkstra(v2, n);
//     const path2 = dijkstra(1, v2) + dijkstra(v2, v1) + dijkstra(v1, n);

//     const answer = Math.min(path1, path2);

//     console.log(answer === Infinity ? -1 : answer);
//   });
// }
