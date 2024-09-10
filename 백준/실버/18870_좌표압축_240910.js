{
  /**
   * https://www.acmicpc.net/problem/18870
   * 정렬
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];
  let c = 0;

  rl.on('line', (line) => {
    if (c > 0) {
      inputs = line.split(' ').map(Number);
    }
    c++;
  });

  rl.on('close', () => {
    let setArr = Array.from(new Set(inputs));

    const merge = (start, mid, end) => {
      let lIdx = start;
      let rIdx = mid + 1;

      let temp = [];

      while (lIdx <= mid && rIdx <= end) {
        if (setArr[lIdx] < setArr[rIdx]) {
          temp.push(setArr[lIdx++]);
        } else {
          temp.push(setArr[rIdx++]);
        }
      }

      while (lIdx <= mid) {
        temp.push(setArr[lIdx++]);
      }

      while (rIdx <= end) {
        temp.push(setArr[rIdx++]);
      }

      let i = 0;

      for (let j = start; j <= end; j++) {
        setArr[j] = temp[i++];
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

    divide(0, setArr.length - 1);

    /**
     * indexOf() -> 시간초과
     */
    const indexMap = new Map();
    setArr.forEach((value, index) => indexMap.set(value, index));

    console.log(inputs.map((i) => indexMap.get(i)).join(' '));
  });
}
