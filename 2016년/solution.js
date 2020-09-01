function solution(a, b) {
  var answer = "";
  const weeks = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = 0;
  for (let i = 0; i <= a - 2; i++) day += month[i];
  day += b;
  answer = weeks[Math.ceil((day - 1) % 7)];
  return answer;
}
