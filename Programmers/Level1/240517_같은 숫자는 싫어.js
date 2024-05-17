/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * 스택/큐
 */

function solution(arr) {
  var answer = [];

  let top;

  for (let i = 0; i < arr.length; i++) {
    let target = arr[i];

    if (top != target) {
      answer.push(target);
      top = target;
    }
  }

  return answer;
}
