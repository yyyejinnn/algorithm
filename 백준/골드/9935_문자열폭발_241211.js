/**
 * https://www.acmicpc.net/problem/9935
 * 스택
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
  let [strs, bomb] = inputs;

  let stack = [];
  let bLen = bomb.length;

  for (let s of strs) {
    stack.push(s);

    if (stack.slice(stack.length - bLen).join('') === bomb) {
      for (let i = 0; i < bLen; i++) stack.pop();
      // stack.length -= bLen; 배열 크기 조정으로 한번에 잘라낼 수 있음 O(1)
    }
  }

  console.log(stack.join('') || 'FRULA');
});
