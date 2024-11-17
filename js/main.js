const choices = document.querySelectorAll("button");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];    
}



choices.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.innerText.toLowerCase();
        let computerChoice = getComputerChoice();
        console.log(humanChoice);
        console.log(computerChoice);
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

    });
});

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
// function playRound(humanChoice, computerChoice) {
//     console.log("Computer throws: " + computerChoice);
//     console.log("Player throws: " + humanChoice);

//     if (humanChoice === computerChoice) {
//         alert(`Computer chose ${computerChoice}. It's a tie!`);
//     } else if (computerChoice === "rock") {
//         if (humanChoice === "scissors") {
//             computerScore++;
//             alert(`Computer chose ${computerChoice}. You lose.`)
//         } else if (humanChoice === "paper") {
//             humanScore++;
//             alert(`Computer chose ${computerChoice}. You win.`)
//         }
//     } else if (computerChoice === "paper") {
//         if (humanChoice === "rock") {
//             computerScore++;
//             alert(`Computer chose ${computerChoice}. You lose.`)
//         } else if (humanChoice === "paper") {
//             humanScore++;
//             alert(`Computer chose ${computerChoice}. You win.`)
//         }
//     } else if (computerChoice === "scissors") {
//         if (humanChoice === "paper") {
//             computerScore++;
//             alert(`Computer chose ${computerChoice}. You lose.`)
//         } else if (humanChoice === "rock") {
//             humanScore++;
//             alert(`Computer chose ${computerChoice}. You win.`)
//         }
//     }

//     console.log("Player: " + humanScore + " Computer: " + computerScore);
// }
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