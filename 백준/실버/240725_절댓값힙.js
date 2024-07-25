{
  /**
   * https://www.acmicpc.net/problem/11286
   * 배열 사용
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputs = [];
  let result = [];

  let count = 0;

  rl.on('line', (line) => {
    if (count > 0) {
      inputs.push(Number(line));
    }
    count++;
  });

  let heap = [null];

  rl.on('close', () => {
    inputs.forEach((i) => (i === 0 ? result.push(dequeue()) : enqueue(i)));

    console.log(result.join('\n'));
  });

  function enqueue(data) {
    heap.push(data);

    if (heap.length === 2) {
      return;
    }

    let currIdx = heap.length - 1;

    while (true) {
      const parentIdx = getParentIdx(currIdx);

      if (isHigherPriority(heap[currIdx], heap[parentIdx])) {
        [heap[currIdx], heap[parentIdx]] = [heap[parentIdx], heap[currIdx]];
      } else {
        break;
      }

      currIdx = parentIdx;
    }
  }

  function dequeue() {
    if (heap.length == 1) {
      return 0;
    }

    [heap[1], heap[heap.length - 1]] = [heap[heap.length - 1], heap[1]];
    const deleted = heap.pop();

    let currIdx = 1;

    while (true) {
      let leftChildIdx = getLeftChildIdx(currIdx);
      let rightChildIdx = getRightChildIdx(currIdx);

      let swapChildIdx = currIdx;

      if (isHigherPriority(heap[leftChildIdx], heap[currIdx])) {
        swapChildIdx = leftChildIdx;
      }

      if (heap[rightChildIdx] && isHigherPriority(heap[rightChildIdx], heap[swapChildIdx])) {
        swapChildIdx = rightChildIdx;
      }

      if (swapChildIdx == currIdx) {
        break;
      }

      [heap[currIdx], heap[swapChildIdx]] = [heap[swapChildIdx], heap[currIdx]];
      currIdx = swapChildIdx;
    }

    return deleted;
  }

  function getParentIdx(idx) {
    return Math.floor(idx / 2);
  }

  function getLeftChildIdx(idx) {
    return idx * 2;
  }

  function getRightChildIdx(idx) {
    return idx * 2 + 1;
  }

  function isHigherPriority(data, compare) {
    const absData = Math.abs(data);
    const absCompare = Math.abs(compare);

    if (absData < absCompare || (absData === absCompare && data < compare)) {
      return true;
    }

    return false;
  }

  /** test */
  //   enqueue(-1);
  //   enqueue(6);
  //   enqueue(1);
  //   enqueue(-2);
  //   enqueue(0);
  //   enqueue(2);

  //   console.log(heap);

  //   console.log('====dequeue====');
  //   console.log(dequeue());
  //   console.log(dequeue());
  //   console.log(dequeue());
  //   console.log(dequeue());
  //   console.log(dequeue());
  //   console.log(dequeue());
}
