const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");
const box6 = document.querySelector(".box-6");
const box7 = document.querySelector(".box-7");
const box8 = document.querySelector(".box-8");
const box9 = document.querySelector(".box-9");



function symbol() {
  if(game.getActivePlayer().symbol == "X") {    
    const imgCross = document.createElement("img");
    imgCross.setAttribute("src", "./1553039_blue_letter_x_alphabet_letters_icon.png");
    return imgCross;
  } else {
    const imgCircle = document.createElement("img");
    imgCircle.setAttribute("src", "./1553085_blue_letter_o_alphabet_letters_icon.png");
    return imgCircle
  }
}


box1.addEventListener("click", () => {
  box1.appendChild(symbol());
  game.playRound(0,0);
});;
box2.addEventListener("click", () => {
  box2.appendChild(symbol());
  game.playRound(0,1);
});;
box3.addEventListener("click", () => {
  box3.appendChild(symbol());
  game.playRound(0,2);
});;
box4.addEventListener("click", () => {
  box4.appendChild(symbol());
  game.playRound(1,0);
});
box5.addEventListener("click", () => {
  box5.appendChild(symbol());
  game.playRound(1,1);
});
box6.addEventListener("click", () => {
  box6.appendChild(symbol());
  game.playRound(1,2);
});;
box7.addEventListener("click", () => {
  box7.appendChild(symbol());
  game.playRound(2,0);
});;
box8.addEventListener("click", () => {
  box8.appendChild(symbol());
  game.playRound(2,1);
});;
box9.addEventListener("click", () => {
  box9.appendChild(symbol());
  game.playRound(2,2);
});;





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
  return {addSymbol, printBoard, boardGetter};
};

function gameController(
  playerOneName = "Player One",
  playerTwoName = "PlayerTwo"
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
        console.log(`Winner is ${getActivePlayer().name}`);
        return 1;
      } else if(flagO == 3) {
        console.log(`Winner is ${getActivePlayer().name}`);
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
        console.log(`Winner is ${getActivePlayer().name}`);
        return 1;
      } else if(flagO == 3) {
        console.log(`Winner is ${getActivePlayer().name}`);
        return 1;
      }
      flagX = 0;
      flagO = 0
      if((board.boardGetter())[0][0] == "X" && board.boardGetter()[1][1] == "X" && board.boardGetter()[2][2] == "X") {
        console.log(`Winner is ${getActivePlayer().name}`);
        return 1;
      } else if((board.boardGetter())[0][2] == "X" && board.boardGetter()[1][1] == "X" && board.boardGetter()[2][0] == "X") {
        console.log(`Winner is ${getActivePlayer().name}`);
        return 1;
      }
      
      if((board.boardGetter())[0][0] == "O" && board.boardGetter()[1][1] == "O" && board.boardGetter()[2][2] == "O") {
        console.log(`Winner is ${getActivePlayer().name}`);
        return 1;
      } else if((board.boardGetter())[0][2] == "O" && board.boardGetter()[1][1] == "O" && board.boardGetter()[2][0] == "O") {
        console.log(`Winner is ${getActivePlayer().name}`);
        return 1;
      }
      for(j = 0; j < 3; j++) {
        if((board.boardGetter())[i][j] == "X" || (board.boardGetter())[i][j] == "O") {
          drawCount++;
        }
      } 
      if (drawCount == 9) {
        console.log("Draw!")
        return 1;
      }
    }
  }

  const startGame = () => {
    console.log("Welcome To The Classic Game Of Tic - Tac - Toe")
    console.log(board.boardGetter());
    console.log(`${getActivePlayer().name}'s Turn`)
  }

  startGame();

  const playRound = (row,column) => {
    console.log(`Putting ${getActivePlayer().name}'s Symbol...`)
    if(board.addSymbol(row,column, getActivePlayer().symbol) == 1) {
      console.log("Position already has a symbol in it!")
    } else if(board.addSymbol(row,column, getActivePlayer().symbol) == 2) {
      console.log("INVALID POSITION")
    } else{
    board.addSymbol(row,column, getActivePlayer().symbol);
    winConditions();
    switchActivePlayer();
    printNewRound();
    }
    
  }

  return {playRound, getActivePlayer};
}

const game = gameController()