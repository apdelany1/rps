

const computerSelection = getComputerChoice().toUpperCase()
const playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase()

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return alert(`${computerSelection} ties ${playerSelection}`);
    }

    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            return alert("YOU LOSE! PAPER BEATS ROCK")
        } else {
            return alert("YOU WIN! ROCK BEATS SCISSORS")
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            return alert("YOU LOSE!! SCISSORS BEATS PAPER")
        } else {
            return alert("YOU WIN! PAPER BEATS ROCK!")
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            return alert("YOU LOSE!! ROCK BEATS SCISSORS")
        } else {
            return alert("YOU WIN!! SCISSORS BEATS PAPER!!")
        }
    } 
}


function getComputerChoice () {

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
