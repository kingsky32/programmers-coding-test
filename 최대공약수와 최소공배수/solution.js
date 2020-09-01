function solution(n, m) {
  let arr = [n, m].sort((a, b) => a - b);
  let temp = 0;
  while (arr[1] != 0) {
    temp = arr[0] % arr[1];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  return [arr[0], n * m / arr[0]];
}
