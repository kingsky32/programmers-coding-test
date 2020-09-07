const keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];

const getPos = num => {
  let pos = [];
  keypad.forEach((e, i) => {
    if (e.indexOf(num) !== -1) pos = [i, e.indexOf(num)];
  });
  return pos;
};

let leftHandPosition = [3, 0];
let rightHandPosition = [3, 2];

const pressKeypad = (e, h, l, lh) => {
  let pos = getPos(e);

  if (e === 1 || e === 4 || e === 7) {
    leftHandPosition = getPos(e);
    return "left";
  }
  if (e === 3 || e === 6 || e === 9) {
    rightHandPosition = getPos(e);
    return "right";
  }

  if (e === 2 || e === 5 || e === 8 || e === 0) {
    const leftHand = [];
    const rightHand = [];

    if (l === null) {
      if (h === "left") {
        leftHandPosition = getPos(e);
        return "left";
      } else {
        rightHandPosition = getPos(e);
        return "right";
      }
    }

    for (let i = 0; i < 2; i++) {
      leftHand.push(Math.abs(pos[i] - leftHandPosition[i]));
      rightHand.push(Math.abs(pos[i] - rightHandPosition[i]));
    }

    const leftResult = leftHand.reduce((a, b) => a + b);
    const rightResult = rightHand.reduce((a, b) => a + b);
    if (leftResult === rightResult) {
      if (h === "left") {
        leftHandPosition = getPos(e);
        return "left";
      } else {
        rightHandPosition = getPos(e);
        return "right";
      }
    } else if (leftResult < rightResult) {
      leftHandPosition = getPos(e);
      return "left";
    } else {
      rightHandPosition = getPos(e);
      return "right";
    }
  }
};

const solution = (numbers, hand) => {
  let answer = "";
  let last = null;
  let lastHand = hand;
  numbers.forEach(e => {
    let temp = pressKeypad(e, hand, last, lastHand);
    answer += temp === "left" ? "L" : "R";
    last = e;
    lastHand = temp;
  });
  return answer;
};
