{
  /**
   * https://www.acmicpc.net/problem/11478
   * 문자열 집합
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = 0;

  rl.on('line', (line) => {
    input = line;
  });

  rl.on('close', () => {
    const set = new Set();

    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length + 1; j++) {
        set.add(input.slice(i, j));
      }
    }

    console.log(set.size);
  });
}
