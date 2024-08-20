"use strict"
let humanScore = 0;
let computerScore = 0;
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

function playRound() {
    let humanChoice = getHumanChoice(); 
    let computerChoice = getComputerChoice();
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

function play() {
    for (let i=0;i<=5;i++) {
        playRound();
        if (i === 5 && humanScore>computerScore) {
            console.log("Congratulations!, you won the game")
        } else if (i === 5 && humanScore<computerScore) {
            console.log("You lost the game, good luck next time")
        } else if (i === 5 && humanScore===computerScore){
            console.log("It's a tie!")
        } else if(humanScore===0 && computerScore===0) {
            return;
        }
    }
}

play();
