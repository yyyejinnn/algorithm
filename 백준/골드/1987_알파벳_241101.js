/**
 * https://www.acmicpc.net/problem/1987
 * dfs, 시간초과 주의하기..
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line);
});

rl.on('close', () => {
  let [r, c] = inputs[0].split(' ').map(Number);

  // 시간 초과 해결1. 아스키 코드 변환 0~25 (문자열 비교보다 숫자 비교가 빠름)
  let alphabets = inputs.slice(1).map((str) => str.split('').map((str) => str.charCodeAt() - 65));

  let d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // 시간 초과 해결2. hash 대신 아스키코드 변환 인덱스 배열 사용
  let visited = Array(26).fill(0);
  visited[alphabets[0][0]] = 1;

  let max = -Infinity;

  const bfs = (y, x, depth) => {
    // if (visited[alphabets[ady][adx])) {
    //   max = Math.max(max, depth);
    //   return;
    // }

    max = Math.max(max, depth);

    for (let [dy, dx] of d) {
      let [ady, adx] = [y + dy, x + dx];

      // 시간 초과 해결3. 재귀 호출 최소화
      // 재귀 호출 후 위의 탈출 조건(if문) 타는 게 아니라, 애초에 if(false) 이면 재귀 호출 하지 않도록
      if (ady > -1 && ady < r && adx > -1 && adx < c && !visited[alphabets[ady][adx]]) {
        visited[alphabets[ady][adx]] = 1;
        bfs(ady, adx, depth + 1);
        visited[alphabets[ady][adx]] = 0;
      }
    }
  };

  bfs(0, 0, 1);
  console.log(max);
});
