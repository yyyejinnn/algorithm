/**
 * https://www.acmicpc.net/problem/1107
 * 브루트포스
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
  let [[n], [m], brokens] = inputs;

  const isBroken = Array(10).fill(false);
  if (brokens) brokens.forEach((b) => (isBroken[b] = true));

  const validButtons = [...Array(10)].map((_, i) => i).filter((n) => !isBroken[n]);

  let combis = [];
  let q = [];

  let minDepth = String(n).length - 1;
  let maxDepth = String(n).length + 1;

  const combi = () => {
    if (q.length > maxDepth) return;

    if (q.length && q.length >= minDepth && q.length <= maxDepth) {
      combis.push(+q.join(''));
    }

    for (let n of validButtons) {
      q.push(n);
      combi();
      q.pop();
    }
  };

  const calcMinPress = () => {
    let minPress = Math.abs(100 - n);

    for (let c of combis) {
      let buttonPress = c.toString().length; // 숫자 클릭
      let movePress = Math.abs(n - c); // +/-

      minPress = Math.min(minPress, buttonPress + movePress);
    }

    return minPress;
  };

  const remote = () => {
    if (n === 100) return 0;

    combi();

    return calcMinPress();
  };

  console.log(remote());
});
