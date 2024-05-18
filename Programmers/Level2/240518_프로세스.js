/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587
 * 큐
 */

function solution(priorities, location) {
  let count = 0;

  let max = Math.max(...priorities);

  while (priorities.length > 0) {
    const current = priorities.shift();

    if (current < max) {
      priorities.push(current);

      if (location === 0) {
        // 맨 앞인데 밀려날 경우 -> 마지막으로 이동
        location = priorities.length - 1;
      } else {
        location--;
      }
    } else {
      count++;

      if (location === 0) {
        return count;
      }

      location--;
      max = Math.max(...priorities);
    }
  }

  return count;
}

const p = [1, 1, 9, 1, 1, 1];
const l = 0; // 5

const p2 = [2, 1, 2, 1, 2, 1, 2, 1, 2];
const l2 = 1; // 6

const p3 = [2, 1, 3, 2];
const l3 = 2; // 1

console.log(solution(p, l));
console.log(solution(p2, l2));
console.log(solution(p3, l3));
