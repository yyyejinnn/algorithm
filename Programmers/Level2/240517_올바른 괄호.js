/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * 스택/큐
 */

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
