let tableSize = parseInt(prompt("Enter the size of the table (e.g., 3 for 3x3 grid):"));

let table = [];

for (let row = 0; row < tableSize; row++) {
    table[row] = [];
    for (let column = 0; column < tableSize; column++) {
        table[row][column] = '';
    }
}

function start() {
    const user_name1 = prompt("Enter first player's name:");
    const user_name2 = prompt("Enter second player's name:");

    function player1_turn() {
        console.log(table);
        let user_index_x = parseInt(prompt(`${user_name1}, enter the row index (0-${tableSize - 1}):`));
        let user_index_y = parseInt(prompt(`${user_name1}, enter the column index (0-${tableSize - 1}):`));
        table[user_index_x][user_index_y] = "X";
    }

    function player2_turn() {
        console.log(table);
        let user_index_x = parseInt(prompt(`${user_name2}, enter the row index (0-${tableSize - 1}):`));
        let user_index_y = parseInt(prompt(`${user_name2}, enter the column index (0-${tableSize - 1}):`));
        table[user_index_x][user_index_y] = "O";
    }

    while (true) {
        player1_turn();

        if (checkWinner("X")) {
            alert(`${user_name1} wins!`);
            break;
        } else if (checkWinner("O")) {
            alert(`${user_name2} wins!`);
            break;
        } else if (isBoardFull()) {
            alert("It's a tie!");
            break;
        }

        player2_turn();
        if (checkWinner("O")) {
            alert(`${user_name2} wins!`);
            break;
        } else if (checkWinner("X")) {
            alert(`${user_name1} wins!`);
            break;
        } else if (isBoardFull()) {
            alert("It's a tie!");
            break;
        }
    }

    function checkWinner(player) {
        for (let i = 0; i < tableSize; i++) {
            let rowWin = true;
            let columnWin = true;
            for (let j = 0; j < tableSize; j++) {
                if (table[i][j] !== player) {
                    rowWin = false;
                }
                if (table[j][i] !== player) {
                    columnWin = false;
                }
            }
            if (rowWin || columnWin) {
                return true;
            }
        }

        let diagonal1Win = true;
        let diagonal2Win = true;
        for (let i = 0; i < tableSize; i++) {
            if (table[i][i] !== player) {
                diagonal1Win = false;
            }
            if (table[i][tableSize - 1 - i] !== player) {
                diagonal2Win = false;
            }
        }
        return diagonal1Win || diagonal2Win;
    };

    function isBoardFull() {
        for (let row = 0; row < tableSize; row++) {
            for (let column = 0; column < tableSize; column++) {
                if (table[row][column] === '') {
                    return false;
                }
            }
        }
        return true;
    };

}

start();
