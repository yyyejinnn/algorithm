/**
 * https://www.acmicpc.net/problem/2587
 * 정렬
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let count = 0;

rl.on('line', (line) => {
  if (count < 5) {
    arr.push(Number(line));
    count++;
  }

  if (count === 5) {
    rl.close();
  }
});

rl.on('close', () => {
  bubbleSort(arr);

  // 결과 출력
  console.log(arr.reduce((pre, curr) => pre + curr, 0) / arr.length);
  console.log(arr[2]);
});

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
