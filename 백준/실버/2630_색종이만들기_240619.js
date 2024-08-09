/**
 * https://www.acmicpc.net/problem/2630
 * 분할정복
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let len;
let arr = [];
let i = 0;

rl.on('line', (line) => {
  if (i < 1) {
    len = Number(line);
  } else {
    arr.push(line.split(' '));
  }

  i++;
});

let [whiteCount, blueCount] = [0, 0];

rl.on('close', () => {
  merge(0, 0, len);

  console.log(whiteCount);
  console.log(blueCount);
});

function merge(y, x, len) {
  const first = arr[y][x];

  const mid = Math.floor(len / 2);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const target = arr[y + i][x + j];

      if (first != target) {
        merge(y, x, mid);
        merge(y, x + mid, mid);
        merge(y + mid, x, mid);
        merge(y + mid, x + mid, mid);

        return;
      }
    }
  }

  if (first == 0) {
    whiteCount++;
  } else {
    blueCount++;
  }
}
