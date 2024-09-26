{
  /**
   * https://www.acmicpc.net/problem/14888
   * 백트래킹
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
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => parseInt(a / b);

    const numCnt = inputs[0];
    const nums = inputs[1].split(' ').map(Number);
    const oCnt = inputs[2].split(' ').map(Number);

    let operators = {
      0: add,
      1: subtract,
      2: multiply,
      3: divide,
    };

    // 백트래킹

    let min = Infinity;
    let max = -Infinity;

    let selected = [];

    const calc = () => {
      if (selected.length === numCnt - 1) {
        let curr = nums[0];

        for (let i = 0; i < selected.length; i++) {
          curr = operators[selected[i]](curr, nums[i + 1]);
        }

        min = Math.min(min, curr);
        max = Math.max(max, curr);

        return;
      }

      for (let i = 0; i < 4; i++) {
        if (oCnt[i] > 0) {
          selected.push(i);
          oCnt[i]--;
          calc();
          oCnt[i]++;
          selected.pop();
        }
      }
    };

    calc();
    console.log(max + '\n' + min);
  });
}
