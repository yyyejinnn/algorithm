/**
 * https://acmicpc.net/problem/1026
 * 그리디
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
  let [[n], as, bs] = inputs;

  as.sort((x, y) => x - y);
  bs.sort((x, y) => y - x);

  console.log(as.reduce((pre, a, i) => pre + a * bs[i], 0));

  /** for문 버전 */
  // let sum = 0;

  // for (let i = 0; i < n; i++) {
  //   sum += as[i] * bs[i];
  // }

  // console.log(sum);
});
