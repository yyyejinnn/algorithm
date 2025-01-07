/**
 * https://www.acmicpc.net/problem/1967
 * 트리
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
  let [[n], ...ipts] = inputs;

  let trees = Array.from({ length: n + 1 }, () => []);

  // 노드 1개면 지름은 0
  if (n === 1) {
    console.log(0);
    return;
  }

  // 초기화
  for (let [p, c, v] of ipts) {
    trees[p].push([c, v]);
    trees[c].push([p, v]);
  }

  const dfs = (startNode) => {
    let distance = Array(n + 1).fill(-1);
    distance[startNode] = 0; // 시작거리 0

    let stack = [[startNode, 0]];

    let maxNode = startNode;
    let maxDistance = -Infinity;

    while (stack.length > 0) {
      let [currNode, _] = stack.pop();

      for (let [nextNode, weight] of trees[currNode]) {
        if (distance[nextNode] === -1) {
          stack.push([nextNode, weight]);
          distance[nextNode] = distance[currNode] + weight;
        }

        if (distance[nextNode] > maxDistance) {
          maxDistance = distance[nextNode];
          maxNode = nextNode;
        }
      }
    }

    return [maxNode, maxDistance];
  };

  const [firstNode, _] = dfs(1); // 가장 가중치가 큰 한 점(노드) 찾은 후
  const [__, maxWeight] = dfs(firstNode); // 그 점을 기준으로 가장 가중치가 큰 노드 찾기

  console.log(maxWeight);
});
