//1. Create variables to keep score of human and computer. Must be global as a function is used for updating the score.

let humanScore = 0;
let computerScore = 0;

//2. Create a variable computerChoice that gets computer choice

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1; // Generate a number between 1 and 3
    
    switch(computerChoice){
        case 1:
            return "Rock";
            break;
        case 2: 
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

//3. Get input from Human's choice and put in variable humanChoice

function getHumanChoice(){
    let humanChoice = prompt("Choose your weapon: Rock, Paper or Scissors:");
    return humanChoice;
}

// Not in original plan -> function for updating the score
function updateScore(result){
    
    if (result === "Human"){
        console.log("Human Wins!");
        humanScore++;
    }
    else if (result === "Computer"){
        console.log("Computer Wins!");
        computerScore++;
    }
    else{
        console.log("It's a draw!");
    }
    
    
}

// Not in original plan -> function for showing the score

function showScore(){
    console.log(`The score: \n
        Human: ${humanScore} \n
        Computer: ${computerScore}`);
}


//5. Play a round where you compare the humanChoice with computerChoice

function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase()==="rock"){
        if (computerChoice==="Paper"){
            return "Computer";
        }
        else if (computerChoice==="Scissors"){
            return "Human";
        }
        else{
            return "Draw";
        }
    }
    else if (humanChoice.toLowerCase()==="paper"){
        if (computerChoice==="Scissors"){
            return "Computer";
        }
        else if (computerChoice==="Rock"){
            return "Human";
        }
        else {
            return "Draw";
        }
    }
    else if (humanChoice==="scissors"){
        if (computerChoice==="Rock"){
            return "Computer";
        }
        else if (computerChoice==="Paper"){
            return "Human";
        }
        else {
            return "Draw";
        }
    }
}
//6. Keep playing rounds until someone has reach a score of 3

function playGame(){

    for (let i = 0; i < 5 ; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        updateScore(result);
        showScore();
    }
}

// main game
playGame();

