function solution(d, budget) {
  let answer = 0;
  let cost = 0;
  d.sort((a, b) => a - b);
  while (cost < budget) {
    cost += d[answer];
    answer++;
    if (cost === budget) break;
  }
  if (cost !== budget) answer--;
  return answer;
}
