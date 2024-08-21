"use strict"

function getHumanChoice() {
    return prompt("Choose between rock paper or scissors").toLowerCase();
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function play() {
    let humanChoice;
    let computerChoice;
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        humanChoice = getHumanChoice(); 
        computerChoice = getComputerChoice();
    if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        console.log("you won!, scissors cut paper");
        console.log(`Computer:${computerScore} You: ${humanScore}`)
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        console.log("you lost!, the paper wraps the rock")
        console.log(`Computer:${computerScore} You: ${humanScore}`)
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        console.log("you won!, the rock breaks the scissors")
        console.log(`Computer:${computerScore} You: ${humanScore}`)
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        console.log("you lost!, scissors cut paper")
        console.log(`Computer:${computerScore} You: ${humanScore}`)
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        console.log("you won!, the paper wraps the rock")
        console.log(`Computer:${computerScore} You: ${humanScore}`)
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        console.log("you lost!, the rock breaks the scissors")
        console.log(`Computer:${computerScore} You: ${humanScore}`)
    } 
}

    for (let i=1;i<=5;i++) {
        playRound();
        while (humanChoice === "" || 
            humanChoice === null || 
            (humanChoice !== "rock" && 
            humanChoice !== "paper" && 
            humanChoice !== "scissors")) {
              alert("That's an invalid choice, try again");
              playRound();
            }
    }
    
    if (humanScore>computerScore) {
        console.log("Congratulations!, you won the game")
    } else if (humanScore<computerScore) {
        console.log("You lost the game, good luck next time")
    } else if (humanScore===computerScore){
        console.log("It's a tie!")
    } 
}

play();
