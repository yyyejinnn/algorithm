{
  /**
   * https://www.acmicpc.net/problem/14425
   * 문자열, 집합(with 해시)
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let n, m;
  let inputs = [];

  rl.on('line', (line) => {
    if (i == 0) {
      [n, m] = line.split(' ').map(Number);
    } else {
      inputs.push(line);
    }
    i++;
  });

  rl.on('close', () => {
    const S = inputs.slice(0, n);
    const strs = inputs.slice(n);

    const set = new Set();

    S.forEach((s) => set.add(s));

    console.log(strs.filter((s) => set.has(s)).length);

    /** 중복 for문 -> 시간 초과.. */
    // for (let s of S) {
    //   for (let str of strs) {
    //     if (s.includes(str) && s.length == str.length) {
    //       cnt++;
    //     }
    //   }
    // }

    // console.log(cnt);
  });
}
