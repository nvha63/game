var keypress = require('keypress');
keypress(process.stdin);
var matrix = "##K######\n##..#####\n##..#####\n#...#####\n#........\n...#####.\n#...####.\n##...###.\n#.......o";
var maze = [];
var arr = matrix.split("\n");
var n = 0;
for (let i = 0; i < arr.length; i++) {
  maze[i] = (arr[i].split(''));
}
console.log("GAME CỤC XÚC !!!");
console.log("rules: tự tìm hiểu");

console.log(maze);

var x = 0,
  y = 2; //diem khoi dau
var b = 8,
  c = 8; //diem ket thuc
process.stdin.on('keypress', function (ch, key) {
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
  //=============UP===========//
  if (key.name == 'up') {
    console.log("up");
    if (n == 0) {
      console.log("thằng đần nhấp lên làm gì nữa !!!");
      return;
    }
    if (maze[x + n - 1][y] != "#") {
      if (n > 0) {
        maze[x + n - 1].splice(y, 1, "K");
        maze[x + n].splice(y, 1, ".");
        console.log(maze);
        n--;
      }
    } else {
      console.log(maze);
    }
    if (maze[b][c] != "o") {
      console.log("smart like a dog");
      process.stdin.pause();
    }
  }
  //============DOWN=========//
  if (key.name == 'down') {
    console.log("down");
    if (n == maze.length - 1) {
      console.log("thằng ngu đừng nhấp xuống nữa !!!");
      return;
    }
    if (maze[x + n + 1][y] != "#") {
      if (n < maze.length - 1) {
        maze[x + n + 1].splice(y, 1, "K");
        maze[x + n].splice(y, 1, ".");
        n++;
        console.log(maze);
      }
    } else {
      console.log(maze);
    }
    if (maze[b][c] != "o") {
      console.log("smart like a dog");
      process.stdin.pause();
    }
  }
  //========== RIGHT===========//
  if (key.name == 'right') {
    console.log("right");

    if (y == maze[0].length - 1) {
      console.log("ko di dc nua");
      return;
    }
    if (maze[x + n][y + 1] != "#") {
      if (y + 1 < maze[x + n].length) {
        maze[x + n].splice(y + 1, 1, "K");
        maze[x + n].splice(y, 1, ".");
        y++;
        console.log(maze);
      }
    } else {
      console.log(maze);
    }
    if (maze[b][c] != "o") {
      console.log("smart like a dog");
      process.stdin.pause();
    }
  }
  //========== LEFT========//
  if (key.name == 'left') {
    console.log("left");
    if (y == 0) {
      console.log("kịch tường rồi, QUAY LẠI");
      return;
    }
    if (maze[x + n][y - 1] != "#") {
      if (y > 0) {
        maze[x + n].splice(y - 1, 1, "K");
        maze[x + n].splice(y, 1, ".");
        y--;
        console.log(maze);

      }
    } else {
      console.log(maze);
    }
    if (maze[b][c] != "o") {
      console.log("smart like a dog");
      process.stdin.pause();
    }
  }
});



process.stdin.setRawMode(true);
process.stdin.resume();