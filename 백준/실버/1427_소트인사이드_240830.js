{
  /**
   * https://www.acmicpc.net/problem/1427
   * 정렬
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let num;

  rl.on('line', (line) => {
    num = line.split('').map(Number);
  });

  rl.on('close', () => {
    for (let i = 0; i < num.length - 1; i++) {
      for (let j = 0; j < num.length - i; j++) {
        if (num[j] < num[j + 1]) {
          [num[j], num[j + 1]] = [num[j + 1], num[j]];
        }
      }
    }

    console.log(num.join(''));
  });
}
