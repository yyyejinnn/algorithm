{
  /**
   * https://www.acmicpc.net/problem/1012
   * dfs/bfs
   *
   * 구현보다 input 받는게 더 어려웠다 ㅎ..
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let tCnt = 0;
  let inputs = [];

  rl.on('line', (line) => {
    if (!i) {
      tCnt = Number(line);
    } else {
      inputs.push(line.split(' ').map(Number));
    }

    i++;
  });

  let testCase = [];
  let result = [];

  rl.on('close', () => {
    let m, n, k;

    let idx = 0;

    // 초기화
    for (let t = 0; t < tCnt; t++) {
      [m, n, k] = inputs[idx++];

      let fields = [...Array(n)].map(() => Array(m).fill(0)); // 2차원 배열

      for (let i = 0; i < k; i++) {
        let [x, y] = inputs[idx++];
        fields[y][x] = 1;
      }

      testCase.push({ m, n, fields });
    }

    // dfs
    for (let tc of testCase) {
      let { m, n, fields } = tc;

      let fCnt = 0;

      for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
          if (dfs(x, y, m, n, fields) > 0) {
            fCnt++;
          }
        }
      }

      result.push(fCnt);
    }

    console.log(result.join('\n'));
  });

  function dfs(x, y, xLen, yLen, fields) {
    if (x < 0 || x >= xLen || y < 0 || y >= yLen || !fields[y][x]) {
      return 0;
    }

    if (fields[y][x] == 1) {
      let cnt = 1;
      fields[y][x] = 0;

      cnt += dfs(x + 1, y, xLen, yLen, fields);
      cnt += dfs(x - 1, y, xLen, yLen, fields);
      cnt += dfs(x, y + 1, xLen, yLen, fields);
      cnt += dfs(x, y - 1, xLen, yLen, fields);

      return cnt;
    }
  }
}
