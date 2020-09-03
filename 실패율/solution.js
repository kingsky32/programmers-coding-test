function solution(N, stages) {
  let answer = [],
    stageStatus = new Array(stages.concat().sort((a, b) => a - b).reverse()[0]).fill(0),
    stageFailed = [],
    stageFailPercent = [];

  stages.forEach(e => stageStatus[e - 1]++);

  let stageSuccesor = stageStatus.concat();

  for (let i = stageSuccesor.length - 1; i > 0; i--) {
    if (stageSuccesor[i] > 0) {
      stageSuccesor[i - 1] += stageSuccesor[i];
    }
  }

  for (let i = 0; i < N; i++) {
    stageFailPercent.push({
      stage: i + 1,
      percent: stageStatus[i] !== undefined ? stageStatus[i] / stageSuccesor[i] : 0
    });
  }

  stageFailed = stageFailPercent.filter((e, i) => e.stage !== N + 1).concat().sort((a, b) => {
    if (a.percent === b.percent) return a.stage - b.stage;
    return b.percent - a.percent;
  });

  for (let i = 0; i < N; i++) {
    answer.push(stageFailed[i].stage);
  }

  return answer;
}
