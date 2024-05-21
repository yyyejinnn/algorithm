/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 해시
 */

function solution(participant, completion) {
  const maps = new Map();

  participant.forEach((p) => maps.set(p, (maps.get(p) || 0) + 1));
  completion.forEach((c) => maps.set(c, maps.get(c) - 1));

  for (let [name, count] of maps) {
    if (count > 0) {
      return name;
    }
  }
}
