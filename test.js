var keypress = require('keypress');

keypress(process.stdin);
console.log("GAME CỤC XÚC !!!");
console.log("rules: tự tìm hiểu");
var matrixStart =
    `#.K.#####\n
 ##.######\n
 #########\n
 #########\n
 #########\n
 #########\n
 #########\n
 #########\n
 ########o`;
var matrixEnd =
    `#.K.....#\n
 ##...##.#\n
 ##..###..\n
 #...#...#\n
 #..#.....\n
 ...#...#.\n
 #....#...\n
 ##...#.#.\n
 #.......o`;
//var arr1 = [];
var n = 0;
var maze = [];
//tao ra buc tuong khong the pha vo
var arr = matrixStart.replace(/\n/g, '').split(' ');
for (let i = 0; i < arr.length; i++) {
    maze[i] = (arr[i].split(''));
}
/*maze[0][0]="#";
maze[0][8]="#";
maze[1][0] = "#";
maze[1][1] = "#";
maze[][] = "#";
maze[][] = "#";
maze[][] = "#";
maze[][] = "#";
maze[][] = "#";
maze[][] = "#";
maze[][] = "#";
maze[][] = "#";
maze[][] = "#";
maze[][] = "#";
maze[][] = "#";
maze[][] = "#";*/
console.log(maze);
//var mazeStar
/*var arr = matrix.split("\n");
var arrStart = matrixStart.split("\n");
for (let i = 0; i < arr.length; i++) {
    maze[i] = (arr[i].split(''));
}
for (let i = 0; i < arr.length; i++) {
    maze[i] = (arr[i].split(''));
}
console.log(maze);
console.log();*/
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
                maze[x + n - 1].splice(y, 1, "K"); //vi tri moi
                maze[x + n - 2].splice(y, 1, "."); // up
                maze[x + n - 1].splice(y + 1, 1, "."); //right
                maze[x + n - 0].splice(y, 1, "."); //down
                maze[x + n - 1].splice(y - 1, 1, "."); //left
                console.log(maze);
                n--;
            }
        } else {
            console.log(maze);
        }
        if (maze[b][c] == "K") {
            console.log("smart like a dog");
            process.stdin.pause();
        }
    }
    //============DOWN=========// 
    if (key.name == 'down') {
        console.log("down");
        if (n == maze.length - 1) {
            console.log(" đừng nhấp xuống nữa !!!");
            return;
        }
        if (maze[x + n + 1][y] != "#") {
            /*neu la mang 7  */
            if (n == maze.length - 2) {
                maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                maze[x + n].splice(y, 1, "."); //up
                maze[x + n + 1].splice(y + 1, 1, "."); //right
                //maze[x + n + 2].splice(y, 1, "."); //down
                maze[x + n + 1].splice(y - 1, 1, "."); //left
                n++;
                console.log(maze);
            }
            /*dk n<8 ko phai mang cuoi*/ 
            if (n < maze.length - 1) {
                
                maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                maze[x + n].splice(y, 1, "."); //up
                maze[x + n + 1].splice(y + 1, 1, "."); //right
                maze[x + n + 2].splice(y, 1, "."); //down
                maze[x + n + 1].splice(y - 1, 1, "."); //left
                n++;
                console.log(maze);
            }
        } else {
            console.log(maze);
        }
        if (maze[b][c] == "K") {
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
            if (y < maze[0].length - 1) {
                if (n == 0) { // nếu mà ở hàng trên thì ko tạo up
                    maze[x + n].splice(y + 1, 1, "K");
                    //maze[x + n - 1].splice(y + 1, 1, "."); //up
                    maze[x + n + 1].splice(y + 1, 1, "."); //down
                    maze[x + n].splice(y, 1, "."); //left
                    if (y == maze[0].length - 2) {
                        console.log("quay lai di!!");
                        console.log(maze);
                        return;
                    } else {
                        maze[x + n].splice(y + 2, 1, ".");
                    } //right
                    y++;
                    console.log(maze);
                } else if (n == maze[0].length - 1) { // nếu mà ở hàng dưới thì ko tạo down
                    maze[x + n].splice(y + 1, 1, "K");
                    maze[x + n - 1].splice(y + 1, 1, "."); //up
                    maze[x + n].splice(y + 2, 1, "."); //right
                    //maze[x + n + 1].splice(y + 1, 1, "."); //down
                    maze[x + n].splice(y, 1, "."); //left
                    y++;
                    console.log(maze);
                } else {
                    maze[x + n].splice(y + 1, 1, "K");
                    maze[x + n - 1].splice(y + 1, 1, "."); //up
                    maze[x + n + 1].splice(y + 1, 1, "."); //down
                    maze[x + n].splice(y, 1, "."); //left
                    if (y == maze[0].length - 2) {
                        console.log("quay lai di!!");
                        console.log(maze);
                        y++;
                        return;
                    } else {
                        maze[x + n].splice(y + 2, 1, ".");

                    } //right (1)
                    y++;
                    console.log(maze);
                }
            }
        } else {
            console.log(maze);
        }
        if (maze[b][c] == "K") {
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
                maze[x + n - 1].splice(y - 1, 1, "."); //up
                maze[x + n].splice(y, 1, "."); //right
                maze[x + n + 1].splice(y - 1, 1, "."); //down
                maze[x + n].splice(y - 2, 1, "."); //left
                y--;
                console.log(maze);

            }
        } else {
            console.log(maze);
        }
        if (maze[b][c] == "K") {
            console.log("smart like a dog");
            process.stdin.pause();
        }
    }
});



process.stdin.setRawMode(true);
process.stdin.resume();