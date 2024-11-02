/**
 * https://www.acmicpc.net/problem/14502
 * bfs, 백트래킹
 *
 * 2차원 배열 -> 1차원 배열로 사용
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = '';

rl.on('line', (line) => {
  inputs += `${line} `;
});

rl.on('close', () => {
  let [n, m, ...others] = inputs.split(' ').map(Number);

  // 2 찾기
  let SAFE_CNT = 0;
  let virus = [];

  let lap = others.slice(0, n * m);

  for (let i = 0; i < lap.length; i++) {
    if (lap[i] === 2) {
      virus.push(i);
    }
    if (lap[i] === 0) {
      SAFE_CNT++;
    }
  }

  const adIdxs = (i) => {
    let [iy, ix] = [Math.floor(i / m), i % m]; // 1차원 idx -> 2차원 (y, x)
    const ads = [];

    if (iy - 1 > -1) ads.push((iy - 1) * m + ix); // 상
    if (iy + 1 < n) ads.push((iy + 1) * m + ix); // 하
    if (ix + 1 < m) ads.push(iy * m + (ix + 1)); // 좌
    if (ix - 1 > -1) ads.push(iy * m + (ix - 1)); // 우

    return ads;
  };

  const spreadVirus = (tempLab) => {
    let visited = new Array(n * m).fill(0);

    let v = [...virus];
    let head = 0;

    let infectedCnt = 0;

    // bfs
    while (head < v.length) {
      let curr = v[head++];

      for (let ad of adIdxs(curr)) {
        if (!visited[ad] && tempLab[ad] === 0) {
          visited[ad] = 1;
          tempLab[ad] = 2;
          v.push(ad);
          infectedCnt++;
        }
      }
    }

    return SAFE_CNT - infectedCnt;
  };

  let max = 0;

  const buildWalls = (idx, cnt) => {
    if (cnt === 3) {
      max = Math.max(max, spreadVirus(lap.slice()));
      return;
    }

    for (let i = idx; i < n * m; i++) {
      if (lap[i] === 0) {
        lap[i] = 1;
        buildWalls(i + 1, cnt + 1);
        lap[i] = 0; // 백트래킹
      }
    }
  };

  buildWalls(0, 0);
  console.log(max - 3); // 벽 개수 3개 빼줘야 함
});
