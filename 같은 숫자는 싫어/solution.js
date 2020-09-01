function solution(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) arr[i] !== arr[i - 1] && result.push(arr[i]);
  result.reverse();
  return result;
}
