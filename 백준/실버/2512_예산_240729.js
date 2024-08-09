{
  /**
   * https://www.acmicpc.net/problem/2512
   * 이분탐색 (매개변수 탐색)
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let count = 0;

  let budgets;
  let maxBudget;

  rl.on('line', (line) => {
    if (count == 1) {
      budgets = line
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a);
    } else if (count == 2) {
      maxBudget = Number(line);
    }
    count++;
  });

  rl.on('close', () => {
    let low = 0;
    let high = budgets[0];

    let answer;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      const total = budgets.reduce((prev, acc) => prev + Math.min(acc, mid), 0);

      /** reduce 로직과 동일 */
      //   for (const i of budgets) {
      //     total += Math.min(i, mid);
      //   }

      if (total <= maxBudget) {
        low = mid + 1;
        answer = mid;
      } else {
        high = mid - 1;
      }
    }

    console.log(answer);
  });
}
