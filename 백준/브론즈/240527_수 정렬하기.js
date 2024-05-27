/**
 * https://www.acmicpc.net/problem/2750
 * 정렬
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;

rl.on('line', (line) => {
  input.push(line);

  if (input.length === 1) {
    count = parseInt(line);
  } else if (input.length === count + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  let arr = input.slice(1, count + 1).map(Number);

  insertionSort(arr);

  // 결과 출력
  for (let n of arr) {
    console.log(n);
  }
});

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let insertData = arr[i];
    let insertIdx;

    for (let j = i - 1; j > -1; j--) {
      if (insertData < arr[j]) {
        arr[j + 1] = arr[j];
        insertIdx = j;
      } else {
        insertIdx = j + 1;
        break;
      }
    }
    arr[insertIdx] = insertData;
  }
}
