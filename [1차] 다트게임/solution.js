function solution(dartResult) {
  const D = "D",
    T = "T",
    STAR = "*",
    ACHA = "#",
    dartArr = dartResult.split(""),
    result = [];

  dartArr.forEach((e, i) => {
    if (parseInt(e)) {
      if (parseInt(dartArr[i + 1]) === 0) {
        dartArr[i] = e + dartArr[i + 1];
        dartArr.splice(i + 1, 1);
      }
    }
  });

  const optionFn = option => {
    if (option === STAR || option === ACHA) {
      const arrNum = result.length - 1;
      switch (option) {
        case STAR:
          result[arrNum] *= 2;
          if (result[arrNum - 1]) result[arrNum - 1] *= 2;
          break;
        case ACHA:
          result[arrNum] *= -1;
          break;
      }
    }
  };

  for (let i = 0; i < dartArr.length; i++) {
    const num = parseInt(dartArr[i]);
    if (num === 0) {
      result.push(0);
      optionFn(dartArr[i + 2]);
    } else if (num > 0 && num <= 10) {
      switch (dartArr[i + 1]) {
        case D:
          result.push(Math.pow(num, 2));
          optionFn(dartArr[i + 2]);
          break;
        case T:
          result.push(Math.pow(num, 3));
          optionFn(dartArr[i + 2]);
          break;
        default:
          result.push(num);
          optionFn(dartArr[i + 2]);
      }
    }
  }

  return result.reduce((a, b) => a + b);
}
