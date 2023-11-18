import g from "./tictactoe.js"
import b from "./board.js"
import m from "./playerModal.js"

const displayController = (function () {
    const playersElement = document.querySelector('#players')
    const boardElement = document.querySelector('#board')
    const winnerElement = document.querySelector('#winner')

    function drawBoard(board) {
        boardElement.querySelectorAll('.square').forEach(element => boardElement.removeChild(element))
        board.forEach((element, index) => {
            const div = document.createElement('div')
            div.innerText = element
            div.id = index
            div.classList.add('square')
            div.addEventListener('click', function () {
                b.board.setIndexTo(index, g.game.getCurrentPlayerSign())
                drawBoard(b.board.getBoardArray())
                g.game.changeCurrentPlayer()
                g.game.checkWinCondition()
            })
            boardElement.appendChild(div)
        });
    }

    function drawPlayers(players) {
        players.forEach(player => {
            const div = document.createElement('div')
            div.classList.add('player')
            div.innerText = `${player.getName()} plays with ${player.getSign()}`
            playersElement.appendChild(div)
        })
    }

    function updateCurrentPlayer(currentPlayer) {
        const playersElement = document.querySelector('#players').querySelectorAll('.player')
        playersElement.forEach(element => {
            element.classList.remove('currentPlayer')
        });
        playersElement[currentPlayer].classList.add('currentPlayer')
    }

    function announceWinner(player) {
        boardElement.querySelectorAll('.square').forEach(element => boardElement.removeChild(element))
        playersElement.querySelectorAll('.player').forEach(element => playersElement.removeChild(element))

        const header = document.createElement('div')
        header.innerText = `Congratulations!`
        header.classList.add('header')

        const content = document.createElement('div')
        content.innerText = `${player.getName()} won!!`
        content.classList.add('content')

        const playAgain = document.createElement('button')
        playAgain.innerText = 'Do you want to play again?'
        playAgain.addEventListener('click', function () {
            winnerElement.querySelectorAll('div, button').forEach(element => winnerElement.removeChild(element))
            m.playerModal.showCreatePlayerModal()
        })

        winnerElement.appendChild(header)
        winnerElement.appendChild(content)
        winnerElement.appendChild(playAgain)
    }

    return { drawBoard, drawPlayers, updateCurrentPlayer, announceWinner }
})()

export default { displayController }