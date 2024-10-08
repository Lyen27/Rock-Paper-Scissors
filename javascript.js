"use strict"

const buttons = document.querySelectorAll('button');
const messages = document.querySelector('.message');
const humanPoints = document.querySelector('.human');
const computerPoints = document.querySelector('.computer');
let computerScore = 0;
let humanScore = 0;

buttons.forEach(btn => btn.addEventListener('click', play));

function play(e) {
    
    let computerChoice = getComputerChoice();
    let humanChoice = e.target.textContent.toLowerCase();

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                messages.textContent = "Result:it's a tie!"
            } else if (computerChoice === "paper"){
                messages.textContent = "Result:you lost";
                computerScore += 1;
                computerPoints.textContent = `Computer:${computerScore}`;
            } else if (computerChoice === "scissors") {
                messages.textContent = "Result:you won !";
                humanScore += 1;
                humanPoints.textContent = `Human:${humanScore}`
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                messages.textContent = "Result:it's a tie!"
            } else if (computerChoice === "scissors"){
                messages.textContent = "Result:you lost";
                computerScore += 1;
                computerPoints.textContent = `Computer:${computerScore}`;
            } else if (computerChoice === "rock") {
                messages.textContent = "Result:you won !";
                humanScore += 1;
                humanPoints.textContent = `Human:${humanScore}`
            }
            break;
        case "scissors":
            if (computerChoice === "scissors") {
                messages.textContent = "Result:it's a tie!"
            } else if (computerChoice === "rock"){
                messages.textContent = "Result:you lost";
                computerScore += 1;
                computerPoints.textContent = `Computer:${computerScore}`;
            } else if (computerChoice === "paper") {
                messages.textContent = "Result:you won !";
                humanScore += 1;
                humanPoints.textContent = `Human:${humanScore}`
            }
            break;
    }

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




