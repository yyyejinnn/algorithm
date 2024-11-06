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
  inputs.push(Number(line));
});

rl.on('close', () => {
  let [n, ...cards] = inputs;

  const calc = () => {
    let q = new PriorityQueue();

    cards.forEach(q.enqueue.bind(q));

    let acc = 0;

    while (q._arr.length > 2) {
      let sum = q.dequeue() + q.dequeue();
      acc += sum;
      q.enqueue(sum);
    }

    return acc;
  };

  console.log(n < 2 ? 0 : calc());
});

class PriorityQueue {
  constructor() {
    this._arr = [null];
  }

  enqueue(data) {
    this._arr.push(data);

    let currIdx = this._arr.length - 1;

    while (currIdx > 1) {
      let parentIdx = this.parentIdx(currIdx);

      if (this._arr[parentIdx] < this._arr[currIdx]) {
        break;
      }

      [this._arr[parentIdx], this._arr[currIdx]] = [this._arr[currIdx], this._arr[parentIdx]];
      currIdx = parentIdx;
    }
  }

  dequeue() {
    if (this._arr.length === 1) {
      return;
    } else if (this._arr.length === 2) {
      return this._arr.pop();
    }

    let deleted = this._arr[1];
    this._arr[1] = this._arr.pop();

    let currIdx = 1;

    while (true) {
      let lChildIdx = this.leftChildIdx(currIdx);
      let rChildIdx = this.rightChildIdx(currIdx);

      let targetIdx = currIdx;

      if (this._arr[lChildIdx] && this._arr[lChildIdx] < this._arr[targetIdx]) {
        targetIdx = lChildIdx;
      }

      if (this._arr[rChildIdx] && this._arr[rChildIdx] < this._arr[targetIdx]) {
        targetIdx = rChildIdx;
      }

      if (targetIdx === currIdx) {
        break;
      }

      [this._arr[currIdx], this._arr[targetIdx]] = [this._arr[targetIdx], this._arr[currIdx]];
      currIdx = targetIdx;
    }

    return deleted;
  }

  parentIdx(idx) {
    return Math.floor(idx / 2);
  }

  leftChildIdx(idx) {
    return idx * 2;
  }

  rightChildIdx(idx) {
    return idx * 2 + 1;
  }
}
