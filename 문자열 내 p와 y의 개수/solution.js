function solution(s) {
  const arr = s.toLowerCase().split("");
  return arr.filter(e => e === "p").length === arr.filter(e => e === "y").length;
}
