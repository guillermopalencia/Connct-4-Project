const gameOver = NaN

const scoreBoard = document.getElementById('score')

const table = document.getElementsByClassName('grid-board')
let playerTurn = 0
const boxes = document.querySelectorAll('.grid')

boxes.forEach((box) => {
  box.addEventListener('click', (makeMove) => {
    if (playerTurn % 2 === 1) {
      scoreBoard.innerHTML = "Player 2's Turn"
      box.setAttribute('class', 'red')
      playerTurn++
    } else if (playerTurn > 0 && playerTurn % 2 === 0) {
      scoreBoard.innerText = "Player 1's Turn"
      box.setAttribute('class', 'yellow')
      playerTurn++
    }
  })
})

const startGame = () => {
  playerTurn++
  document.getElementById('score').style.opacity = 1
}
