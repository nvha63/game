const chalk = require('chalk');
var matrixStart =
   chalk `#.{green "K"}.#####\n
 ##.######\n
 #########\n
 #########\n
 #########\n
 #########\n
 #########\n
 #########\n
 ########o`;
var maze = [];
var K =chalk.red('K');
var arr = matrixStart.replace(/\n/g, '').split(' ');
for (let i = 0; i < arr.length; i++) {
    maze[i] = (arr[i].split(''));
}
for (let i = 0; i < maze.length; i++) {
    console.log((maze[i].join(' ')));
}
var miles = 18;
var calculateFeet = miles => miles * 5280;

console.log(chalk `
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);
{green ${K}}