// Function to get the AI's choice
function getAIChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, aiChoice) {
    if (userChoice === aiChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && aiChoice === "scissors") ||
        (userChoice === "paper" && aiChoice === "rock") ||
        (userChoice === "scissors" && aiChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "AI wins!";
    }
}

// Function to handle user choice and display result
function playGame(userChoice) {
    const aiChoice = getAIChoice();
    const result = determineWinner(userChoice, aiChoice);
    document.getElementById("result").innerText = `You chose ${userChoice}, the AI chose ${aiChoice}. ${result}`;
}

// Event listeners for user choice buttons
document.getElementById("rock").addEventListener("click", function() {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("scissors");
});
