function solution(n) {
  let answer = "";
  const arr = [4, 1, 2];
  let num = 0;

  while (n > 0) {
    num = n % 3;
    n = parseInt(n / 3);

    if (num === 0) n--;

    answer = arr[num] + answer;
  }

  return answer;
}
