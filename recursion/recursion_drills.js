// 1. Counting Sheep

// * What is the input to the program?
//      - number
// * What is the output of the program?
//      - number > 0: Another sheep jumps over the fence
//      - number === 0: All sheep jumped over the fence
// * What is the input to each recursive call?
//      - number - call iteration
// * What is the output of each recursive call?
//      - a number and a message, or just a message

function countSheep(num) {
    if (num === 0) return 'All sheep jumped over the fence';
    return `${num}: Another sheep jumps over the fence\n` + countSheep(num - 1);
}

console.log(countSheep(3))



// 2. Power calculator

// * What is the input to the program?
//      - integer base, integer exponent
// * What is the output of the program?
//      - base raised to exponent
// * What is the input to each recursive call?
//      - base, exponent - call iteration
// * What is the output of each recursive call?
//      - [base,exponent - 1]

function powerCalculator(b,e) {
    if ( e < 0 ) return 'exponent should be >= 0';
    if ( e === 0 ) return 1;
    if ( e === 1 ) return b;

    return b * powerCalculator(b, e - 1);
}

console.log(powerCalculator(10,2))



// 3. Reverse String

// * What is the input to the program?
//      - string
// * What is the output of the program?
//      - string reversed
// * What is the input to each recursive call?
//      - string
// * What is the output of each recursive call?
//      - last char + reverseString(string - last char)

function reverseString( str ){
    if (str.length < 1) return '';
    return str.slice(-1) + reverseString(str.substring(0, str.length - 1))
}

console.log(reverseString('abcdefghijklmnopqrstuvwxyz'))



// 4. nth Triangular Number

// * What is the input to the program?
//      - number n
// * What is the output of the program?
//      - nth triangular number
// * What is the input to each recursive call?
//      - n - 1
// * What is the output of each recursive call?
//      - n + triNum(n - 1)

function triNum(n){
    if (n <= 0) return 0;
    return n + triNum(n - 1);
}

console.log(triNum(10))



// 5. String Splitter

// * What is the input to the program?
//      - string, separator
// * What is the output of the program?
//      - array of strings
// * What is the input to each recursive call?
//      - string, separator
// * What is the output of each recursive call?
//      - [strings, strSplit(str)]

function strSplit(str,sep){
    if ( str.length < 1 ) return '';
    const i = str.indexOf(sep) === -1 ? str.length : str.indexOf(sep)
    return [str.slice(0,i), ...strSplit(str.slice(i + 1, str.length),sep)]
}

console.log(strSplit('02/20/2020','/'))



// 6. Fibonacci

// * What is the input to the program?
//      - number n
// * What is the output of the program?
//      - fibonacci sequence of number
// * What is the input to each recursive call?
//      - fibNum(n - 1) + fibNum(n - 2)
// * What is the output of each recursive call?
//      - next number

function fibNum(n) {
    if (n == 0) return 0;
    if (n == 1) return 1; 
    return fibNum(n - 1) + fibNum(n - 2);
}

console.log(fibNum(8))



// 7. Factorial

// * What is the input to the program?
//      - number n
// * What is the output of the program?
//      - !n
// * What is the input to each recursive call?
//      - n * factorial(n - 1)
// * What is the output of each recursive call?
//      - n * (n - 1)

function factorial(n){
    if (n <= 0) return 0;
    if (n === 1) return n;
    return n * factorial(n - 1)
}

console.log(factorial(5))



// 8. Find a way out of the maze

// * What is the input to the program?
//      - maze matrix
// * What is the output of the program?
//      - directions out of maze
// * What is the input to each recursive call?
//      - 
// * What is the output of each recursive call?
//      - 

