const cipher = (e, n) => {
  if (e === " ") {
    return " ";
  }
  const asc = e.charCodeAt(0);
  const tmp = asc + n;
  if (tmp > 0x7a && tmp > 0x60 && asc > 0x60) {
    return String.fromCharCode(tmp - 0x1a);
  } else if ((tmp > 0x5a && tmp > 0x41 && tmp < 0x61) || (tmp > 0x60 && asc < 0x5b)) {
    return String.fromCharCode(tmp - 0x1a);
  } else {
    return String.fromCharCode(tmp);
  }
};

const solution = (s, n) => s.split("").map(e => cipher(e, n)).join("");
