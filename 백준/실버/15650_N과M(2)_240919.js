{
  /**
   * https://www.acmicpc.net/problem/15650
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
    let visited = Array(n).fill(false);
    let result = '';

    let selected = [];

    const backtrack = (cnt = 0) => {
      if (cnt === m) {
        result += `${selected.join(' ')}\n`;
      }

      for (let i = 1; i <= n; i++) {
        if (!visited[i] && (selected[selected.length - 1] ?? 0) < i) {
          selected.push(i);
          visited[i] = true;
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
