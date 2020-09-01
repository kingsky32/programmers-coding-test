const solution = s =>
  s.length % 2 === 1
    ? s.split("")[Math.floor(s.length / 2)]
    : s.split("")[Math.floor(s.length / 2) - 1] + s.split("")[Math.floor(s.length / 2)];
