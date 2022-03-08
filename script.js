const gameOver = NaN

const scoreBoard = document.getElementById('score')

const table = document.getElementsByClassName('grid-board')
let playerTurn = 0

const startGame = () => {
  playerTurn++
  document.getElementById('score').style.opacity = 1
}

const winningCombination = [
  [0, 1, 2, 3],
  [0, 7, 14, 21],
  [0, 8, 16, 24],
  [1, 2, 3, 4],
  [1, 8, 15, 22],
  [1, 9, 17, 25],
  [2, 3, 4, 5],
  [2, 9, 16, 23],
  [2, 10, 18, 26],
  [3, 4, 5, 6],
  [3, 10, 17, 24],
  [3, 11, 19, 27],
  [3, 9, 15, 21],
  [4, 11, 18, 25],
  [4, 10, 16, 22],
  [5, 12, 19, 27],
  [5, 11, 17, 23],
  [6, 13, 20, 27],
  [6, 12, 18, 24],
  [21, 22, 23, 24],
  [21, 28, 35, 42],
  [21, 29, 37, 45],
  [22, 23, 24, 25],
  [22, 29, 36, 43],
  [22, 30, 38, 46],
  [23, 24, 25, 26],
  [23, 30, 37, 44],
  [23, 31, 39, 47],
  [24, 31, 38, 45],
  [24, 25, 26, 27],
  [24, 32, 40, 48],
  [24, 30, 36, 42],
  [25, 32, 39, 46],
  [25, 31, 37, 43],
  [26, 33, 40, 47],
  [26, 32, 38, 44],
  [27, 33, 39, 45],
  [27, 34, 41, 48],
  [7, 8, 9, 10],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [17, 18, 19, 20],
  [24, 25, 26, 27],
  [35, 36, 37, 38],
  [38, 39, 40, 41],
  [42, 43, 44, 45],
  [45, 46, 47, 48],
  [10, 16, 22, 28],
  [10, 18, 26, 34],
  [17, 23, 29, 35],
  [17, 25, 33, 41],
  [31, 23, 15, 7],
  [31, 25, 19, 13],
  [38, 30, 22, 14],
  [38, 32, 26, 20],
  [45, 37, 29, 21],
  [45, 39, 33, 27]
]
for (let i = 0; i < winningCombination.length; i++) {
  winningCombination[i] = NaN
}

const createBoard = () => {
  for (let i = 0; i < 49; i++) {
    const squares = document.createElement('div')
    squares.className = 'grid'
    squares.id = 'index' + i
    document.querySelector('div').appendChild(squares)
  }
}

createBoard()

const boxes = document.querySelectorAll('.grid')
console.log(boxes)

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
