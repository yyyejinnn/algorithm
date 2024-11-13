/**
 * https://www.acmicpc.net/problem/4673
 * 브루트포스
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {});

rl.on('close', () => {
  let RANGE_NUM = 10000;

  let selfNumbers = Array(RANGE_NUM).fill(true);

  for (let n = 1; n <= RANGE_NUM; n++) {
    let curr = n;
    let sum = n;

    while (curr > 0) {
      sum += curr % 10;
      curr = Math.floor(curr / 10);
    }

    if (sum <= RANGE_NUM) {
      selfNumbers[sum - 1] = false;
    }
  }

  let result = [];

  for (let i = 0; i < RANGE_NUM; i++) {
    if (selfNumbers[i]) result.push(i + 1);
  }

  console.log(result.join('\n'));
});

/** 시간초과 */
// let result = [];

// const fn = (num) => {
//   let i = 0;

//   while (++i < num) {
//     curr = i
//       .toString()
//       .split('')
//       .reduce((acc, value) => acc + +value, i);

//     if (curr === num) return;
//   }

//   result.push(num);
// };

// for (let i = 1; i <= 10000; i++) fn(i);

// console.log(result.join('\n'));
