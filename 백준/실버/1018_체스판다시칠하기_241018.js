{
  /**
   * https://www.acmicpc.net/problem/1018
   * 완전 탐색
   *
   * 구현1 vs. 구현2 -> 메모리나 속도 측면에서 유의미한 차이는 없는 듯..?
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
    let [n, m] = inputs[0].split(' ').map(Number);

    let boards = inputs.slice(1).map((i) => i.split(''));

    // 구현 1.
    let min1 = Infinity;

    const paint1 = (yIdx, xIdx, start) => {
      let cnt = 0;

      let curr = start;

      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
          if (x % 2 === 0 && boards[y + yIdx][x + xIdx] !== curr) {
            cnt++;
          } else if (x % 2 === 1 && boards[y + yIdx][x + xIdx] === curr) {
            cnt++;
          }
        }

        curr = curr === 'W' ? 'B' : 'W';
      }

      if (cnt < min1) {
        min1 = cnt;
      }
    };

    const solution1 = () => {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (n - i < 8 || m - j < 8) {
            continue;
          }

          paint1(i, j, 'W');
          paint1(i, j, 'B');
        }
      }

      console.log(min1);
    };

    // 구현 2. 로직 단순화 -> W로 시작하는 경우, B로 시작하는 경우 한 번에 처리하기
    let min2 = Infinity;

    const paint2 = (yIdx, xIdx) => {
      let wStartCnt = 0;
      let bStartCnt = 0;

      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
          let expectedColor = (y + x) % 2 === 0 ? 'W' : 'B';

          if (expectedColor !== boards[y + yIdx][x + xIdx]) {
            wStartCnt++;
          } else {
            bStartCnt++;
          }
        }
      }

      min2 = Math.min(min2, wStartCnt, bStartCnt);
    };

    const solution2 = () => {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (n - i < 8 || m - j < 8) {
            continue;
          }

          paint2(i, j);
        }
      }

      console.log(min2);
    };

    solution1();
    solution2();
  });
}
