/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42746
 * 정렬
 */

function compare(a, b) {
  const strA = a.toString();
  const strB = b.toString();

  const sum1 = strA + strB;
  const sum2 = strB + strA;

  return +sum1 < +sum2 ? 1 : -1;
}

function solution(numbers) {
  const strs = numbers.sort((a, b) => compare(a, b));

  return strs[0] == '0' ? '0' : strs.join('');
}
