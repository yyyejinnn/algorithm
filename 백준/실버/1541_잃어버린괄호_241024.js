{
  /**
   * https://www.acmicpc.net/problem/1541
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input;

  rl.on('line', (line) => {
    input = line;
  });

  rl.on('close', () => {
    const result = input // 10+20+30+40
      .split('-') // [ '10+20+30+40' ]
      .map((forSum) => forSum.split('+').reduce((acc, curr) => +acc + +curr)) // [ 100 ]
      .reduce((acc, curr) => +acc - +curr); // map 결과 배열 길이가 1인 경우 reduce 거치지않고 해당 요소 바로 반환

    console.log(result);
  });
}
