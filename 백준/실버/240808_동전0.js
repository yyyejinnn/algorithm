{
  /**
   * https://www.acmicpc.net/problem/11047
   * greedy
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let money;
  let coins = [];

  rl.on('line', (line) => {
    if (i > 0) {
      coins.push(Number(line));
    } else {
      [_, money] = line.split(' ').map(Number);
    }

    i++;
  });

  rl.on('close', () => {
    let cnt = 0;

    for (let i = coins.length - 1; i > -1; i--) {
      while (money > 0) {
        if (money < coins[i]) {
          break;
        }

        money -= coins[i];
        cnt++;
      }
    }

    console.log(cnt);
  });
}
