/**
 * https://www.acmicpc.net/problem/7569
 * bfs
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = '';

rl.on('line', (line) => {
  inputs += line + ' ';
});

rl.on('close', () => {
  let [m, n, h, ...tomatos] = inputs.split(' ').map(Number);

  // 초기화;
  const tLen = m * n * h;

  const getX = (idx) => idx % m;
  const getY = (idx) => Math.floor((idx % (m * n)) / m);
  const getH = (idx) => Math.floor(idx / (m * n));

  const getIdx = (x, y, h) => h * m * n + y * m + x;

  // 안익은 토마토 수 계산
  let q = [];
  let unripeCnt = 0;

  for (let i = 0; i < tLen; i++) {
    if (tomatos[i] === 1) q.push(i);
    else if (tomatos[i] === 0) unripeCnt++;
  }

  // x, y, h
  let ds = [
    [0, 0, 1],
    [0, 0, -1],
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
  ];

  // bfs
  const bfs = () => {
    if (unripeCnt === 0) {
      return 0;
    }

    let f = 0;
    let day = -1;

    while (f < q.length) {
      let size = q.length - f;
      ++day;

      for (let s = 0; s < size; s++) {
        let i = q[f++];

        // 인접
        for (let [dx, dy, dh] of ds) {
          let [adx, ady, adh] = [getX(i) + dx, getY(i) + dy, getH(i) + dh];

          if (adx < 0 || adx >= m || ady < 0 || ady >= n || adh < 0 || adh >= h) continue;

          let idx = getIdx(adx, ady, adh);

          if (tomatos[idx] === 0) {
            q.push(idx);
            tomatos[idx] = 1;
            unripeCnt--;
          }
        }
      }
    }

    return unripeCnt > 0 ? -1 : day;
  };

  console.log(bfs());
});
