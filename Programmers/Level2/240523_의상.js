/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 해시
 */

function solution(clothes) {
  const maps = new Map();

  clothes.forEach((c) => maps.set(c[1], (maps.get(c[1]) || 0) + 1));

  // curr+1 : 의상 입지않는 경우 고려해서 +1
  // 마지막 -1 : 모든 의상 입지않는 경우는 제외
  return maps.values().reduce((pre, curr) => pre * (curr + 1), 1) - 1;
}
