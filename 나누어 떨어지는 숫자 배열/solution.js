const solution = (arr, divisor) =>
  arr.filter(e => e % divisor === 0).sort((a, b) => a - b).length !== 0
    ? arr.filter(e => e % divisor === 0).sort((a, b) => a - b)
    : [-1];
