/**
 * https://www.acmicpc.net/problem/1920
 * 이진탐색
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nArr;
let mArr;
let i = 0;

rl.on('line', (line) => {
  if (i == 1) {
    nArr = line.split(' ').sort();
  } else if (i == 3) {
    mArr = line.split(' ');
  }

  i++;
});

rl.on('close', () => {
  const result = mArr.map((target) => binarySearch(target));
  console.log(result.join('\n'));
});

function binarySearch(target) {
  let start = 0;
  let end = nArr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nArr[mid] == target) {
      return 1;
    }

    if (nArr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return 0;
}

/**
 * 메모리 초과
 */
// rl.on('close', () => {
//   const result = mArr.map((targetNum) => binarySearch(targetNum, nArr));
//   console.log(result.join('\n'));
// });

// function binarySearch(targetNum, arr) {
//   if (arr.length < 1) {
//     return 0;
//   }

//   const mid = Math.floor(arr.length / 2);

//   if (arr[mid] == targetNum) {
//     return 1;
//   } else if (arr[mid] > targetNum) {
//     return binarySearch(targetNum, arr.slice(0, mid));
//   } else {
//     return binarySearch(targetNum, arr.slice(mid + 1, arr.length));
//   }
// }
