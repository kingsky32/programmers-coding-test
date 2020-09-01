const solution = _ => {
  let result = 0;
  _.map(e => (result += e));
  return result / _.length;
};
