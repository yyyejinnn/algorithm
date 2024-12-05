/**
 * https://www.acmicpc.net/problem/1253
 * 정렬+투포인터
 *
 * !! 투포인터는 정렬된 상태에서만 유효 !!
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line);
});

rl.on('close', () => {
  let n = +inputs[0];
  let nums = inputs[1].split(' ').map(Number);

  nums.sort((a, b) => a - b);

  let good = 0;

  const twoPointer = (idx) => {
    let target = nums[idx];
    let [l, r] = [0, n - 1];

    while (l < r) {
      if (l === idx || r === idx) {
        l === idx ? l++ : r--;
        continue;
      }

      let sum = nums[l] + nums[r];

      if (sum === target) {
        good++;
        return;
      }

      if (sum > target) r--;
      else l++;
    }
  };

  for (let i = 0; i < n; i++) twoPointer(i);

  console.log(good);
});
