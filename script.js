const gameOver = NaN

const scoreBoard = document.getElementById('details')

const table = document.getElementsByClassName('grid-board')
let playerTurn = 0

const whoWon = document.querySelector('.winner')

const startGame = () => {
  playerTurn++
  document.querySelector('#details').style.opacity = 1
  document.querySelector('.startGame').style.opacity = 0
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
  [45, 39, 33, 27],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [28, 29, 30, 31],
  [43, 44, 45, 46],
  [44, 45, 46, 47],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
  [14, 21, 28, 35],
  [15, 22, 29, 36],
  [16, 23, 30, 37],
  [18, 25, 32, 39],
  [19, 26, 33, 40],
  [20, 27, 34, 41],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [8, 16, 24, 32],
  [9, 17, 25, 33],
  [15, 23, 31, 39],
  [16, 23, 32, 40],
  [18, 24, 30, 36],
  [19, 25, 31, 37]
]

const createBoard = () => {
  for (let i = 0; i < 49; i++) {
    const squares = document.createElement('div')
    squares.classList = 'grid empty'
    squares.id = 'index' + i
    document.querySelector('div').appendChild(squares)
  }
}

createBoard()

const boxes = document.querySelectorAll('.grid')

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', (makeMove) => {
    let checkGrid = i + 7
    if (i < 42) {
      if (boxes[checkGrid].classList.contains('taken')) {
        if (playerTurn % 2 === 1) {
          scoreBoard.innerHTML = "Player 2's Turn"
          boxes[i].setAttribute('class', 'red taken')
          playerTurn++
          checkWinner()
          console.log(playerTurn)
        } else if (playerTurn % 2 === 0) {
          scoreBoard.innerText = "Player 1's Turn"
          boxes[i].setAttribute('class', 'yellow taken')
          playerTurn++
          checkWinner()
        }
      }
    } else {
      if (!boxes[i].classList.contains('taken')) {
        if (playerTurn % 2 === 1) {
          scoreBoard.innerHTML = "Player 2's Turn"
          boxes[i].setAttribute('class', 'red taken')
          playerTurn++
          checkWinner()
          console.log(playerTurn)
        } else if (playerTurn % 2 === 0) {
          scoreBoard.innerText = "Player 1's Turn"
          boxes[i].setAttribute('class', 'yellow taken')
          playerTurn++
          checkWinner()
        }
      }
    }
  })
}

function checkWinner() {
  for (let i = 0; i < winningCombination.length; i++) {
    const combo = winningCombination[i]
    const boxOne = boxes[combo[0]]
    const boxTwo = boxes[combo[1]]
    const boxThree = boxes[combo[2]]
    const boxFour = boxes[combo[3]]
    if (
      boxOne.classList.contains('red') &&
      boxTwo.classList.contains('red') &&
      boxThree.classList.contains('red') &&
      boxFour.classList.contains('red')
    ) {
      document.querySelector('.replay').style.opacity = 1
      redWins()
      endGame()
      replay()
    } else if (
      boxOne.classList.contains('yellow') &&
      boxTwo.classList.contains('yellow') &&
      boxThree.classList.contains('yellow') &&
      boxFour.classList.contains('yellow')
    ) {
      document.querySelector('.replay').style.opacity = 1
      yellowWins()
      endGame()
      replay()
    }
  }
}

const endGame = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.add('taken')
  }
}

const redWins = () => {
  whoWon.innerText = 'Player 1 Wins!'
  whoWon.style.opacity = 1
}

const yellowWins = () => {
  whoWon.innerText = 'Player 2 Wins!'
  whoWon.style.opacity = 1
}

const replay = () => {
  const newBut = document.querySelector('.replay')
  newBut.addEventListener('click', (playAgain) => {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove('taken')
      boxes[i].classList.remove('red')
      boxes[i].classList.remove('yellow')
      boxes[i].classList.add('empty')
      boxes[i].style.borderRadius = '50%'
      boxes[i].style.width = '65px'
      boxes[i].style.height = '65px'
      boxes[i].style.margin = 'auto'
      playerTurn = 1
      scoreBoard.innerText = "Player 1's Turn"
      newBut.style.opacity = 0
    }
    whoWon.style.opacity = 0
    remove(newBut)
  })
}

function changePage() {
  window.location.href = 'mains.html'
}

function lightMode() {
  document.querySelector('body').style.backgroundColor = 'rgb(87, 174, 255)'
  whoWon.style.backgroundColor = 'rgb(87, 174, 255)'
}
function darkMode() {
  document.querySelector('body').style.backgroundColor = 'black'
  whoWon.style.backgroundColor = 'black'
}

// const checkTie = () => {
//   for (let i = 0; i < boxes.length; i++) {
//     if (boxes.classList.contains('taken')) {
//       console.log('no winner')
//     }
//   }
// }
