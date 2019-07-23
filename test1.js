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
var n = 0;
var x = 0,
    y = 2;
var b = 8,
    c = 8;
var maze = [];
var arr = matrixStart.replace(/\n/g, '').split(' ');
for (let i = 0; i < arr.length; i++) {
    maze[i] = (arr[i].split(''));
}
//console.log(maze);
for (let i = 0; i < maze.length; i++) {
    console.log(maze[i].join(' '));
}
var quiz = {
    0: "quiz: 1+1=2\nanswer: T || F", //true
    1: "0.1+0.2=0.3\nanswer: T || F", //false
    2: "0,1+0,2==2\nanswer: T || F" // true
}
var random = Math.floor(Math.random() * Object.values(quiz).length);

/*=======================================================*/
process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
    //=============UP============//
    if (key.name == 'up') {
        console.log("up");
        if (n == 0) {
            console.log("thằng đần nhấp lên làm gì nữa !!!");
            return;
        }
        if (maze[x + n - 1][y] != "#") {
            if (y == 0) {
                maze[x + n - 1].splice(y, 1, "K"); //vi tri moi
                if (n > 2) {
                    maze[x + n - 2].splice(y, 1, ".");
                } //up
                //maze[x + n - 1].splice(y + 1, 1, "."); //right
                //maze[x + n - 0].splice(y, 1, "."); //down
                //process.stdout.write('\033[2J]\033[0f');
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }
                console.log("hihi");

            }
            if (n > 0) {
                maze[x + n - 1].splice(y, 1, "K"); //vi tri moi
                if (n != 1) {
                    maze[x + n - 1].splice(y - 1, 1, "."); //left
                    maze[x + n - 2].splice(y, 1, "."); //up
                }
                if (y != 8) {
                    maze[x + n - 1].splice(y + 1, 1, ".");
                } //right
                maze[x + n - 0].splice(y, 1, "."); //down
                //console.log(maze);
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }
                n--;
            }
        } else {
            //console.log(maze);
            for (let i = 0; i < maze.length; i++) {
                console.log(maze[i].join(' '));
            }
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
            //console.log(maze);
            for (let i = 0; i < maze.length; i++) {
                console.log(maze[i].join(' '));
            }
            return;
        }
        //ramdom//
        if (maze[x + n + 1][y] == 'x') {
            console.log(random);
            console.log(Object.values(quiz)[random]);
            //console.log(maze);
            for (let i = 0; i < maze.length; i++) {
                console.log(maze[i].join(' '));
            }
            return;
        }


        if (maze[x + n + 1][y] != "#") {
            if (n == maze.length - 2) {
                maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                maze[x + n].splice(y, 1, "."); //up
                if (y!=8) {
                    maze[x + n + 1].splice(y + 1, 1, "."); //right    
                }
                //maze[x + n + 2].splice(y, 1, "."); //down
                
                if (y != 0) {
                    maze[x + n + 1].splice(y - 1, 1, ".");
                } //left
                n++;
                //console.log(maze);
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }
            }
            if (n < maze.length - 1) {
                switch (Math.round(Math.random()) + Math.round(Math.random())) {
                    case 0: //tao #
                        //canh ben trai  
                        if (y == 0) {
                            maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                            maze[x + n].splice(y, 1, "."); //up
                            maze[x + n + 1].splice(y + 1, 1, "."); //right
                            //maze[x + n + 1].splice(y - 1, 1, "."); //left
                            maze[x + n + 2].splice(y, 1, "#"); //down
                        } else if (y == 8) {
                            maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                            maze[x + n].splice(y, 1, "."); //up
                            //maze[x + n + 1].splice(y + 1, 1, "."); //right
                            maze[x + n + 1].splice(y - 1, 1, "."); //left
                            maze[x + n + 2].splice(y, 1, "#"); //down
                        } else if (0 < y < 8) {
                            maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                            maze[x + n].splice(y, 1, "."); //up
                            maze[x + n + 1].splice(y + 1, 1, "."); //right
                            maze[x + n + 1].splice(y - 1, 1, "."); //left
                            maze[x + n + 2].splice(y, 1, "#"); //down
                        }
                        break;
                    case 1: //tao '.'
                        //canh ben trai    
                        if (y == 0) {
                            maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                            maze[x + n].splice(y, 1, "."); //up
                            maze[x + n + 1].splice(y + 1, 1, "."); //right
                            //maze[x + n + 1].splice(y - 1, 1, "."); //left
                            maze[x + n + 2].splice(y, 1, "."); //down
                        } else if (y == 8) {
                            maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                            maze[x + n].splice(y, 1, "."); //up
                            //maze[x + n + 1].splice(y + 1, 1, "."); //right
                            maze[x + n + 1].splice(y - 1, 1, "."); //left
                            maze[x + n + 2].splice(y, 1, "."); //down
                        } else if (0 < y < 8) {
                            maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                            maze[x + n].splice(y, 1, "."); //up

                            maze[x + n + 1].splice(y + 1, 1, ".");
                            //right
                            maze[x + n + 1].splice(y - 1, 1, "."); //left
                            maze[x + n + 2].splice(y, 1, "."); //down
                        }

                        break;
                    case 2: // tao 'x'
                        //canh ben trai  
                        if (y == 0) {
                            maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                            maze[x + n].splice(y, 1, "."); //up
                            maze[x + n + 1].splice(y + 1, 1, "."); //right
                            //maze[x + n + 1].splice(y - 1, 1, "."); //left
                            maze[x + n + 2].splice(y, 1, "x"); //down
                        } else if (y == 8) {
                            maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                            maze[x + n].splice(y, 1, "."); //up
                            //maze[x + n + 1].splice(y + 1, 1, "."); //right
                            maze[x + n + 1].splice(y - 1, 1, "."); //left
                            maze[x + n + 2].splice(y, 1, "x"); //down
                        } else if (0 < y < 8) {
                            maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                            maze[x + n].splice(y, 1, "."); //up

                            maze[x + n + 1].splice(y + 1, 1, "."); //right
                            maze[x + n + 1].splice(y - 1, 1, "."); //left
                            maze[x + n + 2].splice(y, 1, "x"); //down
                        }
                        break;
                }
                n++;
                //console.log(maze);
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }


            } //th n =8



        } else {
            //console.log(maze);
            for (let i = 0; i < maze.length; i++) {
                console.log(maze[i].join(' '));
            }
        }
        //================================//
        if (maze[b][c] == "K") {
            console.log("smart like a dog");
            process.stdin.pause();
        }

    }
    /*random cau hoi va tra loi cau hoi*/
    /*if ( maze[x + n + 1][y] == 'x') {
        console.log(random);
        console.log(Object.values(quiz)[random]);*/
    switch (random) {
        case 0:

            if (key.name == "t") {
                console.log("true");
                random = Math.floor(Math.random() * Object.values(quiz).length);
                maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                maze[x + n].splice(y, 1, "."); //up
                maze[x + n + 1].splice(y + 1, 1, "."); //right
                maze[x + n + 1].splice(y - 1, 1, "."); //left
                if (n < 7) {
                    maze[x + n + 2].splice(y, 1, ".");
                } else {
                    maze[x + n + 1].splice(y, 1, '.');
                }
                //console.log(maze);
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }
            }
            if (key.name == "f") {
                console.log("false");
                maze[x + n + 1].splice(y, 1, "#");
                //console.log(maze);
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }
                return;
            }
            break;
        case 1:
            if (key.name == "t") {
                console.log("sai roi ban");
                maze[x + n + 1].splice(y, 1, "#");
                //console.log(maze);
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }
                return;
            }
            if (key.name == "f") {
                console.log("dung roi");
                random = Math.floor(Math.random() * Object.values(quiz).length);
                maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                maze[x + n].splice(y, 1, "."); //up
                maze[x + n + 1].splice(y + 1, 1, "."); //right
                maze[x + n + 1].splice(y - 1, 1, "."); //left
                if (n < 7) {
                    maze[x + n + 2].splice(y, 1, ".");
                } else {
                    maze[x + n + 1].splice(y, 1, '.');
                }
                //console.log(maze);
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }
                return;
            }
            break;
        case 2:
            if (key.name == "t") {
                console.log("true");
                random = Math.floor(Math.random() * Object.values(quiz).length);
                maze[x + n + 1].splice(y, 1, "K"); // vi tri moi sau khi nhap nut
                maze[x + n].splice(y, 1, "."); //up
                maze[x + n + 1].splice(y + 1, 1, "."); //right
                maze[x + n + 1].splice(y - 1, 1, "."); //left
                if (n < 7) {
                    maze[x + n + 2].splice(y, 1, ".");
                } else {
                    maze[x + n + 1].splice(y, 1, '.');
                }
                //console.log(maze);
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }
            }
            if (key.name == "f") {
                console.log("false");
                maze[x + n + 1].splice(y, 1, "#");
                //console.log(maze);
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }
                return;
            }
            break;
    }
    //}

    //==============RIGHT==========//
    if (key.name == 'right') {
        console.log("right");
        if (y == 8) {
            console.log("ko di dc nua");
            //console.log(maze);

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
                        //console.log("quay lai di!!");
                        //console.log(maze);
                        //return;
                    } else {
                        maze[x + n].splice(y + 2, 1, ".");
                    } //right*/
                    y++;
                    //console.log(maze);
                    for (let i = 0; i < maze.length; i++) {
                        console.log(maze[i].join(' '));
                    }
                } else if (n == maze[0].length - 1) { // nếu mà ở hàng dưới thì ko tạo down
                    maze[x + n].splice(y + 1, 1, "K");
                    maze[x + n - 1].splice(y + 1, 1, "."); //up
                    if (y < 7) {
                        maze[x + n].splice(y + 2, 1, ".");
                    } //right
                    //maze[x + n + 1].splice(y + 1, 1, "."); //down
                    maze[x + n].splice(y, 1, "."); //left
                    y++;
                    //console.log(maze);
                    for (let i = 0; i < maze.length; i++) {
                        console.log(maze[i].join(' '));
                    }
                } else {
                    maze[x + n].splice(y + 1, 1, "K");
                    maze[x + n - 1].splice(y + 1, 1, "."); //up
                    maze[x + n + 1].splice(y + 1, 1, "."); //down
                    maze[x + n].splice(y, 1, "."); //left
                    if (y == maze[0].length - 2) {
                        //console.log("quay lai !!");

                        //console.log(maze);
                        for (let i = 0; i < maze.length; i++) {
                            console.log(maze[i].join(' '));
                        }
                        y++;
                        return;
                    } else {
                        maze[x + n].splice(y + 2, 1, ".");

                    } //right (1)
                    y++;
                    //console.log(maze);
                    for (let i = 0; i < maze.length; i++) {
                        console.log(maze[i].join(' '));
                    }
                }
            }
        } else {
           // console.log(maze);
           for (let i = 0; i < maze.length; i++) {
               console.log(maze[i].join(' '));
           }
        }
        if (maze[b][c] == "K") {
            console.log("smart like a dog");
            maze[x + n].splice(y + 1, 1);
            //console.log(maze);
            for (let i = 0; i < maze.length; i++) {
                console.log(maze[i].join(' '));
            }

            process.stdin.pause();
        }
    }

    //=================LEFT===========//
    if (key.name == 'left') {
        console.log("left");
        if (y == 0) {
            console.log("kịch tường rồi, QUAY LẠI");
            return;
        }
        if (maze[x + n][y - 1] != "#") {
            if (y > 0) {
                maze[x + n].splice(y - 1, 1, "K");
                if (n != 0) {
                    maze[x + n - 1].splice(y - 1, 1, ".");
                } //up
                maze[x + n].splice(y, 1, "."); //right
                if (n < 8) {
                    maze[x + n + 1].splice(y - 1, 1, ".");
                } //down
                if (y > 1) {
                    maze[x + n].splice(y - 2, 1, ".");
                } //left
                y--;
                //console.log(maze);
                for (let i = 0; i < maze.length; i++) {
                    console.log(maze[i].join(' '));
                }
            }
           
        } else {
            //console.log(maze);
            for (let i = 0; i < maze.length; i++) {
                console.log(maze[i].join(' '));
            }
        }
        if (maze[b][c] == "K") {
            console.log("smart like a dog");
            process.stdin.pause();
        }
    }
});



process.stdin.setRawMode(true);
process.stdin.resume();