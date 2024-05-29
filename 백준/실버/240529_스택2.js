/**
 * https://www.acmicpc.net/problem/28278
 * 스택
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let orders = [];
let stack = [];
let count = 0;

rl.on('line', (line) => {
  if (count > 0) {
    orders.push(line.split(' '));
  }
  count++;
});

rl.on('close', () => {
  let result = [];

  for (let o of orders) {
    const [order, x] = o;

    switch (order) {
      case '1': {
        stack.push(x);
        break;
      }
      case '2': {
        result.push(stack.pop() ?? -1);
        break;
      }
      case '3': {
        result.push(stack.length);
        break;
      }
      case '4': {
        result.push(Number(stack.length === 0));
        break;
      }
      case '5': {
        result.push(stack[stack.length - 1] ?? -1);
        break;
      }
    }
  }

  // console -> 시간 증가 -> 최소한으로 사용하자
  // https://www.acmicpc.net/board/view/128927
  console.log(result.join('\n'));
});
