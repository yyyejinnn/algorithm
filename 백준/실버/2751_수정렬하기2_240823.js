{
  /**
   * https://www.acmicpc.net/problem/2751
   * 정렬 (병합 정렬)
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let inputs = [];

  rl.on('line', (line) => {
    if (i > 0) {
      inputs.push(Number(line));
    }

    i++;
  });

  rl.on('close', () => {
    const divide = (start, end) => {
      if (start < end) {
        let mid = Math.floor((start + end) / 2);

        divide(start, mid);
        divide(mid + 1, end);

        merge(start, mid, end);
      }
    };

    const merge = (startIdx, midIdx, endIdx) => {
      let tempArr = [];

      let left = startIdx;
      let right = midIdx + 1;

      while (left <= midIdx && right <= endIdx) {
        if (inputs[left] < inputs[right]) {
          tempArr.push(inputs[left++]);
        } else {
          tempArr.push(inputs[right++]);
        }
      }

      while (left <= midIdx) {
        tempArr.push(inputs[left++]);
      }

      while (right <= endIdx) {
        tempArr.push(inputs[right++]);
      }

      let tempIdx = 0;
      for (let i = startIdx; i <= endIdx; i++) {
        inputs[i] = tempArr[tempIdx++];
      }
    };

    divide(0, inputs.length - 1);

    console.log(inputs.join('\n'));
  });
}
