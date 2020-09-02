function solution(answers) {
  let answer = [],
    s1 = [],
    s2 = [],
    s3 = [];

  const s1way = [1, 2, 3, 4, 5],
    s2way = [2, 1, 2, 3, 2, 4, 2, 5],
    s3way = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const pushArr = (arr1, arr2, num) => {
    arr1.push(arr2[num % arr2.length]);
  };

  for (let i = 0; i < answers.length; i++) {
    pushArr(s1, s1way, i);
    pushArr(s2, s2way, i);
    pushArr(s3, s3way, i);
  }

  const matchAnswer = arr => {
    let result = 0;
    arr.forEach((e, i) => e === answers[i] && result++);
    return result;
  };

  let score = [matchAnswer(s1), matchAnswer(s2), matchAnswer(s3)],
    maxScore = Math.max(...score);

  for (let i = 0; i < score.length; i++) if (score[i] === maxScore) answer.push(i + 1);

  return answer;
}
