let humanScore = 0;
let computerScore = 0;



const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");

const cscore = document.querySelector("#computerscore")
const hscore = document.querySelector("#humanscore")

const msg = document.querySelector("#message")




rock.addEventListener('click', function (e) {
    if (computerScore == 5 || computerScore == 5) {
        return 0;
    }
    let computerSelection = getComputerChoice().toUpperCase()
    let humanSelection = "ROCK"
    playRound(humanSelection, computerSelection);
});

paper.addEventListener('click', function (e) {
    if (computerScore == 5 || computerScore ==5) {
        return 0;
    }
    let computerSelection = getComputerChoice().toUpperCase()
    let humanSelection = "PAPER"
    playRound(humanSelection, computerSelection);
});

scissors.addEventListener('click', function (e) {
    if (computerScore == 5 || computerScore == 5) {
        return 0;
    }
    let computerSelection = getComputerChoice().toUpperCase()
    let humanSelection = "SCISSORS"
    playRound(humanSelection, computerSelection);
});




// function game() {

//     for (let i = 0; i < 5; i++) {

//         let computerSelection = getComputerChoice().toUpperCase()
//         let playerSelection = prompt("Rock, Paper Scissors: SHOOT!").toUpperCase()

//         let winner = playRound(playerSelection, computerSelection)

//         if (winner === 1) {
//             i--;
//         } else if (winner === 2) {
//             computerScore++;
//         } else if (winner === 3) {
//             humanScore++;
//         }
//     }

//     if (humanScore > computerScore) {
//         alert(`You Won ${humanScore} to ${computerScore}! Congrats!`)
//     } else {
//         alert(`You LOST ${computerScore} to ${humanScore}! slickhead!`)
//     }
// }






function playRound(playerSelection, computerSelection) {

    if (playerSelection.localeCompare(computerSelection) === 0) {
        msg.innerText = `${computerSelection} ties ${playerSelection}`;
        return 0;
    }

    if (playerSelection ==="ROCK") {
        if (computerSelection.localeCompare("PAPER") === 0) {
            msg.innerText = "YOU LOSE! PAPER BEATS ROCK"
            computerScore++;
            cscore.innerText = computerScore
        } else {
            msg.innerText = "YOU WIN! ROCK BEATS SCISSORS"
            humanScore++;
            hscore.innerText = humanScore
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection.localeCompare("SCISSORS") === 0) {
            msg.innerText = "YOU LOSE! SCISSORS BEATS PAPER"
            computerScore++;
            cscore.innerText = computerScore
        } else {
            msg.innerText = "YOU WIN! PAPER BEATS ROCK"
            humanScore++;
            hscore.innerText = humanScore
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection.localeCompare("ROCK") === 0) {
            msg.innerText = "YOU LOSE! ROCK BEATS SCISSORS"
            computerScore++;
            cscore.innerText = computerScore
        } else {
            msg.innerText = "YOU WIN! SCISSORS BEATS PAPER"
            humanScore++;
            hscore.innerText = humanScore
        }
    } 

    if (humanScore == 5) {
        msg.innerText = "congrats human, you win"
        setTimeout(() => {
            humanScore = 0;
            computerScore = 0;
            hscore.innerText = humanScore
            cscore.innerText = computerScore
            msg.innerText = ""
        },3000)

    } else if (computerScore == 5) {
        msg.innerText = "sorry human, you lose"
        setTimeout(() => {
            humanScore = 0;
            computerScore = 0;
            hscore.innerText = humanScore
            cscore.innerText = computerScore
            msg.innerText = ""
        },3000)
    }
}


function getComputerChoice() {

    let rps = Math.floor(Math.random() * 3 + 1)
    let challenge;

    if (rps === 1) {
        challenge = "rock";
    } else if (rps === 2) {
        challenge = "paper";
    } else {
        challenge = "scissors";
    }

    return challenge;
}