function getComputerChoice() {
    action = Math.floor(Math.random() * 3);
    if (action == 0){
        return "rock";
    }
    else if (action == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let action = prompt("Input your action? (r/p/s)");
    if (action == "r"){
        return "rock";
    }
    else if (action == "p"){
        return "paper";
    }
    else if (action == "s"){
        return "scissors";
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log("Your play: " + humanChoice);
        console.log("Computer's play: " + computerChoice);
        if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You Win! rock beat scissors");
            humanScore += 1;
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("You Win! paper beats rock");
            humanScore += 1;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You Win! scissors beat paper");
            humanScore += 1;
        }
        else if (humanChoice == "rock" && computerChoice == "paper"){
            console.log("You Lose! paper beats rock");
            computerScore += 1;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You Lose! scissors beat paper");
            computerScore += 1;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You Lose! rock beat scissors");
            computerScore += 1;
        }
        else {
            console.log("Its a Draw!");
        }
    }

    for(i = 0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Your Score: " + humanScore);
    console.log("Computer's Score: " + computerScore);

    if (humanScore > computerScore){
        console.log("Congratulations! You Win by " + (humanScore - computerScore) + "points.");
    }
    else if (humanScore < computerScore){
        console.log("Hah! You Lose by " + (computerScore - humanScore) + " points.");
    }
    else{
        console.log("Its a Draw!");
    }
}