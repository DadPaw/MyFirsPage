const rockElement = document.querySelector("#rock");
const paperElement = document.querySelector("#paper");
const scissorsElement = document.querySelector("#scissors");
const infoElement = document.querySelector("#game-info");
const scoreElement = document.querySelector("#game-score");
const computerOptionsArray = ['rock', 'paper', 'scissors'];

const buttonSignUp = document.querySelector("#button");

let playerPoint = 0;
let computerPoint = 0;

function randomComputerChoice(){
    const randomNumber = Math.floor(Math.random()*computerOptionsArray.length);
    return computerOptionsArray[randomNumber];
}

let playerSelection = "";


rockElement.addEventListener("click", () => { 
    playerSelection = "rock"; 
    let computerSelection = randomComputerChoice();
    compare(playerSelection, computerSelection);
});

paperElement.addEventListener("click", () => { 
    playerSelection = "paper"; 
    let computerSelection = randomComputerChoice();
    compare(playerSelection, computerSelection);
});

scissorsElement.addEventListener("click", () => { 
    playerSelection = "scissors"; 
    let computerSelection = randomComputerChoice();
    compare(playerSelection, computerSelection);
});

function compare(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        infoElement.setAttribute("class","game-tie games")
        infoElement.innerHTML="Tie";
    }
    if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
        )
        {
        playerPoint++
        infoElement.setAttribute("class","game-win games")
        infoElement.innerHTML="You win";
        scoreElement.innerHTML="You " + playerPoint + " - " + computerPoint + " Computer" ;
        }
    if(
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
        )
        {
        computerPoint++
        infoElement.setAttribute("class","game-lost games")
        infoElement.innerHTML="You lose";
        scoreElement.innerHTML="You " + playerPoint + " - " + computerPoint + " Computer" ;
        }
    

}



buttonSignUp.addEventListener("click", dupa);


function dupa(nr1){

    console.log(nr1)
}
