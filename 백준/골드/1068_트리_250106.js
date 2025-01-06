/**
 * https://www.acmicpc.net/problem/1068
 * 트리
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
let parents;

rl.on('line', (line) => {
  inputs.push(line.split(' ').map(Number));
});

rl.on('close', () => {
  let [[n], ipts, [deleted]] = inputs;

  let parents = ipts;
  let trees = Array.from({ length: n }, () => []);

  let root;

  ipts.forEach((p, i) => {
    if (p === -1) root = i;
    else trees[p].push(i);
  });

  const deltedNode = (node) => {
    // 부모 노드에서 자식 노드 삭제 (\ / 트리 고려)
    let pNode = parents[node];

    if (pNode != -1) {
      trees[pNode] = trees[pNode].filter((ch) => ch != node);
    }

    if (trees[node] == null) return;

    for (let ch of trees[node]) {
      deltedNode(ch);
    }

    trees[node] = null;
  };

  const countLeaf = (node) => {
    if (trees[node] == null) return 0;
    if (trees[node].length === 0) return 1;

    let cnt = 0;

    for (let ch of trees[node]) {
      cnt += countLeaf(ch);
    }

    return cnt;
  };

  deltedNode(deleted);
  console.log(root === deleted ? 0 : countLeaf(root));
});
