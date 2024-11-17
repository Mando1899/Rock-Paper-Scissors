const choices = document.querySelectorAll("button");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];    
}
function playRound(humanChoice, computerChoice) {
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
    
}
choices.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.innerText.toLowerCase();
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