function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i <= n - 1; i++) {
    let temp = [];
    let temp1 = [];
    let temp2 = [];
    for (let j = 0; j <= n - 1; j++) {
      arr1[i].toString(2)[j]
        ? temp1.push(arr1[i].toString(2)[j] === "1" ? 1 : 0)
        : temp1.unshift(0);
      arr2[i].toString(2)[j]
        ? temp2.push(arr2[i].toString(2)[j] === "1" ? 1 : 0)
        : temp2.unshift(0);
    }
    for (let j = 0; j <= n - 1; j++) {
      temp.push(temp1[j] || temp2[j] ? "#" : " ");
    }
    answer.push(temp.join(""));
  }
  return answer;
}
