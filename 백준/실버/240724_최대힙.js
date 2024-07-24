/**
 * https://www.acmicpc.net/problem/11279
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
    if(count > 0) {
        inputs.push(Number(line));
    } 
    count++;
});

rl.on('close', () => {
    const maxHeap = new MaxHeap();

    inputs.forEach((i)=> i === 0 ? result.push(maxHeap.dequeue()) : maxHeap.enqueue(i));

    console.log(result.join('\n'));
})

class MaxHeap {
    constructor() {
      this.heap = [null];
    }
  
    enqueue(data) {
      this.heap.push(data);
  
      let currIdx = this.lastInstertedIdx;
  
      while (currIdx > 1) {
        const parentIdx = this.getParentIdx(currIdx);
  
        if (this.heap[currIdx] < this.heap[parentIdx]) {
          break;
        }

        [this.heap[currIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currIdx]];
  
        currIdx = parentIdx;
      }
    }
  
    dequeue() {
      if (!this.root) {
        return 0;
      } else if (this.lastInstertedIdx === 1) {
        return this.heap.pop();
      }
  
      const deleted = this.root;
      this.root = this.heap.pop();
  
      let currIdx = 1;
  
      while (true) {
        const leftChildIdx = this.getLeftChildIdx(currIdx);
        const rightChildIdx = this.getRightChildIdx(currIdx);
  
        let largestIdx = currIdx;
  
        if (leftChildIdx <= this.lastInstertedIdx && this.heap[leftChildIdx] > this.heap[largestIdx]) {
          largestIdx = leftChildIdx;
        }

        if (rightChildIdx <= this.lastInstertedIdx && this.heap[rightChildIdx] > this.heap[largestIdx]) {
          largestIdx = rightChildIdx;
        }
  
        if (largestIdx === currIdx) {
          break;
        }

        [this.heap[currIdx], this.heap[largestIdx]] = [this.heap[largestIdx], this.heap[currIdx]];  
        currIdx = largestIdx;
      }
  
      return deleted;
    }
  
    getParentIdx(idx) {
      return Math.floor(idx / 2);
    }
  
    getLeftChildIdx(idx) {
      return idx * 2;
    }
  
    getRightChildIdx(idx) {
      return idx * 2 + 1;
    }
  
    get lastInstertedIdx() {
      return this.heap.length - 1;
    }
  
    get root() {
      return this.heap[1];
    }
  
    set root(data) {
      this.heap[1] = data;
    }
  }
  
