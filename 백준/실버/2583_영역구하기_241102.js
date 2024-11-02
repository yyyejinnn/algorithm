/**
 * https://www.acmicpc.net/problem/2583
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
  let [[m, n, k], ...areas] = inputs;

  let map = Array.from({ length: m }, () => Array(n).fill(0));

  // 초기화
  for (let [x1, y1, x2, y2] of areas) {
    for (let y = y1; y < y2; y++) {
      for (let x = x1; x < x2; x++) {
        map[y][x] = 1;
      }
    }
  }

  let d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (y, x, cnt = 1) => {
    map[y][x] = 1;

    for (let [dy, dx] of d) {
      let [ady, adx] = [y + dy, x + dx];

      if (ady > -1 && ady < m && adx > -1 && adx < n && !map[ady][adx]) {
        cnt = dfs(ady, adx, cnt + 1);
      }
    }

    return cnt;
  };

  const main = () => {
    let result = [];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (!map[i][j]) {
          result.push(dfs(i, j));
        }
      }
    }

    console.log(`${result.length}\n${result.sort((a, b) => a - b).join(' ')}`);
  };

  main();
});
