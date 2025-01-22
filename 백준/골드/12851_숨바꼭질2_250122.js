/**
 * https://www.acmicpc.net/problem/12851
 * bfs
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;

rl.on('line', (line) => {
  [n, k] = line.split(' ').map(Number);
});

rl.on('close', () => {
  const LIMIT = 100_001;

  let visited = Array(LIMIT).fill(-1);
  let ways = Array(LIMIT).fill(0);
  visited[n] = 0;
  ways[n] = 1;

  let q = [n];
  let h = 0;

  while (h < q.length) {
    let curr = q[h++];

    for (let next of [curr - 1, curr + 1, curr * 2]) {
      if (next >= 0 && next < LIMIT && (visited[next] === -1 || visited[next] >= visited[curr] + 1)) {
        if (visited[next] === -1) {
          q.push(next);
        }

        visited[next] = visited[curr] + 1;
        ways[next] += ways[curr];
      }
    }
  }

  console.log(`${visited[k]}\n${ways[k]}`);
});
