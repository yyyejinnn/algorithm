{
  /**
   * https://www.acmicpc.net/problem/1932
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
    let triangles = inputs.slice(1).map((m) => m.split(' ').map(Number));

    let calcResults = {};
    calcResults['0_0'] = triangles[0][0];

    const backtrack = () => {
      let max = triangles[0][0];

      for (let i = 1; i < n; i++) {
        for (let j = 0; j < i + 1; j++) {
          calcResults[`${i}_${j}`] =
            triangles[i][j] +
            Math.max(calcResults[`${i - 1}_${j - 1}`] ?? -Infinity, calcResults[`${i - 1}_${j}`] ?? -Infinity);

          max = Math.max(max, calcResults[`${i}_${j}`]);
        }
      }

      return max;
    };

    console.log(backtrack());
  });
}
