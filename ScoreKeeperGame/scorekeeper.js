var p1Button = document.querySelector("#p1Btn");
var p2Button = document.getElementById("p2Btn");
var resetButton = document.getElementById("resetBtn");
var p1ScoreDisplay = document.getElementById("p1Score");
var p2ScoreDisplay = document.getElementById("p2Score");
var p1Score = 0;
var p2Score = 0;
var scoreLimit = 5;
var winningScoreDisplay = document.querySelector("p span");
var gameOver = false;
var scoreLimitInput = document.querySelector("#scoreLimitInput")

p1Button.addEventListener("click", function(){
  if(!gameOver) {
    p1Score++;
    p1ScoreDisplay.innerText = p1Score;
    if (p1Score === scoreLimit) {
      p1ScoreDisplay.classList.add("winner");
      p2ScoreDisplay.classList.add("loser");
      gameOver = true;
    }
  }
});

p2Button.addEventListener("click", function(){
  if(!gameOver) {
    p2Score++;
    p2ScoreDisplay.innerText = p2Score;
    if (p2Score === scoreLimit) {
      p2ScoreDisplay.classList.add("winner");
      p1ScoreDisplay.classList.add("loser");
      gameOver = true;
    }
  }
});

resetButton.addEventListener("click", function(){
    gameOver = false;
    p1Score = 0;
    p1ScoreDisplay.innerText = p1Score;
    p2Score = 0;
    p2ScoreDisplay.innerText = p2Score;
    p1ScoreDisplay.classList.remove("winner");
    p1ScoreDisplay.classList.remove("loser");
    p2ScoreDisplay.classList.remove("winner");
    p2ScoreDisplay.classList.remove("loser");
});

scoreLimitInput.addEventListener("change", function(){
  scoreLimit = Number(scoreLimitInput.value);
  winningScoreDisplay.innerText = scoreLimit;
});
