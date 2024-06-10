/**
 * https://www.acmicpc.net/problem/24060
 * 재귀 - 병합 정렬
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr;
let k;

let i = 0;

rl.on('line', (line) => {
  if (i < 1) {
    [_, k] = line.split(' ');
  } else {
    arr = line.split(' ').map(Number);
  }
  i++;
});

rl.on('close', () => {
  mergeSort(arr);
  console.log(result ?? -1);
});

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const midIdx = Math.ceil(arr.length / 2);

  const leftArr = mergeSort(arr.slice(0, midIdx));
  const rightArr = mergeSort(arr.slice(midIdx, arr.length));

  if (!(leftArr && rightArr)) {
    return;
  }

  return merge(leftArr, rightArr);
}

let result;
let count = 0;

function merge(leftArr, rightArr) {
  let newArr = [];
  let [lIdx, rIdx] = [0, 0];

  while (lIdx < leftArr.length && rIdx < rightArr.length) {
    if (leftArr[lIdx] < rightArr[rIdx]) {
      newArr.push(leftArr[lIdx++]);
    } else {
      newArr.push(rightArr[rIdx++]);
    }

    count++;
    if (count == k) {
      result = newArr[newArr.length - 1];
      return;
    }
  }

  if (lIdx < leftArr.length) {
    while (lIdx < leftArr.length) {
      newArr.push(leftArr[lIdx++]);

      count++;
      if (count == k) {
        result = newArr[newArr.length - 1];
        return;
      }
    }
  } else {
    while (rIdx < rightArr.length) {
      newArr.push(rightArr[rIdx++]);

      count++;
      if (count == k) {
        result = newArr[newArr.length - 1];
        return;
      }
    }
  }

  return newArr;
}

/** 메모리 초과.. */
// function mergeSort(arr, leftIdx, rightIdx) {
//   if (leftIdx < rightIdx) {
//     let midIdx = parseInt((leftIdx + rightIdx) / 2);

//     mergeSort(arr, leftIdx, midIdx);
//     mergeSort(arr, midIdx + 1, rightIdx);

//     merge(arr, leftIdx, midIdx, rightIdx);
//   }
// }

// let tempArr;

// function merge(arr, leftIdx, midIdx, rightIdx) {
//   tempArr = Array(rightIdx + 1).fill(0);

//   let leftAreaIdx = leftIdx;
//   let rigthAreaIdx = midIdx + 1;

//   let currTempArrIdx = leftIdx;

//   while (leftAreaIdx <= midIdx && rigthAreaIdx <= rightIdx) {
//     if (arr[leftAreaIdx] < arr[rigthAreaIdx]) {
//       addTempArr(currTempArrIdx++, arr[leftAreaIdx++]);
//     } else {
//       addTempArr(currTempArrIdx++, arr[rigthAreaIdx++]);
//     }
//   }

//   // 한쪽 정렬 다 끝났을 경우
//   if (leftAreaIdx <= midIdx) {
//     while (leftAreaIdx <= midIdx) {
//       addTempArr(currTempArrIdx++, arr[leftAreaIdx++]);
//     }
//   } else {
//     while (rigthAreaIdx <= rightIdx) {
//       addTempArr(currTempArrIdx++, arr[rigthAreaIdx++]);
//     }
//   }
// }

// function addTempArr(tempIdx, data) {
//   tempArr[tempIdx] = data;
//   count++;

//   if (count == k) {
//     console.log(data);
//     process.exit();
//   }
// }
