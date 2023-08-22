const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerWeapon = document.querySelector("#playerWeapon")
const computerWeapon = document.querySelector("#computerWeapon")
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const roundWinner = document.querySelector("#roundWinner")
const result = document.querySelector("#result");
const playerDiv = document.querySelector("#playerChoice");
const img = document.createElement("img");
playerDiv.appendChild(img);   
const computerDiv = document.querySelector("#computerChoice");
const computerImg = document.createElement("img");
computerDiv.appendChild(computerImg); 

let choice = "";
let computerSelection = "";
function getComputerChoice () {
     choice = Math.floor(Math.random() * 3);
    if (choice == 1) {
        computerSelection = "Rock";
    } else if (choice == 2) {
        computerSelection = "Paper";

    } else {
        computerSelection = "Scissors";
    }
    computerWeapon.textContent = "Computer Chose: " + computerSelection 
    if (computerSelection == "Rock") {    
        computerImg.setAttribute("src", "./images/rock.jpg")
        computerImg.setAttribute("alt", " image of  rock")
  
    } else if (computerSelection == "Paper") {
        computerImg.setAttribute("src", "./images/paper.jpg")
        computerImg.setAttribute("alt", " image of paper") 
    } else {
        computerImg.setAttribute("src", "./images/scissors.jpg")
        computerImg.setAttribute("alt", " image of scissors")
    }
    return computerSelection;
}

let decision = "";
let playerPoints = 0;
let computerPoints = 0;


function playRound(playerSelection  , computerSelection) {
    if (playerSelection === "Rock" && computerSelection == "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper" ) {
        decision = "You Win";
        roundWinner.textContent = "The player wins this round!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Paper") {
        decision = "You Lose";
        roundWinner.textContent = "The computer wins this round!";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors" || playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Paper") {
        decision = "Draw";
        roundWinner.textContent = "It's a draw!";
    }
    console.log(decision);

        if (decision == "You Win"){
            playerPoints = playerPoints + 1;
        } else if (decision == "You Lose") {
            computerPoints = computerPoints + 1
        } else if (decision == "Draw") {
            playerPoints += 0;
            computerPoints += 0;  
        }
        if (playerPoints == 5) {
           result.textContent = "The Winner is The Player"

        }else if (computerPoints == 5) {
            result.textContent = "The Winner is The Computer"
           
        }
     playerScore.textContent = "Player Score: " + playerPoints;
     computerScore.textContent = "Computer Score: " + computerPoints
}


let playerChoice = '';

function game() {
rock.addEventListener("click", () => {
    if (playerChoice == "") {
        playerChoice = "Rock";
        playRound(playerChoice, getComputerChoice());
        playerWeapon.textContent = "You Chose: Rock"  
        img.setAttribute("src", "./images/rock.jpg")
        img.setAttribute("alt", " image of  rock")

        playerChoice = '';
    }
});
paper.addEventListener("click", () => {
    if (playerChoice == "") {
        playerChoice = "Paper";
        playRound(playerChoice, getComputerChoice()); 
        playerWeapon.textContent = "You Chose: Paper" 
        img.setAttribute("src", "./images/paper.jpg")
        img.setAttribute("alt", " image of  paper")
        playerChoice = "";    
    }
});
scissors.addEventListener("click", () => {
    if (playerChoice == "") {
        playerChoice = "Scissors";
        playRound(playerChoice, getComputerChoice()); 
        playerWeapon.textContent = "You Chose: Scissors" 
        img.setAttribute("src", "./images/scissors.jpg")
        img.setAttribute("alt", " image of  scissors")   
        playerChoice = "";
    }
});
};

game();


