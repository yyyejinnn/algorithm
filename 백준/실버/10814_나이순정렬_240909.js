{
  /**
   * https://www.acmicpc.net/problem/10814
   * 정렬
   * !! string -> number 형 변환 주의!!
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];
  let count = 0;

  rl.on('line', (line) => {
    if (count > 0) {
      const [age, name] = line.split(' ');
      inputs.push([Number(age), name]);
    }
    count++;
  });

  rl.on('close', () => {
    const merge = (start, mid, end) => {
      let lIdx = start;
      let rIdx = mid + 1;

      let tempArr = [];

      while (lIdx <= mid && rIdx <= end) {
        if (inputs[lIdx][0] <= inputs[rIdx][0]) {
          tempArr.push(inputs[lIdx++]);
        } else if (inputs[rIdx][0] < inputs[lIdx][0]) {
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
        let mid = Math.floor((left + right) / 2);

        divide(left, mid);
        divide(mid + 1, right);

        merge(left, mid, right);
      }
    };

    divide(0, inputs.length - 1);

    console.log(inputs.map((i) => i.join(' ')).join('\n'));
  });
}
