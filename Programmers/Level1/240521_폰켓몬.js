/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * 해시
 */

function solution(nums) {
  const max = nums.length / 2;
  const set = new Set(nums);

  return set.size > max ? max : set.size;
}
