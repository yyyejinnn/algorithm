{
  /**
   * https://www.acmicpc.net/problem/11650
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
    /** 병합 정렬 */
    const divide = (start, final) => {
      if (start < final) {
        let mid = Math.floor((start + final) / 2);

        divide(start, mid);
        divide(mid + 1, final);

        merge(start, mid, final);
      }
    };

    const merge = (start, mid, final) => {
      let lIdx = start;
      let rIdx = mid + 1;

      let tempArr = [];

      while (lIdx <= mid && rIdx <= final) {
        if (
          inputs[lIdx][0] < inputs[rIdx][0] ||
          (inputs[lIdx][0] === inputs[rIdx][0] && inputs[lIdx][1] < inputs[rIdx][1])
        ) {
          tempArr.push(inputs[lIdx++]);
        } else {
          tempArr.push(inputs[rIdx++]);
        }
      }

      while (lIdx <= mid) {
        tempArr.push(inputs[lIdx++]);
      }

      while (rIdx <= final) {
        tempArr.push(inputs[rIdx++]);
      }

      let j = 0;

      for (let i = start; i <= final; i++) {
        inputs[i] = tempArr[j++];
      }
    };

    divide(0, inputs.length - 1);
    console.log(inputs.map((i) => i.join(' ')).join('\n'));

    /** 버블 정렬 -> 답은 맞는데 시간 초과 */
    // for (let i = 1; i < inputs.length; i++) {
    //   for (let j = 0; j < inputs.length - i; j++) {
    //     let [currX, currY] = inputs[j];
    //     let [compareX, compareY] = inputs[j + 1];
    //     if (currX > compareX || (currX === compareX && currY > compareY)) {
    //       [inputs[j], inputs[j + 1]] = [inputs[j + 1], inputs[j]];
    //     }
    //   }
    // }
    // console.log(inputs.map((i) => i.join(' ')).join('\n'));
  });
}
