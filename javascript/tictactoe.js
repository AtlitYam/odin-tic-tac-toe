import player from "./player.js"
import b from "./board.js"
import dc from "./displaycontroller.js"

const game = (function () {
    let players = []

    function startNewGame(createdPlayers) {
        players = createdPlayers

        dc.displayController.drawBoard(b.board.getBoardArray())
        dc.displayController.drawPlayers(players)

        setCurrentPlayer(0)
    }

    function setCurrentPlayer(index) {
        players.forEach(player => player.setCurrentPlayer(false))

        dc.displayController.updateCurrentPlayer(index)
        players[index].setCurrentPlayer(true)

        console.log(players[0].isCurrentPlayer(), players[1].isCurrentPlayer())
    }

    function changeCurrentPlayer() {
        setCurrentPlayer(players.findIndex((player) => !player.isCurrentPlayer()))
    }

    function getCurrentPlayerSign() {
        return players.find((player) => player.isCurrentPlayer()).getSign()
    }

    function checkWinCondition() {
        const boardArray = b.board.getBoardArray()
        const winCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        // Check for a win
        for (const combination of winCombinations) {
            const [a, b, c] = combination;
            if (boardArray[a] && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]) {
                dc.displayController.announceWinner(players.find(player => player.getSign() == boardArray[a]))
                console.log(`${boardArray[a]} wins!`); // Return the winning player ('X' or 'O')
            }
        }
    }

    return { startNewGame, getCurrentPlayerSign, changeCurrentPlayer, checkWinCondition }
})()

export default { game }