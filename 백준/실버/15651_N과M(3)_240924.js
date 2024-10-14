{
  /**
   * https://www.acmicpc.net/problem/15651
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

    const backtrack = (len = 0) => {
      if (len === m) {
        result += `${selected.join(' ')}\n`;
        return;
      }

      for (let i = 1; i <= n; i++) {
        selected.push(i);
        backtrack(len + 1);
        selected.pop();
      }
    };

    backtrack();
    console.log(result);
  });
}
