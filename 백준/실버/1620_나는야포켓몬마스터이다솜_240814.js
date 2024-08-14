{
  /**
   * https://www.acmicpc.net/problem/1620
   * 집합, 해시
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;
  let n, m;
  let inputs = [];

  rl.on('line', (line) => {
    if (i === 0) {
      [n, m] = line.split(' ').map(Number);
    } else {
      inputs.push(line);
    }

    i++;
  });

  rl.on('close', () => {
    const numToStr = {};
    const strToNum = {};

    for (let i = 1; i < n + 1; i++) {
      numToStr[i] = inputs[i - 1];
      strToNum[inputs[i - 1]] = i;
    }

    const tCase = inputs.slice(inputs.length - m);
    const result = tCase.map((t) => (isNaN(Number(t)) ? strToNum[t] : numToStr[t]));

    console.log(result.join('\n'));
  });
}
