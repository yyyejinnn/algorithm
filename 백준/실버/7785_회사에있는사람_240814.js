{
  /**
   * https://www.acmicpc.net/problem/7785
   * 집합, 해시
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;
  let inputs = [];

  rl.on('line', (line) => {
    if (i > 0) {
      inputs.push(line);
    }

    i++;
  });

  rl.on('close', () => {
    const set = new Set();

    for (let i of inputs) {
      let [name, status] = i.split(' ');

      if (status === 'enter') {
        set.add(name);
      } else {
        set.delete(name);
      }
    }

    console.log([...set].sort().reverse().join('\n'));
  });
}
