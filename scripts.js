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

humanScore = 0;
computerScore = 0;
let match = 1;

function playGame(action){

    function playRound(humanChoice, computerChoice) {
        yourPlay.textContent = "Your play: " + humanChoice + "\r\n";
        computerPlay.textContent = "Computer's play: " + computerChoice + "\r\n";
        if (humanChoice == "rock" && computerChoice == "scissors"){
            result_box.textContent = "A point for player! rock beat scissors";
            humanScore += 1;
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            result_box.textContent = "A point for player! paper beats rock";
            humanScore += 1;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            result_box.textContent = "A point for player! scissors beat paper";
            humanScore += 1;
        }
        else if (humanChoice == "rock" && computerChoice == "paper"){
            result_box.textContent = "A point for computer! paper beats rock";
            computerScore += 1;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors"){
            result_box.textContent = "A point for computer! scissors beat paper";
            computerScore += 1;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock"){
            result_box.textContent = "A point for computer! rock beat scissors";
            computerScore += 1;
        }
        else {
            result_box.textContent = "No point for both!!";
        }
    }

    // for(i = 0; i<5; i++){
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

    let humanSelection = action;
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore == 5 || computerScore == 5){
        result_heading.textContent = "Match " + match + " (best of 5 round) over! "
        if (humanScore > computerScore){
            result.textContent = "Congratulations! You Win by " + (humanScore - computerScore) + "points.";
        }
        else if (humanScore < computerScore){
            result.textContent = "Hah! You Lose by " + (computerScore - humanScore) + " points.";
        }
        else{
            result.textContent = "Its a Draw!";
        }
        humanPoints.textContent = "Your Score: " + humanScore;
        computerPoints.textContent = "Computer's Score: " + computerScore;
        humanScore = 0;
        computerScore = 0;
        match = match + 1;
    }
    else{
        humanPoints.textContent = "Your Score: " + humanScore;
        computerPoints.textContent = "Computer's Score: " + computerScore;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const container = document.createElement("div");
const yourPlay = document.createElement("div");
const computerPlay = document.createElement("div");
container.appendChild(yourPlay);
container.appendChild(computerPlay);
const result_box = document.createElement("div");
container.appendChild(result_box);

const humanPoints = document.createElement("div");
const computerPoints = document.createElement("div");
container.appendChild(humanPoints);
container.appendChild(computerPoints);

const result_heading = document.createElement("div");
container.appendChild(result_heading);

const result = document.createElement("div");
container.appendChild(result);

document.body.appendChild(container);

rock.addEventListener("click", () => {
    action = "rock";
    playGame(action);
});

paper.addEventListener("click", () => {
    action = "paper";
    playGame(action);
});

scissors.addEventListener("click", () => {
    action = "scissors";
    playGame(action);
});

