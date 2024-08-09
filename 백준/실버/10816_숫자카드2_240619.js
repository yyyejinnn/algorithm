/**
 * https://www.acmicpc.net/problem/10816
 * 해시 or 이분탐색 사용
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
    nArr = line.split(' ').map(Number);
  } else if (i == 3) {
    mArr = line.split(' ').map(Number);
  }

  i++;
});

/**
 * 1. 해시 (Map)
 */
let mMap = new Map();

rl.on('close', () => {
  nArr.forEach((n) => mMap.set(n, mMap.has(n) ? mMap.get(n) + 1 : 1));
  const result = mArr.map((m) => mMap.get(m) ?? 0);

  console.log(result.join(' '));
});

/**
 * 2. 이분 탐색 (lower, upper bound) - https://st-lab.tistory.com/267
 * - low: 이상, upper: 초과
 */
rl.on('close', () => {
  nArr.sort((a, b) => a - b);

  const result = mArr.map((m) => upper(m) - lower(m));
  console.log(result.join(' '));
});

function lower(target) {
  let low = 0;
  let high = nArr.length;

  let mid;

  while (low != high) {
    mid = Math.floor((low + high) / 2);

    if (target > nArr[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

function upper(target) {
  let low = 0;
  let high = nArr.length;

  let mid;

  while (low != high) {
    mid = Math.floor((low + high) / 2);

    if (target < nArr[mid]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
}
