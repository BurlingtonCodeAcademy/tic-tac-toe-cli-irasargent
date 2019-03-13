// this is a test
const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(questionText) {
    return new Promise((resolve, reject) => {
      readlineInterface.question(questionText, resolve);
    });
  }

let cell1 = 1
let cell2 = 2
let cell3 = 3
let cell4 = 4
let cell5 = 5
let cell6 = 6
let cell7 = 7
let cell8 = 8
let cell9 = 9
let cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]
let divider = '--- --- ---'

let printGrid = function() {
    console.log(('\n '+cells[0]+' | '+cells[1]+' | '+cells[2]+'\n'+divider+
    '\n '+cells[3]+' | '+cells[4]+' | '+cells[5]+'\n'+divider+
    '\n '+cells[6]+' | '+cells[7]+' | '+cells[8]))
    }

let askForInputX = async function(){
    let input = await ask('>');
    if (cells[parseInt(input)-1] == 'X' || cells[parseInt(input)-1] == 'O'){
        console.log("\nSorry! That space has been claimed! Try again.\n");
        askForInputX();
    }else{
        for (let item of cells){
            if (item === parseInt(input)){
                cells[parseInt(input)-1] = 'X'
            }
        }
        winCheck(cells);
        playerO();
}
}

let askForInputO = async function(){
    let input = await ask('>');
    if (cells[parseInt(input)-1] == 'X' || cells[parseInt(input)-1] == 'O'){
        console.log("\nSorry! That space has been claimed! Try again.\n");
        askForInputO();
    }else{
        for (let item of cells){
            if (item === parseInt(input)){
                cells[parseInt(input)-1] = 'O'
            }
        }
        winCheck(cells);
        playerX();
    }
}

let winCheck = function(array){
    let counter = 0;
    if (array[0]==array[1] && array[1]==array[2]){
        printGrid();
        console.log('HOORAY! YOU WIN!')
        process.exit();
    }else if (array[3]==array[4] && array[4]==array[5]){
        printGrid();
        console.log('HOORAY! YOU WIN!')
        process.exit();
    }else if (array[6]==array[7] && array[7]==array[8]){
        printGrid();
        console.log('HOORAY! YOU WIN!')
        process.exit();
    }else if (array[0]==array[4] && array[4]==array[8]){
        printGrid();
        console.log('HOORAY! YOU WIN!')
        process.exit(); 
    }else if (array[2]==array[4] && array[4]==array[6]){
        printGrid();
        console.log('HOORAY! YOU WIN!')
        process.exit(); 
    }else if (array[0]==array[3] && array[3]==array[6]){
        printGrid();
        console.log('HOORAY! YOU WIN!')
        process.exit();
    }else if (array[1]==array[4] && array[4]==array[7]){
        printGrid();
        console.log('HOORAY! YOU WIN!')
        process.exit();  
    }else if (array[2]==array[5] && array[5]==array[8]){
        printGrid();
        console.log('HOORAY! YOU WIN!')
        process.exit(); 
}   else {for (let item of array){
    if (item == 'X' || item == 'O'){
        counter += 1;
    }
    if (counter === 9){
        printGrid();
        console.log("\nCAT'S GAME! Better luck next time!")
        process.exit();
    }
}
}

}


let playerX = async function(){
    printGrid();
    console.log("\nIt's your turn player 'X'! Please enter the number of the cell you'd like to claim!\n");
    askForInputX();
}


let playerO = async function(){
    printGrid();
    console.log("\nIt's your turn player 'O'! Please enter the number of the cell you'd like to claim!\n");
    askForInputO();
}

playerX();
