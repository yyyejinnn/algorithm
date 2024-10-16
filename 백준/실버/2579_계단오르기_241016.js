{
  /**
   * https://www.acmicpc.net/problem/2579
   * dp
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let nums = [];

  rl.on('line', (line) => {
    nums.push(Number(line));
  });

  rl.on('close', () => {
    let n = nums[0];

    const maxDp = Array(n + 1).fill(0);

    maxDp[1] = nums[1];
    maxDp[2] = nums[1] + nums[2];

    for (let i = 3; i < nums.length; i++) {
      maxDp[i] = Math.max(maxDp[i - 2] + nums[i], maxDp[i - 3] + nums[i - 1] + nums[i]);
    }

    console.log(maxDp[nums.length - 1]);
  });
}
