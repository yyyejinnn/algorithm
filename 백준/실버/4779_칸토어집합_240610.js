/**
 * https://www.acmicpc.net/problem/4779
 * 재귀 - 병합 정렬
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(Number(line));
});

rl.on('close', () => {
  const results = inputs.map((i) => mergeSort(3 ** i));

  console.log(results.join('\n'));
});

function mergeSort(input) {
  if (input <= 1) {
    return '-';
  }

  const str = mergeSort(input / 3);
  const emptyStr = ' '.repeat(input / 3);

  return str + emptyStr + str;
}
