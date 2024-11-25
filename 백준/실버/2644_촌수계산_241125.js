/**
 * https://www.acmicpc.net/problem/2644
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
  let [[n], [a, b], [m], ...persons] = inputs;

  let g = Array.from({ length: n + 1 }, () => []);
  let visited = Array(n + 1).fill(false);
  visited[a] = true;

  for (let [p, c] of persons) {
    g[p].push(c);
    g[c].push(p);
  }

  let result = -1;

  const dfs = (idx, cnt) => {
    if (idx === b) {
      result = cnt;
      return;
    }

    for (let ad of g[idx]) {
      if (!visited[ad]) {
        visited[ad] = true;
        dfs(ad, cnt + 1);
      }
    }
  };

  dfs(a, 0);
  console.log(result);
});
