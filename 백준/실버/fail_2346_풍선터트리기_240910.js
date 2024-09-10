{
  /**
   * https://www.acmicpc.net/problem/2346
   * 덱
   *
   * !! node.js 사용시 메모리 초과, 다른 언어 권장 !!
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
    const deq = new Deque(inputs.map((value, index) => ({ index: index + 1, value })));

    let result = [];

    let move = deq.removeFront();
    result.push(move.index);

    while (!deq.isEmpty()) {
      if (move.value > 0) {
        for (let i = 1; i < move.value; i++) {
          deq.addRear(deq.removeFront());
        }

        move = deq.removeFront();
      } else {
        for (let i = 1; i < Math.abs(move.value); i++) {
          deq.addFront(deq.removeRear());
        }

        move = deq.removeRear();
      }

      result.push(move.index);
    }

    console.log(result.join(' '));
  });

  class Deque {
    constructor(arr) {
      this._frontStack = [];
      this._rearStack = arr;
    }

    addFront(data) {
      this._frontStack.push(data);
    }

    addRear(data) {
      this._rearStack.push(data);
    }

    removeFront() {
      if (!this._frontStack.length) {
        while (this._rearStack.length) {
          this._frontStack.push(this._rearStack.pop());
        }
      }

      return this._frontStack.pop();
    }

    removeRear() {
      if (!this._rearStack.length) {
        while (this._frontStack.length) {
          this._rearStack.push(this._frontStack.pop());
        }
      }

      return this._rearStack.pop();
    }

    isEmpty() {
      return !(this._frontStack.length || this._rearStack.length);
    }
  }
}
