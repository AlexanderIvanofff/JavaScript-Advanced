// Make a tic-tac-toe console application.
// You will receive an array of arrays. As you know there are two players in this game, so the first element of the 
// input will be first player's chosen coordinates, the second element will be the second player's turn coordinates and so on.
// The initial state of the dashboard is

// [[false, false, false],
// [false, false, false],
// [false, false, false]]

// The first player's mark is X and the second player's mark is O.

// Input
// One parameter:
// •	An array - the moves in row that players make

// Output
// •	There are two players - X and O
// •	If  a player tries to make his turn on already taken place, he should make his turn again and you should print the following message:
// "This place is already taken. Please choose another!"
// •	If there are no free spaces on the dashboard and nobody wins the game should end and you should print the following message:
// "The game ended! Nobody wins :("
// •	If someone wins you should print the following message and  the current state of the dashboard:
// "Player {X/0} wins"
// Note: When printing the state of the dashboard the elements of each row the dashboard should be separated by "\t" and each row should be on new line.



function solve(input) {
    let arr = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';
 
    for (let line of input) {
        [currRow, currCol] = line.split(' ').map(Number);
 
        if (arr[currRow][currCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
 
        arr[currRow][currCol] = player;
 
        //check horizontal and vertical
        for (let i = 0; i < 3; i++) {
            if (
                arr[i][0] === player &&
                arr[i][1] === player &&
                arr[i][2] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            } else if (
                arr[0][i] === player &&
                arr[1][i] === player &&
                arr[2][i] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
        }
 
        //check left to right
        if (
            arr[0][0] === player &&
            arr[1][1] === player &&
            arr[2][2] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }
 
        //check right to left
        else if (
            arr[0][2] === player &&
            arr[1][1] === player &&
            arr[2][0] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }
 
        let theresFalse = false;
 
        for (let row = 0; row < arr.length; row++) {
            if (arr[row].includes(false)) {
                theresFalse = true;
            }
        }
 
        if (!theresFalse) {
            console.log('The game ended! Nobody wins :(');
            printMatrix();
            return;
        }
 
        player = player === 'X' ? 'O' : 'X';
    }
 
    function printMatrix() {
        for (let row = 0; row < arr.length; row++) {
            console.log(arr[row].join('\t'));
        }
    }
}


solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)