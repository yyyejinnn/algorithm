{
  /**
   * https://www.acmicpc.net/problem/24511
   * 큐+스택
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];
  let n;
  let c = 0;

  rl.on('line', (line) => {
    if (c === 3) {
      n = Number(line);
    } else if (c !== 0) {
      inputs.push(line.split(' ').map(Number));
    }
    c++;
  });

  rl.on('close', () => {
    let [a, b, c] = inputs;

    let queue = b.filter((_, i) => !a[i]).reverse();

    console.log([...queue, ...c].splice(0, n).join(' '));

    // const result = c.map((cNum) => {
    //   let curr = cNum;

    //   for (let i = 0; i < n; i++) {
    //     if (!a[i]) {
    //       [curr, b[i]] = [b[i], curr];
    //     }
    //   }

    //   return curr;
    // });

    // console.log(result.join(' '));
  });
}
