{
  /**
   * https://www.acmicpc.net/problem/1912
   * dp - 카데인 알고리즘..?
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
    let arr = inputs[1].split(' ').map(Number);

    let maxArr = new Array(n).fill(-Infinity);
    maxArr[0] = arr[0];

    const kadane = () => {
      let max = maxArr[0];

      for (let i = 1; i < n; i++) {
        maxArr[i] = Math.max(arr[i], arr[i] + maxArr[i - 1]);
        max = Math.max(max, maxArr[i]);
      }

      return max;
    };

    console.log(kadane());
  });
}
