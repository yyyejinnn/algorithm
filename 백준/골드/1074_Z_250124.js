/**
 * https://www.acmicpc.net/problem/1074
 * 재귀
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs;

rl.on('line', (line) => {
  inputs = line.split(' ').map(Number);
});

rl.on('close', () => {
  let [n, targetR, targetC] = inputs;

  // 사분면 규칙 이용하기
  const findOrder = (r, c, n) => {
    if (n === 0) return 0;

    let mid = 2 ** (n - 1);
    let size = mid * mid;

    // 1사분면
    if (r < mid && c < mid) {
      return findOrder(r, c, n - 1);
    }

    // 2사분면
    if (r < mid && c >= mid) {
      return size + findOrder(r, c - mid, n - 1);
    }

    // 3사분면
    if (r >= mid && c < mid) {
      return 2 * size + findOrder(r - mid, c, n - 1);
    }

    // 4사분면
    if (r >= mid && c >= mid) {
      return 3 * size + findOrder(r - mid, c - mid, n - 1);
    }
  };

  console.log(findOrder(targetR, targetC, n));
});
