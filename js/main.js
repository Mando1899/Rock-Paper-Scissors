const choices = document.querySelectorAll("button");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    
    let randomNum = Math.floor(Math.random() * 3);
    document.getElementById("computerChoice").innerText = `Computer choice: ${choices[randomNum]}`;
    return choices[randomNum];    
}
function playRound(humanChoice, computerChoice) {
    const results = document.getElementById("results")
    if (humanChoice === computerChoice) {
        results.innerText = `Computer chose ${computerChoice}. It's a tie!`;
    } else if (computerChoice === "rock") {
        if (humanChoice === "scissors") {
            computerScore++;
            results.innerText = `Computer chose ${computerChoice}. You lose.`;
        } else if (humanChoice === "paper") {
            humanScore++;
            results.innerText = `Computer chose ${computerChoice}. You win.`;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            computerScore++;
            results.innerText = `Computer chose ${computerChoice}. You lose.`;
        } else if (humanChoice === "scissors") {
            humanScore++;
            results.innerText = `Computer chose ${computerChoice}. You win.`;
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
            computerScore++;
            results.innerText = `Computer chose ${computerChoice}. You lose.`;
        } else if (humanChoice === "rock") {
            humanScore++;
            results.innerText = `Computer chose ${computerChoice}. You win.`;
        }
    }
}


choices.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.innerText.toLowerCase();
        document.getElementById("humanChoice").innerText = `Human Choice: ${humanChoice}`
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

    });
});


// function playGame() {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection)
    

//     if (humanScore == 3) {
//         alert("You win! 3 to 2.")
//     } else if (computerScore == 3) {
//         alert("Computer wins! 3 to 2.")
//     }
// }

// console.log("Can you beat me?");
// playGame();