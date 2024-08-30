{
  /**
   * https://www.acmicpc.net/problem/2447
   * 재귀
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let num;

  rl.on('line', (line) => {
    num = Number(line);
  });

  rl.on('close', () => {
    let result = '';

    const draw = (x, y, n) => {
      if (n === 1) {
        result += '*';
        return;
      }

      let size = n / 3;

      if (Math.floor(x / size) % 3 === 1 && Math.floor(y / size) % 3 === 1) {
        result += ' ';
        return;
      }

      draw(x, y, size);
    };

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        draw(i, j, num);
      }

      result += '\n';
    }

    console.log(result);
  });
}
