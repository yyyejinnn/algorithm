/**
 * https://www.acmicpc.net/problem/28279
 * 덱 - 이중연결리스트 사용
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  if (count > 0) {
    orders.push(line.split(' '));
  }
  count++;
});

let orders = [];
let count = 0;

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  addFirst(data) {
    const node = new Node(data);

    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
    }

    this.head = node;
    this.count++;
  }

  addLast(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
    this.count++;
  }

  printFirst() {
    return this.head?.data ?? -1;
  }

  printLast() {
    return this.tail?.data ?? -1;
  }

  deleteFirst() {
    if (!this.head) {
      return -1;
    }

    const deleted = this.head.data;

    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.count--;
    return deleted;
  }

  deleteLast() {
    if (!this.head) {
      return -1;
    }

    const deleted = this.tail.data;

    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.count--;
    return deleted;
  }

  size() {
    return this.count;
  }

  empty() {
    return Number(this.count === 0);
  }
}

rl.on('close', () => {
  const deq = new Deque();
  const result = [];

  orders.forEach((o) => {
    const [order, x] = o;

    switch (order) {
      case '1': {
        deq.addFirst(x);
        break;
      }
      case '2': {
        deq.addLast(x);
        break;
      }
      case '3': {
        result.push(deq.deleteFirst());
        break;
      }
      case '4': {
        result.push(deq.deleteLast());
        break;
      }
      case '5': {
        result.push(deq.size());
        break;
      }
      case '6': {
        result.push(deq.empty());
        break;
      }
      case '7': {
        result.push(deq.printFirst());
        break;
      }
      case '8': {
        result.push(deq.printLast());
        break;
      }
    }
  });
  console.log(result.join('\n'));
});
