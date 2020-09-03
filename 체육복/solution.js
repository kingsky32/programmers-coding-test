function solution(n, lost, reserve) {
  let arr = new Array(n).fill(1);
  let reserver = new Array(n).fill(0);
  reserve.forEach(e => (reserver[e - 1] = 1));
  lost.forEach(e => (arr[e - 1] = 0));
  lost.forEach((e, i) => {
    if (arr[e - 1] === 0) {
      if (reserver[e - 1] === 1) {
        arr[e - 1] = 1;
        reserver[e - 1] = 0;
      }
    }
  });
  reserver.forEach((e, i) => {
    if (e === 1) {
      if (arr[i] === 0) {
        arr[i] = 1;
      } else if (arr[i - 1] !== undefined && arr[i - 1] === 0) {
        arr[i - 1] = 1;
      } else if (arr[i + 1] !== undefined && arr[i + 1] === 0) {
        arr[i + 1] = 1;
      }
      return (reserver[i] = 0);
    }
  });
  return arr.filter(e => e === 1).length;
}
