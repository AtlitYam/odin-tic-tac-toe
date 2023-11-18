import player from "./player.js"
import b from "./board.js"
import g from "./tictactoe.js"

const playerModal = (function () {

    // Get the modal
    const modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    const confirm = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    function showCreatePlayerModal() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    confirm.onclick = function () {
        modal.style.display = "none";
        b.board.resetBoard()

        const playerInfo = [
            document.querySelector('#playerOneName').value,
            document.querySelector('#playerOneSign').value,
            document.querySelector('#playerTwoName').value,
            document.querySelector('#playerTwoSign').value
        ]

        const players = [
            player.createPlayer(playerInfo[0], playerInfo[1]),
            player.createPlayer(playerInfo[2], playerInfo[3])
        ]

        g.game.startNewGame(players)
    }

    return { showCreatePlayerModal }
})()

playerModal.showCreatePlayerModal()

export default { playerModal }