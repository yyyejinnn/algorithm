{
  /**
   * https://www.acmicpc.net/problem/15652
   * 백트래킹
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let n, m;

  rl.on('line', (line) => {
    [n, m] = line.split(' ').map(Number);
  });

  rl.on('close', () => {
    let selected = [];
    let result = '';

    const backtrack = (start, depth = 0) => {
      if (depth === m) {
        result += `${selected.join(' ')}\n`;
        return;
      }

      for (let i = start; i <= n; i++) {
        selected.push(i);
        backtrack(i, depth + 1);
        selected.pop();
      }
    };

    backtrack(1);
    console.log(result);
  });
}
