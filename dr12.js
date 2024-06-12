let podg2=document.querySelector(".podg2")
let txxt="Теперь ты должна сыграть в крестики нолики"
let txxt1="Для этого нажми на кнопку ниже"
let sffds=[txxt,txxt1];
let c=0;
let invex=0;
let kir=0
let  y=1;
const board = []; // 2D array to represent the board
let currentPlayer = 'X';
let gameOver = false;
let zz=1;

const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');

// Create the board cells dynamically
function createBoard() {
  for (let i = 0; i < 3; i++) {
    board[i] = [];
    for (let j = 0; j < 3; j++) {
      board[i][j] = '';

      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener('click', handleClick);
      boardElement.appendChild(cell);
    }
  }
}
function deleteBoard(){
  boardElement.innerHTML="";
  boardElement.style.display="none"
  document.querySelector(".gg2").style.display="none"
  document.getElementById("status").innerHTML="";
  gameOver=false
}
// Handle cell click
function handleClick(event) {
  if (gameOver) return;

  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);

  if (board[row][col] === '') {
    makeMove(row, col);
  }
}

// Make a move (player or bot)
function makeMove(row, col) {
  board[row][col] = currentPlayer;
  updateBoard();

  if (checkWin() || checkDraw()) {
    gameOver = true;
    statusElement.textContent = gameOver ? (checkWin() ? `${currentPlayer} wins!` : 'It\'s a draw!') : '';
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  // Bot's turn (if it's 'O')
  if (currentPlayer === 'O') {
    botMove();
  }
}

// Simple AI for the bot
function botMove() {
  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        board[i][j] = 'O';
        let score = minimax(board, 0, false); // Call minimax
        board[i][j] = '';
        if (score > bestScore) {
          bestScore = score;
          move = { row: i, col: j };
        }
      }
    }
  }

  makeMove(move.row, move.col);
}

// Minimax algorithm with alpha-beta pruning (for bot)
function minimax(board, depth, isMaximizing) {
  if (checkWin() && currentPlayer === 'O') {
    return 10 - depth;
  } else if (checkWin() && currentPlayer === 'X') {
    return depth - 10;
  } else if (checkDraw()) {
    return 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          board[i][j] = 'O';
          let score = minimax(board, depth + 1, false);
          board[i][j] = '';
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          board[i][j] = 'X';
          let score = minimax(board, depth + 1, true);
          board[i][j] = '';
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}

// Update the visual board
function updateBoard() {
  const cells = boardElement.querySelectorAll('.cell');
  cells.forEach(cell => {
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    cell.textContent = board[row][col];
  });
}

// Check for a win
function checkWin() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      return true;
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (board[0][j] !== '' && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
      return true;
    }
  }

  // Check diagonals
  if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return true;
  }
  if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    return true;
  }

  return false;
}

// Check for a drawz
function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}



podg2.style.cursor="pointer"
if(kir<10){
podg2.addEventListener("click",function(){

 
    kir=kir+1   
console.log(kir)
function rr(time,c,invex){
   
   
    
    setTimeout(() => {
       const interval = setInterval(() => {
           function type(text) {
              podg2.innerHTML += text[invex];
               invex++;
               console.log(invex);
               if (text[invex] === undefined) {
                   clearInterval(interval);
               }
           }
           type(sffds[c]);

       },100)
    },time)
 
    

}
if(kir==1){
podg2.innerHTML="";
rr(100,0,0)}
if(kir==2){
podg2.innerHTML="";
rr(2000,1,0)
kir=10;
podg2.style.cursor="Default"
document.getElementById("btng2").style.display="flex"
document.getElementById("btng2").addEventListener("click",function(){


  deleteBoard();
   
  createBoard();   
   
  document.getElementById("board").style.display="grid"
    document.querySelector(".gg2").style.display="flex"
   setTimeout(() => {
    console.log(checkWin())
     if(checkWin()==true){
      document.getElementById("btng2").innerHTML="Победа!!!"
      document.getElementById("btng2").addEventListener("click",function(){
          document.querySelector(".gg2").style.display="none"
          document.querySelector(".podarok").style.display="flex"
          document.querySelector(".img1").addEventListener("click",function(){
               document.querySelector(".podarok").style.display="none"
               document.querySelector(".gg3").style.display="flex"
          })

      })



     }
   }, 5000);
})}})}