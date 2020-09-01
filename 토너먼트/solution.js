function solution(n, a, b) {
  var answer = 1;
  const getData = (p1, p2) => {
    if (p1 % 2 !== 0 && p1 + 1 === p2) {
      return false;
    } else {
      answer++;
      getData(Math.ceil(p1 / 2), Math.ceil(p2 / 2));
    }
  };
  getData(a, b);
  return answer;
}
