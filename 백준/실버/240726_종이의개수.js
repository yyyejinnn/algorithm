{
  /**
   * https://www.acmicpc.net/problem/1780
   * 분할정복
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let arr = [];

  let result = {
    '-1': 0,
    0: 0,
    1: 0,
  };

  let num = -1;

  rl.on('line', (line) => {
    if (num !== -1) {
      arr.push(line.split(' ').map(Number));
    } else {
      num = Number(line);
    }
  });

  rl.on('close', () => {
    recursion(0, 0, num);

    console.log(result[-1]);
    console.log(result[0]);
    console.log(result[1]);
  });

  function recursion(x, y, arrLen) {
    if (arrLen < 1) {
      return;
    }

    let targetNum = arr[x][y];

    for (let i = x; i < arrLen + x; i++) {
      for (let j = y; j < arrLen + y; j++) {
        if (arr[i][j] !== targetNum) {
          const len = Math.floor(arrLen / 3);

          //   recursion(x, y, len);
          //   recursion(x, y + len, len);
          //   recursion(x, y + len * 2, len);

          //   recursion(x + len, y, len);
          //   recursion(x + len, y + len, len);
          //   recursion(x + len, y + len * 2, len);

          //   recursion(x + len * 2, y, len);
          //   recursion(x + len * 2, y + len, len);
          //   recursion(x + len * 2, y + len * 2, len);

          /** 위의 로직 for문으로 처리 */
          for (let a = 0; a < 3; a++) {
            for (let b = 0; b < 3; b++) {
              recursion(x + a * len, y + b * len, len);
            }
          }

          return;
        }
      }
    }

    result[targetNum]++;
  }
}
