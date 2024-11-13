/**
 * https://acmicpc.net/problem/15686
 * 브루트포스, 백트래킹
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
  let [n, m] = inputs[0];
  let maps = inputs.slice(1);

  let chicken = [];
  let house = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (maps[i][j] === 2) chicken.push([i, j]);
      else if (maps[i][j] === 1) house.push([i, j]);
    }
  }

  let q = [];
  let cityChickenDistance = Infinity;

  const closed = (idx) => {
    if (q.length === m) {
      let sum = 0;

      for (let [hy, hx] of house) {
        let cDistance = Infinity;

        for (let [cy, cx] of q) {
          cDistance = Math.min(cDistance, Math.abs(hy - cy) + Math.abs(hx - cx));
        }

        sum += cDistance;
      }

      cityChickenDistance = Math.min(cityChickenDistance, sum);
      return;
    }

    for (let i = idx; i < chicken.length; i++) {
      q.push(chicken[i]);
      closed(i + 1);
      q.pop();
    }
  };

  closed(0);

  console.log(cityChickenDistance);
});
