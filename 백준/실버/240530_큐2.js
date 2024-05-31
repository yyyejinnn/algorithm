/**
 * https://www.acmicpc.net/problem/18258
 * 큐
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

/**
 * 이중연결리스트 사용
 * -> .shift() 구현 시 시간 초과
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  push(data) {
    const node = new Node(data);

    if (this.count === 0) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }

    this.tail = node;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return -1;
    }

    const target = this.head;

    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.count--;
    return target?.data;
  }

  size() {
    return this.count;
  }

  empty() {
    return this.count === 0 ? 1 : 0;
  }

  front() {
    return this.head?.data ?? -1;
  }

  back() {
    return this.tail?.data ?? -1;
  }
}

let orders = [];
let count = 0;

rl.on('line', (line) => {
  if (count > 0) {
    orders.push(line.split(' '));
  }
  count++;
});

rl.on('close', () => {
  const result = [];

  const queue = new Queue();

  orders.forEach((o) => {
    const [order, x] = o;

    switch (order) {
      case 'push': {
        queue.push(x);
        break;
      }
      case 'pop': {
        result.push(queue.pop());
        break;
      }
      case 'size': {
        result.push(queue.size());
        break;
      }
      case 'empty': {
        result.push(queue.empty());
        break;
      }
      case 'front': {
        result.push(queue.front());
        break;
      }
      case 'back': {
        result.push(queue.back());
        break;
      }
    }
  });

  console.log(result.join('\n'));
});
