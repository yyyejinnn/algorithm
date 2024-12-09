/**
 * https://www.acmicpc.net/problem/1991
 * 트리
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
  let [[n], ...ipts] = inputs;

  let tree = Array(n + 3).fill(null);
  tree[1] = 'A';

  const charToCode = (a) => a.charCodeAt(0) - 64; // A부터 1, 2, 3 ...

  ipts.forEach(([curr, l, r]) => {
    let cCode = charToCode(curr);

    if (l !== '.') tree[cCode * 2] = l;
    if (r !== '.') tree[cCode * 2 + 1] = r;
  });

  // run
  let results = ['', '', ''];

  const preTraversal = (idx) => {
    let alp = tree[idx];
    if (!alp) return;

    results[0] += alp;
    preTraversal(charToCode(alp) * 2);
    preTraversal(charToCode(alp) * 2 + 1);
  };

  const inTraversal = (idx) => {
    let alp = tree[idx];
    if (!alp) return;

    inTraversal(charToCode(alp) * 2);
    results[1] += alp;
    inTraversal(charToCode(alp) * 2 + 1);
  };

  const postTraversal = (idx) => {
    let alp = tree[idx];
    if (!alp) return;

    postTraversal(charToCode(alp) * 2);
    postTraversal(charToCode(alp) * 2 + 1);
    results[2] += alp;
  };

  preTraversal(1);
  inTraversal(1);
  postTraversal(1);

  console.log(results.join('\n'));
});
