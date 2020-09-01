function solution(board, moves) {
  var answer = 0;
  var box = [];
  var arr = [];

  function clearBox() {
    var reset;
    if (box.length >= 2) {
      var j = 0;
      box.forEach((e, i) => {
        var reset = box[j];
        if (reset == box[++j]) {
          box.splice(j - 1, 2);
          answer += 2;
        }
      });
    }
  }

  board.forEach((e, i) => {
    var arr2 = [];
    board.forEach((f, j) => {
      arr2.push(f[i]);
    });
    arr.push(arr2);
  });

  moves.forEach((e, i) => {
    for (var j = 0; j <= arr.length - 1; j++) {
      if (arr[e - 1][j] != 0) {
        var _splice = arr[e - 1].splice(j, 1, 0).join();
        if (_splice) {
          box.push(_splice);
          clearBox();
        }
        return false;
      }
    }
  });
  return answer;
}
/* board
[
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]	

    arr[e - 1]
    
	[ 0, 0, 0, 4, 3 ]
    [ 0, 3, 1, 2, 1 ]
    [ 0, 1, 5, 4, 1 ]
    [ 0, 3, 1, 2, 1 ]
    [ 0, 0, 0, 4, 3 ]
    [ 0, 0, 2, 2, 5 ]
    [ 0, 0, 0, 4, 3 ]
    [ 0, 0, 0, 4, 3 ]
    
    
    [ '4', '3', '1', '1', '3', '2', '4' ]
*/
