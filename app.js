let humanScore = 0;
let computerScore = 0;


game()

alert("good game sir!");


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
        alert(`${computerSelection} ties ${playerSelection}`);
        return 1
    }

    if (playerSelection ==="ROCK") {
        if (computerSelection.localeCompare("PAPER") === 0) {
            alert("YOU LOSE! PAPER BEATS ROCK")
            return 2
        } else {
            alert("YOU WIN! ROCK BEATS SCISSORS")
            return 3
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection.localeCompare("SCISSORS") === 0) {
            alert("YOU LOSE!! SCISSORS BEATS PAPER")
            return 2
        } else {
            alert("YOU WIN! PAPER BEATS ROCK!")
            return 3
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection.localeCompare("ROCK") === 0) {
            alert("YOU LOSE!! ROCK BEATS SCISSORS")
            return 2
        } else {
            alert("YOU WIN!! SCISSORS BEATS PAPER!!")
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