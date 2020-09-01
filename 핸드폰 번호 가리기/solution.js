const solution = _ => _.split("").map((e, i) => (i < _.length - 4 ? "*" : e)).join("");
