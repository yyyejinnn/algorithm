/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 * 스택/큐
 */

function solution(progresses, speeds) {
  var answer = [];

  let days = [];

  for (let i = 0; i < progresses.length; i++) {
    const day = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(day);
  }

  let count = 1;
  let head = days[0];

  for (let i = 1; i < days.length; i++) {
    if (head >= days[i]) {
      count++;
    } else {
      answer.push(count);

      count = 1;
      head = days[i];
    }
  }

  answer.push(count);

  return answer;
}
