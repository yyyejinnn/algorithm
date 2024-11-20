/**
 * https://www.acmicpc.net/problem/1759
 * 브루트포스+백트래킹
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line.split(' '));
});

rl.on('close', () => {
  let [[l, c], strs] = inputs;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  strs.sort();

  let result = [];
  let q = [];

  const password = (idx, vCnt = 0, cCnt = 0) => {
    if (q.length === +l && vCnt >= 1 && cCnt >= 2) {
      result.push(q.join(''));
      return;
    }

    for (let i = idx; i < +c; i++) {
      const s = strs[i];
      const isVowel = vowels.has(s);

      q.push(s);
      password(i + 1, isVowel ? vCnt + 1 : vCnt, isVowel ? cCnt : cCnt + 1);
      q.pop();
    }
  };

  password(0);
  console.log(result.join('\n'));
});
