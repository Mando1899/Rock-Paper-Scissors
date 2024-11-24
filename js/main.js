const choices = document.querySelectorAll(".choice");
let humanScore = 0;
let computerScore = 0;
const humanScoreTag = document.getElementById("humanScore");
const computerScoreTag = document.getElementById("computerScore");
const results = document.getElementById("result");
let roundEnd = false;
const endGameSection = document.querySelector("#end-game");
const playAgainBtn = document.getElementById("play-again");

playAgainBtn.addEventListener("click", () =>{
    endGameSection.style.display = "none";
    humanScore = 0;
    computerScore = 0;
    results.innerText = "";
    humanScoreTag.innerText = `Human score: ${humanScore}`;
    computerScoreTag.innerText = `Computer score: ${computerScore}`;
});


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    
    let randomNum = Math.floor(Math.random() * 3);
    document.getElementById("computerChoice").innerText = `Computer choice: ${choices[randomNum]}`;
    return choices[randomNum];    
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        results.innerText = `Computer chose ${computerChoice}. It's a tie!`;
    } else if (computerChoice === "rock") {
        if (humanChoice === "scissors") {
            computerScore++;
            results.innerText = `Computer chose ${computerChoice}. You lose this round.`;
        } else if (humanChoice === "paper") {
            humanScore++;
            results.innerText = `Computer chose ${computerChoice}. You win this round.`;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            computerScore++;
            results.innerText = `Computer chose ${computerChoice}. You lose this round.`;
        } else if (humanChoice === "scissors") {
            humanScore++;
            results.innerText = `Computer chose ${computerChoice}. You win this round.`;
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
            computerScore++;
            results.innerText = `Computer chose ${computerChoice}. You lose this round.`;
        } else if (humanChoice === "rock") {
            humanScore++;
            results.innerText = `Computer chose ${computerChoice}. You win this round.`;
        }
    }
    humanScoreTag.innerText = `Human score: ${humanScore}`;
    computerScoreTag.innerText = `Computer score: ${computerScore}`;
}

function endGame() {
    endGameSection.style.display = "inline";
    const endGameText = endGameSection.firstElementChild;
    if (humanScore === 3) {
        endGameText.innerText = "You won! Congratulations.";
    } else if (computerScore === 3) {
        endGameText.innerText = "You lose! Better luck next time.";
    }
    roundEnd = true;
}

function playGame(humanChoice, computerChoice) {
    playRound(humanChoice, computerChoice);
    if (humanScore === 3 || computerScore === 3) {
        endGame();
    }
}

choices.forEach((button) => {
    button.addEventListener("click", () => {
        if (!roundEnd) {
            let humanChoice = button.innerText.toLowerCase();
            document.getElementById("humanChoice").innerText = `Human choice: ${humanChoice}`
            let computerChoice = getComputerChoice();
            playGame(humanChoice, computerChoice);
        }
    });
});


