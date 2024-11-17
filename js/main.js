let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];    
}

function getHumanChoice() {
    while (true) {
        let handPlayed = prompt("What are you throwing? ", "").toLowerCase();

        if (handPlayed == "paper" || handPlayed == "rock" || handPlayed == "scissors" ) {
            return handPlayed;
        } else {
            alert("Invalid hand thrown: must be either rock, paper, or scissors only.");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    console.log("Computer throws: " + computerChoice);
    console.log("Player throws: " + humanChoice);

    if (humanChoice === computerChoice) {
        alert(`Computer chose ${computerChoice}. It's a tie!`);
    } else if (computerChoice === "rock") {
        if (humanChoice === "scissors") {
            computerScore++;
            alert(`Computer chose ${computerChoice}. You lose.`)
        } else if (humanChoice === "paper") {
            humanScore++;
            alert(`Computer chose ${computerChoice}. You win.`)
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            computerScore++;
            alert(`Computer chose ${computerChoice}. You lose.`)
        } else if (humanChoice === "paper") {
            humanScore++;
            alert(`Computer chose ${computerChoice}. You win.`)
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
            computerScore++;
            alert(`Computer chose ${computerChoice}. You lose.`)
        } else if (humanChoice === "rock") {
            humanScore++;
            alert(`Computer chose ${computerChoice}. You win.`)
        }
    }

    console.log("Player: " + humanScore + " Computer: " + computerScore);
}

/* This game is setup to be a best of 5;
    when ties are determined, they do not count to
    the overall number of rounds. */
function playGame() {
    while (humanScore < 3 && computerScore < 3) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
    }

    if (humanScore == 3) {
        alert("You win! 3 to 2.")
    } else if (computerScore == 3) {
        alert("Computer wins! 3 to 2.")
    }
}

console.log("Can you beat me?");
playGame();