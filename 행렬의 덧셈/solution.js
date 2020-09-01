const solution = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i <= arr1.length - 1; i++) result.push(arr1[i].map((e, j) => e + arr2[i][j]));
  return result;
};
