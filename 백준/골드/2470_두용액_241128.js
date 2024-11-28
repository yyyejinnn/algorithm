/**
 * https://www.acmicpc.net/problem/2470
 * 정렬+투포인터
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line);
});

rl.on('close', () => {
  const mergeSort = () => {
    const tempArr = Array(n);

    const merge = (l, m, r) => {
      let tIdx = l;
      let lIdx = l;
      let rIdx = m + 1;

      while (lIdx <= m && rIdx <= r) {
        if (liquids[lIdx] < liquids[rIdx]) {
          tempArr[tIdx++] = liquids[lIdx++];
        } else {
          tempArr[tIdx++] = liquids[rIdx++];
        }
      }

      while (lIdx <= m) {
        tempArr[tIdx++] = liquids[lIdx++];
      }

      while (rIdx <= r) {
        tempArr[tIdx++] = liquids[rIdx++];
      }

      for (let i = l; i <= r; i++) {
        liquids[i] = tempArr[i];
      }
    };

    const divide = (lIdx, rIdx) => {
      if (lIdx >= rIdx) return;

      let mid = Math.floor((lIdx + rIdx) / 2);

      divide(lIdx, mid);
      divide(mid + 1, rIdx);
      merge(lIdx, mid, rIdx);
    };

    divide(0, n - 1);
  };

  let n = +inputs[0];
  let liquids = inputs[1].split(' ').map(Number);

  // 정렬
  mergeSort();

  // 투포인터
  let minGap = Infinity;
  let [a, b] = [0, 0];

  let [s, e] = [0, n - 1];

  while (s < e) {
    let newGap = liquids[s] + liquids[e];

    if (minGap > Math.abs(newGap)) {
      minGap = Math.abs(newGap);
      [a, b] = [s, e];
    }

    newGap < 0 ? s++ : e--;
  }

  console.log(liquids[a], liquids[b]);
});
