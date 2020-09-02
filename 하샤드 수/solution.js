const solution = _ => !(_ % _.toString().split("").reduce((a, b) => a * 1 + b * 1));
