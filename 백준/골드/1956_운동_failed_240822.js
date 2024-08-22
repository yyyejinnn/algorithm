{
  /**
   * https://www.acmicpc.net/problem/1956
   * 다익스트라 사용 시 시간초과 ㅡㅡ
   * -> 플로이드 와샬 알고리즘 사용해보기
   */

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let i = 0;

  let v, e;
  let inputs = [];

  rl.on('line', (line) => {
    if (!i) {
      [v, e] = line.split(' ').map(Number);
    } else {
      inputs.push(line);
    }
    i++;
  });

  rl.on('close', () => {
    let graph = Array.from({ length: v + 1 }, () => ({}));

    inputs.forEach((i) => {
      let [a, b, c] = i.split(' ').map(Number);

      graph[a][b] = c;
    });

    const dijkstra = (start) => {
      let minPath = Array(v + 1).fill(Infinity);

      let pq = [[0, start]];

      while (pq.length) {
        let [dist, curr] = pq.pop();

        if (dist > minPath[curr]) {
          continue;
        }

        for (let ad in graph[curr]) {
          let newDist = dist + graph[curr][ad];

          if (newDist < minPath[ad]) {
            minPath[ad] = newDist;
            pq.push([newDist, ad]);
          }
        }

        pq.sort((a, b) => b[0] - a[0]);
      }

      return minPath[start];
    };

    let result = [];

    for (let i = 1; i <= v; i++) {
      let minCycle = dijkstra(i);

      if (minCycle !== Infinity) {
        result.push(minCycle);
      }
    }

    console.log(result.length > 0 ? Math.min(...result) : -1);
  });

  /**
   * 만약 min-heap 직접 구현할 경우
   * -> 마찬가지로 시간초과 남
   */
  class MinHeap {
    constructor() {
      this._heap = [null];
    }

    equeue(node) {
      this._heap.push(node);

      let currIdx = this._heap.length - 1;

      if (currIdx === 1) {
        return;
      }

      while (currIdx > 1) {
        let parentIdx = Math.floor(currIdx / 2);

        let parent = this._heap[parentIdx];
        let current = node;

        if (parent[0] > current[0]) {
          [this._heap[currIdx], this._heap[parentIdx]] = [this._heap[parentIdx], this._heap[currIdx]];
          currIdx = parentIdx;
        } else {
          break;
        }
      }
    }

    dequeue() {
      if (this.isEmpty()) {
        return;
      } else if (this._heap.length === 2) {
        return this._heap.pop();
      }

      let minNode = this._heap[1];
      this._heap[1] = this._heap.pop();

      let currIdx = 1;
      let smallestIdx = currIdx;

      while (true) {
        let lChildIdx = currIdx * 2;
        let rChildIdx = currIdx * 2 + 1;

        if (this._heap[lChildIdx] != null && this._heap[lChildIdx] < this._heap[currIdx]) {
          smallestIdx = lChildIdx;
        }

        if (this._heap[rChildIdx] != null && this._heap[rChildIdx] < this._heap[currIdx]) {
          smallestIdx = rChildIdx;
        }

        if (smallestIdx === currIdx) {
          break;
        } else {
          [this._heap[currIdx], this._heap[smallestIdx]] = [this._heap[smallestIdx], this._heap[currIdx]];
          currIdx = smallestIdx;
        }
      }

      return minNode;
    }

    isEmpty() {
      return this._heap.length === 1;
    }
  }
}
