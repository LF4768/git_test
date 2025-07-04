const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");
const box6 = document.querySelector(".box-6");
const box7 = document.querySelector(".box-7");
const box8 = document.querySelector(".box-8");
const box9 = document.querySelector(".box-9");
const allBoxes = document.querySelectorAll(".grid");
const winnerDeclaration = document.querySelector(".result");
const turnText = document.querySelector(".title");

let result = 0;
turnText.textContent = "Tic - Tac - Toe"


function symbol() {
  if(game.getActivePlayer().symbol == "X") {    
    const imgCross = document.createElement("img");
    imgCross.setAttribute("src", "./1553039_blue_letter_x_alphabet_letters_icon.png");
    imgCross.setAttribute("class", "animate")
    return imgCross;
  } else {
    const imgCircle = document.createElement("img");
    imgCircle.setAttribute("src", "./1553085_blue_letter_o_alphabet_letters_icon.png");
    imgCircle.setAttribute("class", "animate")
    return imgCircle
  }
}

  box1.addEventListener("click", function placeSymbol(e) {
    if(result != 1) {
    box1.appendChild(symbol());
    if((gameBoard().boardGetter())[0][0] == 0) {
      e.currentTarget.removeEventListener(e.type, placeSymbol);
    }
    game.playRound(0,0);
    }
  });
  box2.addEventListener("click", function placeSymbol(e) {
    if(result != 1) {
    box2.appendChild(symbol());
    game.playRound(0,1);
    e.currentTarget.removeEventListener(e.type, placeSymbol);
    }
  });
  box3.addEventListener("click", function placeSymbol(e) {
    if(result != 1) {
    box3.appendChild(symbol());
    game.playRound(0,2);
    e.currentTarget.removeEventListener(e.type, placeSymbol);
    }
  });
  box4.addEventListener("click", function placeSymbol(e) {
    if(result != 1) {
    box4.appendChild(symbol());
    game.playRound(1,0);
    e.currentTarget.removeEventListener(e.type, placeSymbol);
    }
  });
  box5.addEventListener("click", function placeSymbol(e) {
    if(result != 1) {
    box5.appendChild(symbol());
    game.playRound(1,1);
    e.currentTarget.removeEventListener(e.type, placeSymbol);
    }
  });
  box6.addEventListener("click", function placeSymbol(e) {
    if(result != 1) {
    box6.appendChild(symbol());
    game.playRound(1,2);
    e.currentTarget.removeEventListener(e.type, placeSymbol);
    }
  });
  box7.addEventListener("click", function placeSymbol(e) {
    if(result != 1) {
    box7.appendChild(symbol());
    game.playRound(2,0);
    e.currentTarget.removeEventListener(e.type, placeSymbol);
    }
  });
  box8.addEventListener("click", function placeSymbol(e) {
    if(result != 1) {
    box8.appendChild(symbol());
    game.playRound(2,1);
    e.currentTarget.removeEventListener(e.type, placeSymbol);
    }
  });
  box9.addEventListener("click", function placeSymbol(e) {
    if(result != 1) {
    box9.appendChild(symbol());
    game.playRound(2,2);
    e.currentTarget.removeEventListener(e.type, placeSymbol);
    }
  });




function gameBoard() {

  const rows = 3;
  const columns = 3;
  const board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(0);
      };
  };

  const printBoard = () => {
    console.log(board);
  }

  const boardGetter = () => board;

  const addSymbol = (row, column, value) =>  {
    if (row > 2 || column > 2) {
      return "2"
    } else {
      if(board[row][column] != 0) {
        return "1";
      } else {
        board[row][column] = value;
      }
    }
  }

  const eraseBoard = () => {
    for(i = 0; i <= 2; i++) {
      for(j = 0; j <= 2; j++) {
        board[i][j] = 0;
      }
    }
    console.log(board)
  }
  return {addSymbol, printBoard, boardGetter, eraseBoard};
};

function gameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = gameBoard();

  const players = [
    {
      name: playerOneName,
      symbol: "X"
    },
    {
      name: playerTwoName,
      symbol: "O"
    }
  ]
  let activePlayer = players[0];

  const switchActivePlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn`);
    turnText.textContent = `${getActivePlayer().name}'s turn`;
  }

  const winConditions = () => {
    let flagX = 0;
    let flagO = 0;
    let drawCount = 0;
    for(i = 0; i < 3; i++) {
      for(j = 0; j < 3; j++) {
        if((board.boardGetter())[i][j] == "X") {
          flagX++ ;
        } else if ((board.boardGetter())[i][j] == "O") {
          flagO++;
        }
      }
      if (flagX == 3) {
        winnerDeclaration.textContent = `Winner is ${getActivePlayer().name}`;
        return 1;
      } else if(flagO == 3) {
        winnerDeclaration.textContent = `Winner is ${getActivePlayer().name}`;
        return 1;
      }
      flagX = 0;
      flagO = 0;
      for(j = 0; j < 3; j++) {
        if((board.boardGetter())[j][i] == "X") {
          flagX++ ;
        } else if ((board.boardGetter())[j][i] == "O") {
          flagO++;
        }
      }
      if (flagX == 3) {
        winnerDeclaration.textContent = `Winner is ${getActivePlayer().name}`;
        return 1;
      } else if(flagO == 3) {
        winnerDeclaration.textContent = `Winner is ${getActivePlayer().name}`;
        return 1;
      }
      flagX = 0;
      flagO = 0
      if((board.boardGetter())[0][0] == "X" && board.boardGetter()[1][1] == "X" && board.boardGetter()[2][2] == "X") {
        winnerDeclaration.textContent = `Winner is ${getActivePlayer().name}`;
        return 1;
      } else if((board.boardGetter())[0][2] == "X" && board.boardGetter()[1][1] == "X" && board.boardGetter()[2][0] == "X") {
        winnerDeclaration.textContent = `Winner is ${getActivePlayer().name}`;
        return 1;
      }
      
      if((board.boardGetter())[0][0] == "O" && board.boardGetter()[1][1] == "O" && board.boardGetter()[2][2] == "O") {
        winnerDeclaration.textContent = `Winner is ${getActivePlayer().name}`;
        return 1;
      } else if((board.boardGetter())[0][2] == "O" && board.boardGetter()[1][1] == "O" && board.boardGetter()[2][0] == "O") {
        winnerDeclaration.textContent = `Winner is ${getActivePlayer().name}`;
        return 1;
      }
      for(j = 0; j < 3; j++) {
        if((board.boardGetter())[i][j] == "X" || (board.boardGetter())[i][j] == "O") {
          drawCount++;
        }
      } 
      if (drawCount == 9) {
        winnerDeclaration.textContent = `DRAW!`;
        return 1;
      }
    }
  }

  const startGame = () => {
    console.log("Welcome To The Classic Game Of Tic - Tac - Toe")
    console.log(board.boardGetter());
    console.log(`${getActivePlayer().name}'s Turn`)
  }

  const restartGame = () => {
    board.eraseBoard();
    result = 0;
  }

  startGame();
  const playRound = (row,column) => {
      if (result != 1) {
      console.log(`Putting ${getActivePlayer().name}'s Symbol...`)
      board.addSymbol(row,column, getActivePlayer().symbol);
      result = winConditions();
      switchActivePlayer();
      printNewRound();
    }
  }
  return {playRound, getActivePlayer, restartGame};
}

const game = gameController();

restart.addEventListener("click" , () => {
  game.restartGame();
  
});  