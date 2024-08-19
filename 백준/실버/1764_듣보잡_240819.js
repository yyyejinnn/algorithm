{
  /**
   * https://www.acmicpc.net/problem/1764
   * 문자열 집합
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let n, m;

  let inputs = [];

  rl.on('line', (line) => {
    if (!i) {
      [n, m] = line.split(' ').map(Number);
    } else {
      inputs.push(line);
    }

    i++;
  });

  rl.on('close', () => {
    let unheard = inputs.slice(0, n);
    let unseen = inputs.slice(n);

    let obj = {};

    unheard.forEach((h) => (obj[h] = 0));
    unseen.forEach((s) => obj[s]++);

    let result = [];

    Object.entries(obj).forEach(([key, value]) => {
      if (value > 0) {
        result.push(key);
      }
    });

    result.sort();

    console.log(result.length + '\n' + result.join('\n'));
  });
}
