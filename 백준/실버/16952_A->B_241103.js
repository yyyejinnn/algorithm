/**
 * https://www.acmicpc.net/problem/16953
 * dfs, bfs
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b;

rl.on('line', (line) => {
  [a, b] = line.split(' ').map(Number);
});

rl.on('close', () => {
  // dfs로 풀기
  let result = Infinity;

  const dfs = (pre, depth = 1) => {
    if (pre < a) {
      return;
    }
    if (pre === a) {
      result = Math.min(result, depth);
      return;
    }

    if (pre % 2 === 0) {
      dfs(Math.floor(pre / 2), depth + 1);
    }

    if (pre % 10 === 1) {
      dfs(Math.floor(pre / 10), depth + 1);
    }
  };

  dfs(b);
  console.log(result === Infinity ? -1 : result);

  // bfs로 풀기
  const bfs = () => {
    let q = [[b, 1]];
    let head = 0;

    while (head < q.length) {
      let [pre, depth] = q[head++];

      if (pre < a) {
        return -1;
      }

      if (pre === a) {
        return depth;
      }

      if (pre % 2 === 0) {
        q.push([Math.floor(pre / 2), depth + 1]);
      }

      if (pre % 10 === 1) {
        q.push([Math.floor(pre / 10), depth + 1]);
      }
    }

    return -1; // ex. 1 12
  };

  console.log(bfs());
});
