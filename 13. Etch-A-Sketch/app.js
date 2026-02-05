
// const board = document.getElementById("board")

// const gridSize = 16;

// function createGrid(){
//     board.innerHTML = "";

//     for (let i = 0; i < gridSize * gridSize; i++){

//         const square = document.createElement("div");
//         square.classList.add("square");

//         square.addEventListener("mouseover", () => {
//             square.style.backgroundColor = "black";
//         });

//         board.appendChild(square);
//     }
// }

// createGrid();

// function resetBoard(){
//     createGrid();
// }


document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const gridSize = 16;

  function createGrid() {
    board.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });

      board.appendChild(square);
    }
  }

  createGrid();

  window.resetBoard = function () {
    createGrid();
  };
});
