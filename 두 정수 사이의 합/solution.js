function solution(a, b) {
  var answer = 0;
  if (a === b) answer = a;
  else {
    const arr = [a, b].sort((c, d) => c - d);
    for (let i = arr[0]; i <= arr[1]; i++) answer += i;
  }
  return answer;
}
