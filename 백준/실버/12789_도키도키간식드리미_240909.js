{
  /**
   * https://www.acmicpc.net/problem/12789
   * 스택
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];
  let count = 0;

  rl.on('line', (line) => {
    if (count > 0) {
      inputs = line.split(' ').map(Number);
    }
    count++;
  });

  rl.on('close', () => {
    const run = () => {
      let stack = [];

      let numTicket = 1;

      let iHead = 0;
      while (iHead < inputs.length) {
        let curr = inputs[iHead];

        if (numTicket === curr) {
          numTicket++;
          iHead++;
        } else if (stack.length && stack[stack.length - 1] === numTicket) {
          stack.pop();
          numTicket++;
        } else {
          stack.push(curr);
          iHead++;
        }
      }

      while (stack.length) {
        let curr = stack.pop();

        if (numTicket !== curr) {
          return 'Sad';
        }

        numTicket++;
      }

      return 'Nice';
    };

    console.log(run());
  });
}
