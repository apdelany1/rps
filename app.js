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


const computerSelection = getComputerChoice()
const playerSelection = prompt("Rock, Paper or Scissors?")

console.log(computerSelection.toUpperCase());
console.log(playerSelection.toUpperCase());
