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
  for (let o of orders) {
    const [order, x] = o;

    switch (order) {
      case 1: {
        stack.push(x);
        break;
      }
      case 2: {
        console.log(stack.pop() ?? -1);
        break;
      }
      case 3: {
        console.log(stack.length);
        break;
      }
      case 4: {
        console.log(Number(stack.length === 0));
        break;
      }
      case 5: {
        console.log(stack[stack.length - 1] ?? -1);
        break;
      }
    }
  }
});
