const imgEl = document.querySelectorAll("img");
const userChoiceEl = document.querySelector(".user-choice");
const computerChoiceEl = document.querySelector(".computer-choice");
const resultEl = document.querySelector(".result");
const userScoreEl = document.querySelector(".user-score");
const computerScoreEl = document.querySelector(".computer-score");

let userPoints = 0;
let computerPoints = 0;

imgEl.forEach((img) => {
  img.addEventListener("click", () => {
    // console.log("Image was clicked")
    const computerTurn = computerChoice();
    const userTurn = img.id;
   const result = gamePlay(img.id, computerTurn);
    //console.log(userTurn)
    // console.log(computerTurn)
    userChoiceEl.textContent = userTurn;
    computerChoiceEl.textContent = computerTurn;
    resultEl.textContent = result;
  });
});

function computerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const val = Math.floor(Math.random() * choices.length);
  console.log(val);
  return choices[val];
}

function gamePlay(userTurn, computerTurn) {
  if (userTurn === computerTurn) {
    return `Its tie ...Both have same opinion`;
  } else if (
    (userTurn === "scissor" && computerTurn === "rock") ||
    (userTurn === "paper" && computerTurn === "scissor") ||
    (userTurn === "rock" && computerTurn === "scissor")
  ) {
    userPoints++;
    userScoreEl.textContent = userPoints;
    return `You win your score- ${userPoints} and computer score is ${computerPoints}`
  } else {
    computerPoints++;
    computerScoreEl.textContent = computerPoints;
    return `You win your score- ${userPoints} and computer score is ${computerPoints}`
  }
}
