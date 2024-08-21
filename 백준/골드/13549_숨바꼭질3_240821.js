{
  /**
   * https://www.acmicpc.net/problem/13549
   * dijkstra, 우선순위 큐
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    input = line;
  });

  rl.on('close', () => {
    let [n, k] = input.split(' ').map(Number);

    const dijkstra = () => {
      const visited = Array.from({ length: 100100 }, () => 0);

      let pq = [];

      pq.push([0, n]);
      visited[n] = 1;

      while (pq.length) {
        let [time, curr] = pq.shift();

        if (curr === k) {
          return time;
        }

        const moves = [curr - 1, curr + 1, curr * 2];

        for (let ad of moves) {
          if (ad > -1 && ad < 100001 && !visited[ad]) {
            visited[ad] = 1;

            if (ad === curr * 2) {
              pq.unshift([time, ad]);
            } else {
              pq.push([time + 1, ad]);
            }
          }
        }
      }
    };

    console.log(dijkstra());
  });
}
