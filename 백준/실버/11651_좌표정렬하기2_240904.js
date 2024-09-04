{
  /**
   * https://www.acmicpc.net/problem/11651
   * 정렬
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];
  let i = 0;

  rl.on('line', (line) => {
    if (i > 0) {
      inputs.push(line.split(' ').map(Number));
    }
    i++;
  });

  rl.on('close', () => {
    const merge = (start, mid, end) => {
      let lIdx = start;
      let rIdx = mid + 1;

      let tempArr = [];

      while (lIdx <= mid && rIdx <= end) {
        let [lx, ly] = inputs[lIdx];
        let [rx, ry] = inputs[rIdx];

        if (ly < ry || (ly === ry && lx < rx)) {
          tempArr.push(inputs[lIdx++]);
        } else {
          tempArr.push(inputs[rIdx++]);
        }
      }

      while (lIdx <= mid) {
        tempArr.push(inputs[lIdx++]);
      }

      while (rIdx <= end) {
        tempArr.push(inputs[rIdx++]);
      }

      let i = 0;

      for (let j = start; j <= end; j++) {
        inputs[j] = tempArr[i++];
      }
    };

    const divide = (left, right) => {
      if (left < right) {
        const mid = Math.floor((left + right) / 2);

        divide(left, mid);
        divide(mid + 1, right);

        merge(left, mid, right);
      }
    };

    divide(0, inputs.length - 1);

    console.log(inputs.map((i) => i.join(' ')).join('\n'));
  });
}
