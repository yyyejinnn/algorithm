/**
 * https://acmicpc.net/problem/11399
 * 그리디, 정렬
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
  let [[n], lines] = inputs;

  // 정렬
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (lines[j] > lines[j + 1]) {
        [lines[j], lines[j + 1]] = [lines[j + 1], lines[j]];
      }
    }
  }

  // 합
  let sum = 0;
  let latency = 0;
  for (let time of lines) {
    latency += time;
    sum += latency;
  }

  console.log(sum);
});
