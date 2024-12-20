/**
 * https://www.acmicpc.net/problem/9934
 * 이진트리 - 순회
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
  let lv = +inputs[0];
  let nums = inputs[1].split(' ').map(Number);

  let arr = Array.from({ length: lv }, () => []);

  const inOrder = (start, end, l) => {
    if (start > end || l > lv) return;

    let rootIdx = Math.floor((start + end) / 2);
    arr[l - 1].push(nums[rootIdx]);

    inOrder(start, rootIdx - 1, l + 1);
    inOrder(rootIdx + 1, end, l + 1);
  };

  inOrder(0, nums.length - 1, 1);

  console.log(arr.map((a) => a.join(' ')).join('\n'));
});
