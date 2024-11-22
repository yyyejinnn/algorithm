/**
 * https://www.acmicpc.net/problem/14500
 * 브루트포스+dfs
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
  let [[n, m], ...area] = inputs;
  let visited = Array.from({ length: n }, () => Array(m).fill(false));

  let d = [
    [0, -1], // 서
    [0, 1], // 동
    [-1, 0], // 남
    [1, 0], // 북
  ];

  let max = -Infinity;
  let q;

  const dfs = ([y, x]) => {
    if (q.length === 4) {
      max = Math.max(
        max,
        q.reduce((acc, value) => acc + value, 0)
      );

      return;
    }

    visited[y][x] = true;
    q.push(area[y][x]);

    for (let [dy, dx] of d) {
      let ady = y + dy;
      let adx = x + dx;

      if (ady > -1 && ady < n && adx > -1 && adx < m && !visited[ady][adx]) {
        dfs([ady, adx]);
      }
    }

    visited[y][x] = false;
    q.pop();
  };

  const tShape = ([y, x]) => {
    // ㅓ,ㅏ,ㅜ,ㅗ
    let totalSum = area[y][x];
    let excludeSum = [];

    for (let [dy, dx] of d) {
      let ady = y + dy;
      let adx = x + dx;

      let value = area?.[ady]?.[adx] || 0;

      totalSum += value;
      excludeSum.push(value);
    }

    for (let value of excludeSum) {
      max = Math.max(max, totalSum - value);
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      q = [];
      dfs([i, j]);
      tShape([i, j]);
    }
  }

  console.log(max);
});
