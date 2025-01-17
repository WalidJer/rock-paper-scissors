//node index.js rock     ----this what we are going to choose then the computer will randomly pick a choice and will see who wins
const process = require('process');
const arguments = process.argv.slice(2);
const validOptions = ["rock", "paper", "scissors"];
const userChoice=arguments[0];   // 1st argument after slicing node index.js paper and paper  is the first 
const computerChoice=validOptions[Math.floor(Math.random()*validOptions.length)];



function determineWinner(playerInput, computerInput){
    //rock beat scissors
    //scissors beat paper
    //paper beats rock

    if (playerInput === computerInput){
        return "It is a tie";
    }

    if (playerInput ==="scissors" && computerInput === "paper" ||
        playerInput ==="rock" && computerInput === "scissors"  ||
        playerInput ==="paper" && computerInput === "rock"
        ){

            return "you win!"
    }
    return "Computer wins for this game!"


}

if (!validOptions.includes(userChoice)){
    console.log("Usage: node index.js <rock| paper|scissors> ");
    return;
}
console.log(`You chose ${userChoice}, Computer chose ${computerChoice}`);

console.log(determineWinner(userChoice,computerChoice));
