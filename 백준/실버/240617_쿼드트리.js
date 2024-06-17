/**
 * https://www.acmicpc.net/problem/1992
 * 분할정복
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let videos = [];
let i = 0;
let length;

rl.on('line', (line) => {
  if (i > 0) {
    videos.push(line.split(''));
  } else {
    length = line;
  }

  i++;
});

rl.on('close', () => {
  compressVideo(0, 0, length);
  console.log(result);
});

let result = '';

function compressVideo(y, x, size) {
  const half = size / 2;

  const first = videos[y][x];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (videos[y + i][x + j] != first) {
        result += '(';
        compressVideo(y, x, half);
        compressVideo(y, x + half, half);
        compressVideo(y + half, x, half);
        compressVideo(y + half, x + half, half);
        result += ')';

        return;
      }
    }
  }

  result += first;
  return;
}
