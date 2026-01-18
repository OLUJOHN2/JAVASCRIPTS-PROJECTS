 const choice = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;

function playGame(userChoice){
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];

    let result = "";

    if (userChoice === computerChoice){
        result = "It's a draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ){
        result = "You win!";
        userScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    document.getElementById("userChoice").textContent = 
    "You chose: " + userChoice;

    document.getElementById("computerChoice").textContent =
    "Computer chose: " + computerChoice;

    document.getElementById("result").textContent = 
    result + " | Score: You " + userScore + " - " + computerScore + " Computer";
}


function resetGame() {
  userScore = 0;
  computerScore = 0;

  document.getElementById("userChoice").textContent = "";
  document.getElementById("computerChoice").textContent = "";
  document.getElementById("result").textContent = "Game reset. Start again.";
}
