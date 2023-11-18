const board = (function () {
    let boardArray

    function setIndexTo(index, sign) {
        console.log(sign)
        boardArray[index] = sign
        console.log(boardArray)
    }

    function getBoardArray() {
        return boardArray
    }

    function resetBoard() {
        boardArray = ['', '', '', '', '', '', '', '', '']
    }

    return { setIndexTo, getBoardArray, resetBoard }
})();

export default { board }