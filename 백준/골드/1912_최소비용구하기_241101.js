/**
 * https://www.acmicpc.net/problem/1916
 * 다익스트라
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line.split(' ').map(Number));
});

rl.on('close', () => {
  let [[n], [m], ...others] = inputs;

  let city = Array.from({ length: n + 1 }, () => new Map());

  for (let i = 0; i < m; i++) {
    let [s, e, c] = others[i];
    city[s].set(e, Math.min(city[s].get(e) ?? Infinity, c));
  }

  let [start, end] = others[m];

  // 다익스트라
  let minPath = Array(n + 1).fill(Infinity);

  let queue = [start];
  let head = 0;
  minPath[start] = 0;

  while (head < queue.length) {
    let curr = queue[head++];

    for (let [adCity, cost] of city[curr]) {
      let newCost = minPath[curr] + cost;

      if (newCost < minPath[adCity]) {
        minPath[adCity] = newCost;
        queue.push(adCity);
      }
    }

    // 메모리초과 버전..
    // for (let [adCity, cost] of Object.entries(city[curr])) {
    //   minPath[adCity] = Math.min(minPath[adCity], minPath[curr] + cost);
    //   queue.push(adCity);
    // }
  }

  console.log(minPath[end]);
});
