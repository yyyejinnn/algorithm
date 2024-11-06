/**
 * https://acmicpc.net/problem/1946
 * 그리디
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
  let [_, ...testCase] = inputs;
  let result = [];

  let i = 0;
  while (i < testCase.length) {
    let len = Number(testCase[i++]);
    let ranks = testCase.slice(i, i + len).map((t) => t.split(' ').map(Number));

    // logic...
    ranks.sort((a, b) => a[0] - b[0]);

    let minRank = Infinity;

    let passCnt = 0;

    for (let [_, r] of ranks) {
      minRank = Math.min(minRank, r);

      if (r <= minRank) {
        passCnt++;
      }
    }

    result.push(passCnt);
    i += len;
  }

  console.log(result.join('\n'));
});
