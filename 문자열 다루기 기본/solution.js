function solution(s) {
  return (String(+s).length == 4 || String(+s).length == 6) && +s ? true : false;
}
