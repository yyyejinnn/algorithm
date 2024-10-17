{
  /**
   * https://www.acmicpc.net/problem/2798
   * 완전 탐색
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
    let nums = inputs[1];

    const solution = () => {
      let max = 0;

      for (let a = 0; a < n - 2; a++) {
        for (let b = a + 1; b < n - 1; b++) {
          for (let c = b + 1; c < n; c++) {
            let curr = nums[a] + nums[b] + nums[c];

            if (curr === m) {
              return curr;
            }

            if (curr < m && curr - max > 0) {
              max = curr;
            }
          }
        }
      }

      return max;
    };

    console.log(solution());
  });
}
