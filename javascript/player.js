function createPlayer(newName, newSign) {
    const name = newName
    const score = 0;
    const sign = newSign
    let currentPlayer = false

    function getName() {
        return name
    }

    function getSign() {
        return sign
    }

    function getScore() {
        return score
    }

    function addScore() {
        score++
    }

    function isCurrentPlayer() {
        return currentPlayer
    }

    function setCurrentPlayer(bool) {
        currentPlayer = bool
    }

    return { getName, getSign, getScore, addScore, isCurrentPlayer, setCurrentPlayer }
}

export default { createPlayer }