let humanScore = 0;
let computerScore = 0;



const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn")
const scissors = document.querySelector("#scissorsBtn") 

rock.addEventListener('click', function (e) {
    let computerSelection = getComputerChoice().toUpperCase()
    let humanSelection = "ROCK"
    playRound(humanSelection, computerSelection);
});

paper.addEventListener('click', function (e) {
    let computerSelection = getComputerChoice().toUpperCase()
    let humanSelection = "PAPER"
    playRound(humanSelection, computerSelection);
});

scissors.addEventListener('click', function (e) {
    let computerSelection = getComputerChoice().toUpperCase()
    let humanSelection = "SCISSORS"
    playRound(humanSelection, computerSelection);
});




function game() {

    for (let i = 0; i < 5; i++) {

        let computerSelection = getComputerChoice().toUpperCase()
        let playerSelection = prompt("Rock, Paper Scissors: SHOOT!").toUpperCase()

        let winner = playRound(playerSelection, computerSelection)

        if (winner === 1) {
            i--;
        } else if (winner === 2) {
            computerScore++;
        } else if (winner === 3) {
            humanScore++;
        }

    }

    if (humanScore > computerScore) {
        alert(`You Won ${humanScore} to ${computerScore}! Congrats!`)
    } else {
        alert(`You LOST ${computerScore} to ${humanScore}! slickhead!`)
    }
}






function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.localeCompare(computerSelection) === 0) {
        console.log(`${computerSelection} ties ${playerSelection}`);
        return 1
    }

    if (playerSelection ==="ROCK") {
        if (computerSelection.localeCompare("PAPER") === 0) {
            console.log("YOU LOSE! PAPER BEATS ROCK")
            return 2
        } else {
            console.log("YOU WIN! ROCK BEATS SCISSORS")
            return 3
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection.localeCompare("SCISSORS") === 0) {
            console.log("YOU LOSE!! SCISSORS BEATS PAPER")
            return 2
        } else {
            console.log("YOU WIN! PAPER BEATS ROCK!")
            return 3
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection.localeCompare("ROCK") === 0) {
            console.log("YOU LOSE!! ROCK BEATS SCISSORS")
            return 2
        } else {
            console.log("YOU WIN!! SCISSORS BEATS PAPER!!")
            return 3
        }
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