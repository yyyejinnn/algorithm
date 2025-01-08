/**
 * https://www.acmicpc.net/problem/9372
 * dfs → 답은 맞는데
 * n-1 하는 게 성능 좋음
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
  let [[t], ...cases] = inputs;

  /** n-1
   * 모든 노드가 연결된 그래프이므로 최소 간선의 개수 n-1이 된다.
   */
  const solution1 = () => {
    let result = [];

    let i = 0;

    while (--t > -1) {
      let [n, m] = cases[i++];
      result.push(n - 1);
      i += m;
    }

    console.log(result.join('\n'));
  };

  /**
   * dfs 사용 (답은 맞으나 비효율적)
   */
  const solution2 = () => {
    let result = [];

    let i = 0;

    while (--t > -1) {
      let [n, m] = cases[i++];
      let path = cases.slice(i, i + m);

      // graph 생성
      let graph = Array.from({ length: n + 1 }, () => []);

      for (let [a, b] of path) {
        graph[a].push(b);
        graph[b].push(a);
      }

      let visited = Array(n + 1).fill(0);
      let cnt = 0;

      // dfs
      let stack = [1];
      visited[1] = 1;

      while (stack.length > 0) {
        let curr = stack.pop();

        for (let next of graph[curr]) {
          if (!visited[next]) {
            stack.push(next);
            visited[next] = 1;
            cnt++;
          }
        }
      }

      result.push(cnt);

      i += m;
    }

    console.log(result.join('\n'));
  };

  solution1();
  //   solution2();
});
