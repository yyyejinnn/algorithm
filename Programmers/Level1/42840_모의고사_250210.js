/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * 완전탐색
 */

function solution(answers) {
  let answer = [];

  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let cnts = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    let a = answers[i];

    if (a === one[i % 5]) cnts[0]++;
    if (a === two[i % 8]) cnts[1]++;
    if (a === three[i % 10]) cnts[2]++;
  }

  let max = Math.max(...cnts);

  for (let i = 0; i < 3; i++) {
    if (max === cnts[i]) answer.push(i + 1);
  }

  return answer;
}

const ans = [1, 2, 3, 4, 5];
console.log(solution(ans));
