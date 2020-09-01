function solution(n) {
  var answer = 0;
  let arr = [];
  for (let i = 2; i <= n; i++) arr[i] = i;
  for (let i = 2; i <= n; i++) {
    arr[i] !== 0 && false;
    for (let j = i + i; j <= n; j += i) arr[j] = 0;
  }
  for (let i = 2; i <= n; i++) arr[i] !== 0 && answer++;
  return answer;
}
