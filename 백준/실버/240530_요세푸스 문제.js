/**
 * https://www.acmicpc.net/problem/11866
 * 원형연결리스트 사용
 */

function solution1() {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let n, k;

  rl.on('line', (line) => {
    [n, k] = line.split(' ').map(Number);
  });

  class Node {
    constructor(data) {
      this.data = data;
    }
  }

  class CircleLinkedList {
    constructor() {
      this.head = null;
      this.count = 0;
    }

    push(number) {
      const node = new Node(number);

      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;

        while (current.next !== this.head) {
          current = current.next;
        }

        current.next = node;
      }

      node.next = this.head;
      this.count++;
    }

    delete(k) {
      let current = this.head;
      let prev;

      let deleteData;

      if (k === 1) {
        deleteData = this.head.data;
        this.head = this.head.next;
        this.count--;

        return deleteData;
      }

      for (let i = 1; i < k; i++) {
        prev = current;
        current = current.next;
      }

      deleteData = current.data;

      prev.next = current.next;
      this.head = current.next;
      this.count--;

      return deleteData;
    }

    size() {
      return this.count;
    }
  }

  rl.on('close', () => {
    const result = [];

    const q = new CircleLinkedList();

    for (let i = 1; i < n + 1; i++) {
      q.push(i);
    }

    let size = q.size();

    while (size > 0) {
      result.push(q.delete(k));

      size = q.size();
    }

    console.log(`<${result.join(', ')}>`);
  });
}

/**
 * shift 사용했을 때 - 큐
 */

function solution2() {
  // 7, 3 가정
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;

  const result = [];

  let i = 1;

  while (arr.length > 0) {
    const target = arr.shift();

    if (i % k === 0) {
      // k의 배수일 경우
      result.push(target);
    } else {
      arr.push(target);
    }

    i++;
  }

  console.log(`<${result.join(', ')}>`);
}

solution2();
