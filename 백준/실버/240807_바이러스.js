{
  /**
   * https://www.acmicpc.net/problem/2606
   * 바이러스 / dfs 적용
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;
  let n;

  let computers;

  rl.on('line', (line) => {
    if (i == 0) {
      n = Number(line);
      computers = [...Array(n + 1)].map((a) => []);
    } else if (i > 1) {
      [u, v] = line.split(' ').map(Number);
      computers[u].push(v);
      computers[v].push(u);
    }
    i++;
  });

  rl.on('close', () => {
    const virus = Array(n + 1).fill(0);
    let cnt = 0;

    const dfs = (c) => {
      virus[c] = 1;

      // 인접
      for (const ad of computers[c]) {
        if (!virus[ad]) {
          dfs(ad);
          cnt++;
        }
      }
    };

    dfs(1);
    console.log(cnt);
  });
}
