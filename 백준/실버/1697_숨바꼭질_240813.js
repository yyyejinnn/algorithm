{
  /**
   * https://www.acmicpc.net/problem/1697
   * bfs로 최단거리 구하기
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let n, k;

  rl.on('line', (line) => {
    [n, k] = line.split(' ').map(Number);
  });

  rl.on('close', () => {
    let visited = {};

    const bfs = (x) => {
      let queue = [];
      let head = 0;

      queue.push(x);
      visited[x] = 0;

      while (head < queue.length) {
        const currX = queue[head++];

        if (currX === k) {
          return visited[currX];
        }

        const adStep = [currX - 1, currX + 1, currX * 2];

        for (let step of adStep) {
          if (step >= 0 && step <= 100000 && !visited[step]) {
            visited[step] = visited[currX] + 1;
            queue.push(step);
          }
        }
      }
    };

    console.log(bfs(n));
  });
}