function getOutOfMaze(maze, current_pos=[0,0], visited=[], path=''){ // current_pos=[Y,X]
    // maze[Y][X]
    const posY = current_pos[0];
    const posX = current_pos[1];
    
    if (maze[posY][posX] === 'e') return path;

    // define each position around current position
    const posTop = (posY - 1 > 0) ? posY - 1 : 0;
    const posRight = (posX + 1 < maze[0].length) ? posX + 1 : posX;
    const posBot = (posY + 1 < maze.length) ? posY + 1 : posY;
    const posLeft = (posX - 1 > 0) ? posX - 1 : posX;

    // add current position to visited
    visited.push(current_pos);

    // set this position to an X
    maze[posY][posX] = "X";

    // check top, right, bottom, left for open unvisited spot
    if (posRight !== posX) {
        const rightPos = [posY,posRight]
        if (visited.indexOf(rightPos) === -1) {
            if (maze[rightPos[0]][rightPos[1]] === " " || maze[rightPos[0]][rightPos[1]] === "e"){
                path += 'R';
                return getOutOfMaze(maze, rightPos, visited, path)
            }
        }
    }
    if (posBot !== posY) {
        const botPos = [posBot,posX]
        if (visited.indexOf(botPos) === -1) {
            if (maze[botPos[0]][botPos[1]] === " " || maze[botPos[0]][botPos[1]] === "e"){
                path += 'D';
                return getOutOfMaze(maze, botPos, visited, path)
            }
        }
    }
    if (posLeft !== posX) {
        const leftPos = [posY,posLeft]
        if (visited.indexOf(leftPos) === -1) {
            if (maze[leftPos[0]][leftPos[1]] === " " || maze[leftPos[0]][leftPos[1]] === "e"){
                path += 'L';
                return getOutOfMaze(maze, leftPos, visited, path)
            }
        }
    }
    if (posTop !== posY) {
        const topPos = [posTop,posX]
        if (visited.indexOf(topPos) === -1) {
            if (maze[topPos[0]][topPos[1]] === " " || maze[topPos[0]][topPos[1]] === "e"){
                path += 'T';
                return getOutOfMaze(maze, topPos, visited, path)
            }
        }
    }
    
    return path;
}

