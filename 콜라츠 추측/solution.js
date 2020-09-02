function solution(num) {
  var answer = 0;
  const collatz = n => {
    if (answer >= 500) {
      answer = -1;
      return false;
    }
    if (n === 1) return false;
    answer++;
    if (n % 2 === 0) collatz(n / 2);
    else collatz(n * 3 + 1);
  };
  collatz(num);
  return answer;
}
