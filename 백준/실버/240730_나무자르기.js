{
  /**
   * https://www.acmicpc.net/problem/2805
   * 이분탐색 (매개변수 탐색)
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let count = 0;

  let treeLen;
  let trees;

  rl.on('line', (line) => {
    if (count < 1) {
      treeLen = Number(line.split(' ')[1]);
    } else {
      trees = line.split(' ').map(Number);
    }
    count++;
  });

  rl.on('close', () => {
    let left = 1;
    let right = Math.max(...trees);

    let answer = 0;

    while (left <= right) {
      const h = Math.floor((left + right) / 2);

      const total = trees.reduce((prev, t) => prev + (t - Math.min(t, h)), 0);

      if (total < treeLen) {
        right = h - 1;
      } else {
        left = h + 1;
        answer = h;
      }
    }

    console.log(answer);
  });
}
