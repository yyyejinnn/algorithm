/**
 * https://www.acmicpc.net/problem/25501
 * 재귀
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let strArr = [];

let count = 0;
rl.on('line', (line) => {
  if (count > 0) {
    strArr.push(line);
  }

  count++;
});

rl.on('close', () => {
  const result = strArr.map((str) => isPalindrome(str, 0, str.length - 1, 0));

  console.log(result.join('\n'));
});

function isPalindrome(str, idx1, idx2, count) {
  const currCount = count + 1;

  if (str[idx1] != str[idx2]) {
    return `${0} ${currCount}`;
  } else if (idx1 >= idx2) {
    return `${1} ${currCount}`;
  }

  return isPalindrome(str, idx1 + 1, idx2 - 1, currCount);
}
