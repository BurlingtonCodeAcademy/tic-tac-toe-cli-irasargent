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

let cells = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let divider = '--- --- ---'
let player = { turn: 'X' }

let printGrid = function () {
    console.log(('\n ' + cells[0] + ' | ' + cells[1] + ' | ' + cells[2] + '\n'
        + divider + '\n '
        + cells[3] + ' | ' + cells[4] + ' | ' + cells[5] + '\n'
        + divider + '\n '
        + cells[6] + ' | ' + cells[7] + ' | ' + cells[8]))
}

let playerTurn = async function () {
    let input = parseInt(await ask('\n> '));
    if (!cells.includes(input)) {
        console.log("\nSorry Player " + player.turn + "! That's not a valid input. Please enter a number between 1 and 9 that hasn't already been taken!");
        printGrid();
        playerTurn();
    }
    else {
        for (let item of cells) {
            if (item === input && player.turn === 'X') {
                cells[input - 1] = 'X';
                winCheck(cells);
                player.turn = 'O';
            } else if (item === input && player.turn === 'O') {
                cells[input - 1] = 'O';
                winCheck(cells);
                player.turn = 'X';
            }
        }
        turnStart();
    }
}

let winCheck = function (array) {
    let counter = 0;
    if (array[0] == array[1] && array[1] == array[2]) {
        printGrid();
        console.log('\nCONGRATULATIONS PLAYER '+player.turn+' ! YOU WIN!')
        process.exit();
    } else if (array[3] == array[4] && array[4] == array[5]) {
        printGrid();
        console.log('\nCONGRATULATIONS PLAYER '+player.turn+' ! YOU WIN!')
        process.exit();
    } else if (array[6] == array[7] && array[7] == array[8]) {
        printGrid();
        console.log('\nCONGRATULATIONS PLAYER '+player.turn+' ! YOU WIN!')
        process.exit();
    } else if (array[0] == array[4] && array[4] == array[8]) {
        printGrid();
        console.log('\nCONGRATULATIONS PLAYER '+player.turn+' ! YOU WIN!')
        process.exit();
    } else if (array[2] == array[4] && array[4] == array[6]) {
        printGrid();
        console.log('\nCONGRATULATIONS PLAYER '+player.turn+' ! YOU WIN!')
        process.exit();
    } else if (array[0] == array[3] && array[3] == array[6]) {
        printGrid();
        console.log('\nCONGRATULATIONS PLAYER '+player.turn+' ! YOU WIN!')
        process.exit();
    } else if (array[1] == array[4] && array[4] == array[7]) {
        printGrid();
        console.log('\nCONGRATULATIONS PLAYER '+player.turn+' ! YOU WIN!')
        process.exit();
    } else if (array[2] == array[5] && array[5] == array[8]) {
        printGrid();
        console.log('\nCONGRATULATIONS PLAYER '+player.turn+' ! YOU WIN!')
        process.exit();
    } else {
        for (let item of array) {
            if (item == 'X' || item == 'O') {
                counter += 1;
            }
            if (counter === 9) {
                printGrid();
                console.log("\nCAT'S GAME! Better luck next time!")
                process.exit();
            }
        }
    }
}

let turnStart = async function () {
    console.log("\nIt's your turn player " + player.turn + "! Please enter the number of the cell you'd like to claim!");
    printGrid();
    playerTurn();
}

turnStart()
