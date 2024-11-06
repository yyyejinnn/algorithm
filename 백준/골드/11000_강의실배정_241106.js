/**
 * https://acmicpc.net/problem/1715
 * 그리디, 최소힙
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line.split(' ').map(Number));
});

rl.on('close', () => {
  let [[n], ...classes] = inputs;

  classes.sort((a, b) => a[0] - b[0]); // 시작시간 순 정렬

  let pq = new PQ();

  let i = -1;
  while (++i < classes.length) {
    let [st, et] = classes[i];

    if (st >= (pq._heap[1] ?? Infinity)) {
      pq.remove();
    }

    pq.add(et);
  }

  console.log(pq._heap.length - 1);
});

class PQ {
  constructor() {
    this._heap = [null]; // 종료 시간 최소 힙
  }

  add(data) {
    this._heap.push(data);

    let idx = this._heap.length - 1;

    while (idx > 1) {
      let pIdx = this.parentIdx(idx);

      if (this._heap[idx] < this._heap[pIdx]) {
        [this._heap[pIdx], this._heap[idx]] = [this._heap[idx], this._heap[pIdx]];
      }

      idx = pIdx;
    }
  }

  remove() {
    if (this._heap.length === 1) {
      return;
    }
    if (this._heap.length === 2) {
      return this._heap.pop();
    }

    const deleted = this._heap[1];
    this._heap[1] = this._heap.pop();

    // 정렬
    let idx = 1;

    while (true) {
      let lIdx = this.lChildIdx(idx);
      let rIdx = this.rChildIdx(idx);

      let targetIdx = idx;

      if (this._heap[lIdx] && this._heap[lIdx] < this._heap[targetIdx]) {
        targetIdx = lIdx;
      }
      if (this._heap[rIdx] && this._heap[rIdx] < this._heap[targetIdx]) {
        targetIdx = rIdx;
      }

      if (targetIdx === idx) break;

      [this._heap[idx], this._heap[targetIdx]] = [this._heap[targetIdx], this._heap[idx]];
      idx = targetIdx;
    }

    return deleted;
  }

  parentIdx(idx) {
    return Math.floor(idx / 2);
  }

  lChildIdx(idx) {
    return idx * 2;
  }

  rChildIdx(idx) {
    return idx * 2 + 1;
  }
}
