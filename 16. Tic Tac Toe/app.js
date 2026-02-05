// GAMEBOARD: stores and controls the board
const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const placeMark = (index, mark) => {
    if (board[index] !== "") return false;
    board[index] = mark;
    return true;
  };

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return {
    getBoard,
    placeMark,
    resetBoard
  };
})();


// PLAYER: creates players
const Player = (name, mark) => {
  return { name, mark };
};


// GAME CONTROLLER: controls rules and flow
const GameController = (function () {
  const playerOne = Player("Player X", "X");
  const playerTwo = Player("Player O", "O");

  let currentPlayer = playerOne;
  let gameOver = false;

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const switchPlayer = () => {
    currentPlayer =
      currentPlayer === playerOne ? playerTwo : playerOne;
  };

  const checkWin = () => {
    const board = Gameboard.getBoard();

    return winningCombinations.some(combo =>
      combo.every(index => board[index] === currentPlayer.mark)
    );
  };

  const checkTie = () => {
    return Gameboard.getBoard().every(cell => cell !== "");
  };

  const playTurn = (index) => {
    if (gameOver) return;

    const placed = Gameboard.placeMark(index, currentPlayer.mark);
    if (!placed) return;

    if (checkWin()) {
      DisplayController.showMessage(`${currentPlayer.name} wins!`);
      gameOver = true;
      return;
    }

    if (checkTie()) {
      DisplayController.showMessage("It's a draw!");
      gameOver = true;
      return;
    }

    switchPlayer();
    DisplayController.showMessage(`${currentPlayer.name}'s turn`);
  };

  const resetGame = () => {
    Gameboard.resetBoard();
    currentPlayer = playerOne;
    gameOver = false;
    DisplayController.showMessage("Player X's turn");
  };

  return {
    playTurn,
    resetGame
  };
})();


// DISPLAY CONTROLLER: handles the screen
const DisplayController = (function () {
  const cells = document.querySelectorAll(".cell");
  const statusText = document.getElementById("status");
  const resetButton = document.getElementById("reset");

  const renderBoard = () => {
    const board = Gameboard.getBoard();
    cells.forEach((cell, index) => {
      cell.textContent = board[index];
    });
  };

  const showMessage = (message) => {
    statusText.textContent = message;
  };

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      GameController.playTurn(index);
      renderBoard();
    });
  });

  resetButton.addEventListener("click", () => {
    GameController.resetGame();
    renderBoard();
  });

  showMessage("Player X's turn");

  return {
    renderBoard,
    showMessage
  };
})();
