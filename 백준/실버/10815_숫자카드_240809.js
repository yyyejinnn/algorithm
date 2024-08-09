{
  /**
   * https://www.acmicpc.net/problem/10815
   * 정렬
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let cards, inputs;

  rl.on('line', (line) => {
    if (i == 1) {
      cards = line
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b);
    } else if (i == 3) {
      inputs = line.split(' ').map(Number);
    }
    i++;
  });

  rl.on('close', () => {
    const isExist = (number) => {
      let low = 0;
      let high = cards.length - 1;

      while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (cards[mid] === number) {
          return 1;
        }

        if (cards[mid] > number) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }

      return 0;
    };

    const result = inputs.map((i) => isExist(i)).join(' ');

    console.log(result);
  });
}
