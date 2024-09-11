{
  /**
   * https://www.acmicpc.net/problem/2164
   * 큐
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
    let cards = Array.from({ length: n }, (_, i) => i + 1);

    let head = 1;

    while (head < cards.length - 1) {
      cards.push(cards[head]);
      head = head + 2;
    }

    console.log(cards[cards.length - 1]);
  });
}
