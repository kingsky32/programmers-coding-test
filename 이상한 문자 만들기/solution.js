const solution = _ =>
  _.split(" ")
    .map((e, i) =>
      e.split("").map((f, j) => (j % 2 === 0 ? f.toUpperCase() : f.toLowerCase())).join("")
    )
    .join(" ");
