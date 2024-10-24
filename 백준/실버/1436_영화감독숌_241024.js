{
  /**
   * https://www.acmicpc.net/problem/1436
   * 브루트 포스
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let n;

  rl.on('line', (line) => {
    n = Number(line);
  });

  rl.on('close', () => {
    let [i, cnt] = [0, 0];

    while (cnt < n) {
      if ((++i).toString().includes('666')) cnt++;
    }

    console.log(i);
  });
}
