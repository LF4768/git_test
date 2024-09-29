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
    if( row > 2 || column > 2) {
      return "1";
    } else {
      board[row][column] = value;
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

  const playRound = (row,column) => {
    let flagX = 0;
    let flagO = 0;
    let drawCount = 0;
    console.log(`Putting ${getActivePlayer().name}'s Symbol...`)
    if(board.addSymbol(row,column, getActivePlayer().symbol) == 1) {
      console.log("INVALID POSITION")
    } else{
    board.addSymbol(row,column, getActivePlayer().symbol)
    
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
      } else if(flagO == 3) {
        console.log(`Winner is ${getActivePlayer().name}`);
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
      } else if(flagO == 3) {
        console.log(`Winner is ${getActivePlayer().name}`);
      }
      flagX = 0;
      flagO = 0
      if((board.boardGetter())[0][0] == "X" && board.boardGetter()[1][1] == "X" && board.boardGetter()[2][2] == "X") {
        console.log(`Winner is ${getActivePlayer().name}`);
      } else if((board.boardGetter())[0][2] == "X" && board.boardGetter()[1][1] == "X" && board.boardGetter()[2][0] == "X") {
        console.log(`Winner is ${getActivePlayer().name}`);
      }
      
      if((board.boardGetter())[0][0] == "O" && board.boardGetter()[1][1] == "O" && board.boardGetter()[2][2] == "O") {
        console.log(`Winner is ${getActivePlayer().name}`);
      } else if((board.boardGetter())[0][2] == "O" && board.boardGetter()[1][1] == "O" && board.boardGetter()[2][0] == "O") {
        console.log(`Winner is ${getActivePlayer().name}`);
      }
      for(j = 0; j < 3; j++) {
        if((board.boardGetter())[i][j] == "X" || (board.boardGetter())[i][j] == "O") {
          drawCount++;
        }
    } 
    if (drawCount == 9) {
      console.log("Draw!")
    }
  }

    switchActivePlayer();
    printNewRound();
    }
  }

  return {playRound}
}

const game = gameController()