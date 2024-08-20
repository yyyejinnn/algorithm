{
  /**
   * https://www.acmicpc.net/problem/1269
   * 집합 (해시)
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;
  let inputs = [];

  rl.on('line', (line) => {
    if (i > 0) {
      inputs.push(line.split(' ').map(Number));
    }

    i++;
  });

  rl.on('close', () => {
    const aSet = new Set(inputs[0]);
    const bSet = new Set(inputs[1]);

    const aMinusB = [...aSet].filter((a) => !bSet.has(a));
    const bMinusA = [...bSet].filter((b) => !aSet.has(b));

    console.log(aMinusB.length + bMinusA.length);
  });
}
