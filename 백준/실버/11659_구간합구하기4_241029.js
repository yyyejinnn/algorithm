{
  /**
   * https://www.acmicpc.net/problem/11659
   * 누적합
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];

  rl.on('line', (line) => {
    inputs.push(line.split(' ').map(Number));
  });

  rl.on('close', () => {
    let [[n, m], nums, ...range] = inputs;

    let dp = Array(n).fill(0);
    dp[0] = nums[0];

    for (let i = 1; i < n; i++) {
      dp[i] = dp[i - 1] + nums[i];
    }

    console.log(range.map(([i, j]) => dp[j - 1] - (dp[i - 2] ?? 0)).join('\n'));
  });
}
