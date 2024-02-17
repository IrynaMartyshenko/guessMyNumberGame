"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const displayScore = function (scoreVal) {
  document.querySelector(".score").textContent = scoreVal;
};

const changeBackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

//When player click check btn
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  //When there's no input
  if (!guess) {
    displayMessage("No Number!");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    displayNumber(secretNumber);
    changeBackground("#60b347");
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("You lost the game!");
      displayScore(0);
      changeBackground("#FF0000");
    }
  }

  //When player click again btn
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    displayScore(score);
    displayNumber("?");
    document.querySelector(".guess").value = "";

    changeBackground("#222");
    document.querySelector(".number").style.width = "15rem";
  });
});
