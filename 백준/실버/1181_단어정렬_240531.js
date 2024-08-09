/**
 * https://www.acmicpc.net/problem/1181
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
  if (count > 0) {
    input.push(line);
  }
  count++;
});

rl.on('close', () => {
  const set = new Set(input);

  const sorted = [...set].sort((a, b) =>
    a.length != b.length ? a.length - b.length : a < b ? -1 : 1
  );

  /** 더 간단하게 */
  const sorted2 = [...set].sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );

  console.log(sorted.join('\n'));
});
