/**
 * https://acmicpc.net/problem/13305
 * 그리디
 * !! 정수 범위가 커서 Number 말고 BigInt 사용해야 함
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line.split(' ').map(BigInt));
});

rl.on('close', () => {
  let [[n], distances, costs] = inputs;

  let minCost = costs[0];
  let totalCost = 0n;

  for (let i = 0; i < distances.length; i++) {
    totalCost += minCost * distances[i];

    if (minCost > costs[i + 1]) {
      minCost = costs[i + 1];
    }
  }

  console.log(totalCost.toString());

  /** 역순 -> 오답
   * 5
   * 1 1 1 1
   * 3 4 3 2 1
   * ans: 11, out:12
   */
  // let accCost = 0;
  // let accDis = 0;

  // for (let i = n - 2; i >= 0; i--) {
  //   accDis += distances[i];
  //   accCost = Math.min(costs[i] * accDis, costs[i] * distances[i] + accCost);
  // }
  // console.log(accCost);
});
