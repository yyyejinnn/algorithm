/**
 * https://www.acmicpc.net/problem/2096
 * dp + 슬라이딩 윈도우
 * 
 * !! 애초에 js로 못푸는 문제 ㅡㅡ 메모리초과
 * -> .py 참고
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line.split(' ').map(Number));
});

rl.on('close', () => {
  /**
   * js_2. dp + 슬라이딩 윈도우
   * */
  // let [[n], ...nums] = inputs;
  // let maxDp = [...nums[0]];
  // let minDp = [...nums[0]];
  // for (let y = 1; y < n; y++) {
  //   let preMaxDp = [...maxDp];
  //   let preMinDp = [...minDp];
  //   // max
  //   maxDp[0] = Math.max(preMaxDp[0], preMaxDp[1]) + nums[y][0];
  //   maxDp[1] = Math.max(preMaxDp[0], preMaxDp[1], preMaxDp[2]) + nums[y][1];
  //   maxDp[2] = Math.max(preMaxDp[1], preMaxDp[2]) + nums[y][2];
  //   // min
  //   minDp[0] = Math.min(preMinDp[0], preMinDp[1]) + nums[y][0];
  //   minDp[1] = Math.min(preMinDp[0], preMinDp[1], preMinDp[2]) + nums[y][1];
  //   minDp[2] = Math.min(preMinDp[1], preMinDp[2]) + nums[y][2];
  // }
  // console.log(Math.max(...maxDp), Math.min(...minDp));

  /**
   * js_1. dp
   * */
  // let [[n], ...nums] = inputs;
  // let maxDp = Array.from({ length: n }, () => Array(n + 2).fill(-Infinity));
  // let minDp = Array.from({ length: n }, () => Array(n + 2).fill(Infinity));
  // // 첫 줄 초기화
  // for (let j = 1; j <= n; j++) {
  //   maxDp[0][j] = nums[0][j - 1];
  //   minDp[0][j] = nums[0][j - 1];
  // }
  // // dp
  // for (let i = 1; i < n; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     maxDp[i][j] = Math.max(maxDp[i - 1][j - 1], maxDp[i - 1][j], maxDp[i - 1][j + 1]) + nums[i][j - 1];
  //     minDp[i][j] = Math.min(minDp[i - 1][j - 1], minDp[i - 1][j], minDp[i - 1][j + 1]) + nums[i][j - 1];
  //   }
  // }
  // console.log(Math.max(...maxDp[n - 1]), Math.min(...minDp[n - 1]));
});
