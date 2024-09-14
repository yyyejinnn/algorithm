{
  /**
   * https://www.acmicpc.net/problem/15649
   * 백트래킹
   * 걍 외워
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
    let visited = Array(n).fill(false);
    let result = '';
    let selected = [];

    const backtrack = (cnt = 0) => {
      if (cnt === m) {
        result += `${[...selected].join(' ')}\n`;
        return;
      }

      for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
          visited[i] = true;
          selected.push(i);
          backtrack(cnt + 1);
          selected.pop();
          visited[i] = false;
        }
      }
    };

    backtrack();

    console.log(result);
  });
}
