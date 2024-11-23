/**
 * https://www.acmicpc.net/problem/10974
 * 브루트포스+백트래킹
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

rl.on('line', (line) => {
  n = +line;
});

rl.on('close', () => {
  let result = [];

  let visited = Array(n + 1).fill(false);
  let q = [];

  const calc = () => {
    if (q.length === n) {
      result.push(q.join(' '));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        q.push(i);
        visited[i] = true;
        calc();
        q.pop();
        visited[i] = false;
      }
    }
  };

  calc();
  console.log(result.join('\n'));
});
