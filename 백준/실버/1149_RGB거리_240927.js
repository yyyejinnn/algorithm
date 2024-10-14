{
  /**
   * https://www.acmicpc.net/problem/1149
   * dp
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
    let n = Number(inputs[0]);
    let houses = inputs.slice(1).map((i) => i.split(' ').map(Number));

    let minCost = [...Array(n)].map(() => Array(3).fill(Infinity));
    minCost[0] = houses[0];

    let [r, g, b] = [0, 1, 2];

    for (let i = 1; i < n; i++) {
      minCost[i][r] = houses[i][r] + Math.min(minCost[i - 1][g], minCost[i - 1][b]);
      minCost[i][g] = houses[i][g] + Math.min(minCost[i - 1][r], minCost[i - 1][b]);
      minCost[i][b] = houses[i][b] + Math.min(minCost[i - 1][r], minCost[i - 1][g]);
    }

    console.log(Math.min(...minCost[n - 1]));
  });
}