let mySmallMaze1 = [
    ['S', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
let maze1 = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(getOutOfMaze(mySmallMaze1))
console.log(getOutOfMaze(maze1))


// 9. Find ALL ways out of the maze

// * What is the input to the program?
//      - maze matrix
// * What is the output of the program?
//      - list of directions out of maze
// * What is the input to each recursive call?
//      - 
// * What is the output of each recursive call?
//      - 

function getPathsOutOfMaze(maze, current_pos=[0,0], visited=[], path='Path to the exit: ', order=0, default_maze=null, pathlist=[] ){ // current_pos=[Y,X]
    if (default_maze === null) {
        let len = maze.length
        default_maze = new Array(len);
        for (let i=0;i<len;++i){
            default_maze[i] = maze[i].slice(0)
        }
    }
    
    let fresh_maze = null;

    let len = default_maze.length
    fresh_maze = new Array(len);
    for (let i=0;i<len;++i){
        fresh_maze[i] = default_maze[i].slice(0)
    }

    const orders = [
        ['R','D','L','T'],
        ['D','L','T','R'],
        ['L','T','R','D'],
        ['T','R','D','L'],
        ['R','T','L','D'],
        ['T','L','D','R'],
        ['L','D','R','T'],
        ['D','R','T','L']
    ]
    console.log("ORDER:",orders[order])
    // maze[Y][X]
    const posY = current_pos[0];
    const posX = current_pos[1];
    
    if (maze[posY][posX] === 'e') {
        pathlist.push([orders[order],path])
        let neworder = order + 1
        if (order < orders.length - 1) {
            //console.log('reached end - new order', path)
            return getPathsOutOfMaze(
                fresh_maze,
                [0,0],
                [],
                `Path to the exit: `,
                neworder,
                default_maze,
                pathlist
            )
        }
        return pathlist;
    }
    if ( order === orders.length ) return pathlist;


    // define each position around current position
    const posTop = (posY - 1 > 0) ? posY - 1 : 0;
    const posRight = (posX + 1 < maze[0].length) ? posX + 1 : posX;
    const posBot = (posY + 1 < maze.length) ? posY + 1 : posY;
    const posLeft = (posX - 1 > 0) ? posX - 1 : posX;

    // add current position to visited
    visited.push(current_pos);

    // set this position to an X
    maze[posY][posX] = "X";

    // check top, right, bottom, left for open unvisited spot
    const paths = {

        R: () => {
            if (posRight !== posX) {
                const rightPos = [posY,posRight]
                if (visited.indexOf(rightPos) === -1) {
                    if (maze[rightPos[0]][rightPos[1]] === " " || maze[rightPos[0]][rightPos[1]] === "e"){
                        path += 'R';
                        return [true,[maze, rightPos, visited, path, order, default_maze, pathlist]]
                    }
                }
            }
        },
        D: () => {
            if (posBot !== posY) {
                const botPos = [posBot,posX]
                if (visited.indexOf(botPos) === -1) {
                    if (maze[botPos[0]][botPos[1]] === " " || maze[botPos[0]][botPos[1]] === "e"){
                        path += 'D';
                        return [true,[maze, botPos, visited, path, order, default_maze, pathlist]]
                    }
                }
            }
        },
        L: () => {
            if (posLeft !== posX) {
                const leftPos = [posY,posLeft]
                if (visited.indexOf(leftPos) === -1) {
                    if (maze[leftPos[0]][leftPos[1]] === " " || maze[leftPos[0]][leftPos[1]] === "e"){
                        path += 'L';
                        return [true,[maze, leftPos, visited, path, order, default_maze, pathlist]]
                    }
                }
            }
        },
        T: () => {
            if (posTop !== posY) {
                const topPos = [posTop,posX]
                if (visited.indexOf(topPos) === -1) {
                    if (maze[topPos[0]][topPos[1]] === " " || maze[topPos[0]][topPos[1]] === "e"){
                        path += 'T';
                        return [true,[maze, topPos, visited, path, order, default_maze, pathlist]]
                    }
                }
            }
        }
    }
    
    let o = orders[order]

    let o0 = paths[o[0]]()
    if (o0) {
        return getPathsOutOfMaze(o0[1][0],o0[1][1],o0[1][2],o0[1][3],o0[1][4],o0[1][5],o0[1][6])
    }
    let o1 = paths[o[1]]()
    if (o1) {
        return getPathsOutOfMaze(o1[1][0],o1[1][1],o1[1][2],o1[1][3],o1[1][4],o1[1][5],o1[1][6])
    }
    let o2 = paths[o[2]]()
    if (o2) {
        return getPathsOutOfMaze(o2[1][0],o2[1][1],o2[1][2],o2[1][3],o2[1][4],o2[1][5],o2[1][6])
    }
    let o3 = paths[o[3]]()
    if (o3) {
        return getPathsOutOfMaze(o3[1][0],o3[1][1],o3[1][2],o3[1][3],o3[1][4],o3[1][5],o3[1][6])
    }

    //console.log(maze, current_pos, visited, path, order, pathlist)
    let neworder = order + 1
    return getPathsOutOfMaze(fresh_maze,[0,0],[],'Path to the exit: ',neworder,default_maze,pathlist);
}


let mySmallMaze2 = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
let maze2 = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
console.log('\n---\n')
console.log(getPathsOutOfMaze(mySmallMaze2))
console.log('\n---\n')
console.log(getPathsOutOfMaze(maze2))


// 10. Anagrams

// * What is the input to the program?
//      - word
// * What is the output of the program?
//      - list of anagrams
// * What is the input to each recursive call?
//      - 
// * What is the output of each recursive call?
//      - 

function getAnagrams(word){
    // yolo
}



// 11. Organization Chart

// * What is the input to the program?
//      - object with org chart
// * What is the output of the program?
//      - printed chart
// * What is the input to each recursive call?
//      - 
// * What is the output of each recursive call?
//      - 

function orgChart(obj){
    // yolo
}



// 12. Binary Representation

// * What is the input to the program?
//      - number
// * What is the output of the program?
//      - binary representation of number
// * What is the input to each recursive call?
//      - 
// * What is the output of each recursive call?
//      - 

function getBinary(n){
    // yolo
}
