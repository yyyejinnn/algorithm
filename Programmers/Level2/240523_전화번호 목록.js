/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42577
 * 해시
 */

/** 해시 사용 */
function hashSolution(phone_book) {
  const prefixSet = new Set();

  for (let phoneNum of phone_book) {
    for (let i = 0; i < phoneNum.length - 1; i++) {
      prefixSet.add(phoneNum.slice(0, i + 1));
    }
  }

  return !phone_book.some((p) => prefixSet.has(p));
}

/** 해시 사용 X */
function solution(phone_book) {
  return !phone_book
    .sort()
    .some((value, index, self) => self[index + 1].indexOf(value) === 0);
}
