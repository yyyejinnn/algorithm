/**
 * https://www.acmicpc.net/problem/14889
 * 브루트포스
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
  let [[n], ...people] = inputs;

  let players = Array.from({ length: n }, (_, i) => i);
  let startTeam = [];

  let len = Math.floor(n / 2);
  let min = Infinity;

  const calcScore = () => {
    let linkTeam = players.filter((v) => !startTeam.includes(v));
    let [stScore, ltScore] = [0, 0];

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        stScore += people[startTeam[i]][startTeam[j]] + people[startTeam[j]][startTeam[i]];
        ltScore += people[linkTeam[i]][linkTeam[j]] + people[linkTeam[j]][linkTeam[i]];
      }
    }

    min = Math.min(min, Math.abs(stScore - ltScore));
    if (min === 0) return;
  };

  const solution = (team) => {
    if (startTeam.length === len) {
      calcScore();
      return;
    }

    for (let i = team; i < n; i++) {
      startTeam.push(i);
      solution(i + 1);
      startTeam.pop();
    }
  };

  solution(0);
  console.log(min);
});
