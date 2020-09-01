function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  var i = 0;
  participant.some(e => {
    const isCompleted = completion[i] === e;
    isCompleted ? i++ : (answer = e);
  });

  return answer;
}
