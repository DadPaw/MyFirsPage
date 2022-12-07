const rockElement = document.querySelector("#rock");
const paperElement = document.querySelector("#paper");
const scissorsElement = document.querySelector("#scissors");
const infoElement = document.querySelector("#game-info");
const scoreElement = document.querySelector("#game-score");
const buttonSignUp = document.querySelector("#button");
const popup = document.querySelector("#popup");
const winner = document.querySelector("#winner");
const btnPlayAgain = document.querySelector("#btnPlayAgain")

const computerOptionsArray = ['rock', 'paper', 'scissors'];

let playerPoint = 0;
let computerPoint = 0;
let round = 1;

function randomComputerChoice(){
    const randomNumber = Math.floor(Math.random()*computerOptionsArray.length);
    return computerOptionsArray[randomNumber];
}

let playerSelection = "";


rockElement.addEventListener("click", () => { 
    playerSelection = "rock"; 
    let computerSelection = randomComputerChoice();
    compare(playerSelection, computerSelection);
    checkWhoWinTo5();
    
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

function checkWhoWinTo5 (){

    if(playerPoint == 5){
        popup.classList.add('active');
        winner.innerHTML = "You win";
     
        
        
    } else if (computerPoint == 5){
        popup.classList.add('active');
        winner.innerHTML = "Computer win"
       
        
    }
    
   
}

btnPlayAgain.addEventListener("click",()=>{
    playerPoint = 0;
    computerPoint = 0;
   location.reload();
})
