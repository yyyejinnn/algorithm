{
  /**
   * https://www.acmicpc.net/problem/4949
   * 스택
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];

  rl.on('line', (line) => {
    if (line !== '.') inputs.push(line);
  });

  rl.on('close', () => {
    const run = (str) => {
      let stack = [];

      for (let s of str) {
        if (s === '(' || s === '[') {
          stack.push(s);
        } else if (s === ')' || s === ']') {
          if (!stack.length) {
            return 'no';
          }

          let pop = stack.pop();

          if ((s === ')' && pop !== '(') || (s === ']' && pop !== '[')) {
            return 'no';
          }
        }
      }

      return !stack.length ? 'yes' : 'no';
    };

    console.log(inputs.map((i) => run(i)).join('\n'));
  });
}
