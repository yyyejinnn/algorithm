/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * 정렬
 */

function bubbleSort(array) {
  const newArr = array.slice();

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        const temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }

  return newArr;
}

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];

    const arr = array.slice(cmd[0] - 1, cmd[1]);

    const sorted = bubbleSort(arr);

    answer.push(sorted[cmd[2] - 1]);
  }

  return answer;
}
