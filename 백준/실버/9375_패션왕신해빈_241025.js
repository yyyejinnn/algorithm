{
  /**
   * https://www.acmicpc.net/problem/9375
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];

  rl.on('line', (line) => {
    inputs.push(line);
  });

  rl.on('close', () => {
    let result = [];

    let i = 1;

    while (i < inputs.length) {
      const cnt = Number(inputs[i++]);

      if (cnt === 0) {
        result.push(0);
        continue;
      }

      let map = new Map();

      inputs.slice(i, i + cnt).forEach((wear) => {
        let [_, kind] = wear.split(' ');

        map.set(kind, (map.get(kind) || 1) + 1);
      });

      result.push([...map.values()].reduce((acc, value) => acc * value) - 1);

      i += cnt;
    }

    console.log(result.join('\n'));
  });
}
