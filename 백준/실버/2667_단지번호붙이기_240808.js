{
  /**
   * https://www.acmicpc.net/problem/2667
   * dfs 사용
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let len;
  let homes = [];

  rl.on('line', (line) => {
    if (i > 0) {
      homes.push(line.split('').map(Number));
    } else {
      len = Number(line);
    }

    i++;
  });

  rl.on('close', () => {
    let result = [];

    const dfs = (x, y) => {
      if (x < 0 || x >= len || y < 0 || y >= len || homes[x][y] === 0) {
        return 0;
      }

      homes[x][y] = 0; // 방문했으므로 0으로 업데이트
      let cnt = 1;

      // 인접한 집 방문
      cnt += dfs(x - 1, y); // left
      cnt += dfs(x + 1, y); // right
      cnt += dfs(x, y + 1); // top
      cnt += dfs(x, y - 1); // down

      return cnt;
    };

    for (let x = 0; x < len; x++) {
      for (let y = 0; y < len; y++) {
        if (homes[x][y] === 1) {
          result.push(dfs(x, y));
        }
      }
    }

    console.log(result.length + '\n' + result.sort((a, b) => a - b).join('\n'));
  });
}
