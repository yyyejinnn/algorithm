/**
 * https://www.acmicpc.net/problem/25305
 * 정렬
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testers;
let lank;
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    [_, lank] = line.split(' ');
    count++;
  }

  else if (count === 1) {
    testers = line.split(' ').map(Number);
    count++;
  }

  if (count === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  insertionSortDesc(testers);

  // 결과 출력
  console.log(testers[lank-1]);
});

function insertionSortDesc(arr) {
  for (let i = 1; i < arr.length; i++) {
    let targetData = arr[i];
    let targetIdx;

    for (let j = i - 1; j > -1; j--) {
      if (targetData > arr[j]) {
        arr[j + 1] = arr[j];
        targetIdx = j;
      } else {
        targetIdx = j + 1;
        break;
      }
    }
    arr[targetIdx] = targetData;
  }
}
