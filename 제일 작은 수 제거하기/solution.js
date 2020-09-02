const solution = _ => {
  if (_.length > 1) {
    _.splice(_.indexOf(_.concat().sort((a, b) => a - b)[0]), 1);
    return _;
  } else {
    return [-1];
  }
};
