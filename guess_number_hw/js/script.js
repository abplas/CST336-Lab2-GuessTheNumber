document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

let randomNumber;
let attempts = 0;
let win = 0;
let loss = 0;

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;
   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";
   document.querySelector("#guessBtn").style.display = "inline";
   //adding focus to textbox
   document.querySelector("#playerGuess").focus();

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus();
   playerGuess.value = "";

   let feedback = document.querySelector("#feedback");
   feedback.textContent = "";

   document.querySelector("#guesses").textContent = "";
   document.querySelector("#attemptsLeft").textContent = "Attempts left: 7";
   document.querySelector("#wl").textContent = `WON: ${win} | LOST: ${loss}`;
}

function checkGuess()
{
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player Guess: " + guess);
    if(guess < 1 || guess > 99)
    {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    let remainingAttempts = 7 - attempts;
    document.querySelector("#attemptsLeft").textContent = "Attempts left: " + remainingAttempts;

    console.log("Attempts" + attempts);
    if(guess == randomNumber)
    {
        feedback.textContent = "You guessed it!  You Won!";
        feedback.style.color = "darkgreen";
        win++;
        gameOver();
    }else{
        document.querySelector("#guesses").textContent == guess + " ";
        if(attempts == 7)
        {
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            loss++;
            gameOver();
        }
            else if(guess > randomNumber)
            {
                feedback.textContent = "Guess was high";
                feedback.style.color = "red";
            }
            else
            {
                feedback.textContent = "Guess was low";
                feedback.style.color = "blue";
            }
    } 
    document.querySelector("#guesses").textContent += guess;
    document.querySelector("#guesses").textContent += " ";
} 

function gameOver()
{
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
    document.querySelector("#wl").textContent = `WON: ${win} | LOST: ${loss}`;
    
}