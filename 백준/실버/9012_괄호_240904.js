{
  /**
   * https://www.acmicpc.net/problem/9012
   * 스택
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];
  let i = 0;

  rl.on('line', (line) => {
    if (i > 0) {
      inputs.push(line.split(''));
    }
    i++;
  });

  rl.on('close', () => {
    let result = [];

    const vps = (str) => {
      let stack = [];

      for (let s of str) {
        if (s === '(') {
          stack.push(s);
        } else {
          if (stack.length === 0) {
            result.push('NO');
            return;
          }

          stack.pop();
        }
      }

      result.push(stack.length === 0 ? 'YES' : 'NO');
    };

    inputs.forEach((i) => vps(i));

    console.log(result.join('\n'));
  });
}
