// generating a computer choice

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);

    switch (randomValue) {
        case 0: return "rock";
            break;
        case 1: return "paper";
            break;
        case 2: return "scissor";
            break;
    }
}

// console.log(getComputerChoice()); 

// Getting the human choice 

function getHumanChoice() {
    let humanvalue = prompt("what do you want to choose? ");

    // humanvalue = humanvalue.toLowerCase();

    return humanvalue;
}

// console.log(getHumanChoice()); 



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        function playRound(humanChoice, computerchoice) {

            humanChoice = humanChoice.toLowerCase();

            if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor") {

                switch (humanChoice) {
                    case "rock": if (computerchoice === "rock") {
                        console.log("It's an draw!!");
                    } else if (computerchoice === "paper") {
                        console.log("You lost Paper beats Rock");
                        computerScore++;
                    } else {
                        console.log("You won!!");
                        humanScore++;
                    };
                        break;
                    case "paper": if (computerchoice === "paper") {
                        console.log("It's an draw!!");
                    } else if (computerchoice === "scissor") {
                        console.log("You lost Scissor beats Paper");
                        computerScore++;
                    } else {
                        console.log("You won!!");
                        humanScore++;
                    };
                        break;

                    default: if (computerchoice === "scissor") {
                        console.log("It's an draw!!");
                    } else if (computerchoice === "rock") {
                        console.log("You lost Rock beats Scissor");
                        computerScore++;
                    } else {
                        console.log("You won!!");
                        humanScore++;
                    };
                        break;
                }
            }
            else {
                alert("Invalid entry!! Try again.")
            }


        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();


        playRound(humanSelection, computerSelection)
    }




    console.log(humanScore)
    console.log(computerScore)

    if (humanScore > computerScore) {
        console.log("You won the game!! Congrats!!")
    } else {
        console.log("Oops you lost. Better luck next time!");
    }
}

playGame()


