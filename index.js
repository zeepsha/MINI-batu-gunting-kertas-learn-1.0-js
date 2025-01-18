const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, computerPlay());
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];

};

function playRound(player, computerVT) {
    if (player==computerVT) {
        document.getElementById('result').textContent = "SERI";
        return "waduh seri";
    }
    else if (
    (player === "rock" && computerVT === "scissors") ||
    (player === "paper" && computerVT=== "rock") ||
    (player === "scissors" && computerVT === "paper")

    ){
        playerScore++;
    document.getElementById(
      "result"
    ).textContent = `menang hoki doang dek ${player} ngalahin ${computerVT}`;
    playerScoreEl.textContent = playerScore;
    return "menang? hoki doang dek " + player + " ngalahin " + computerVT;
    }
 else {
    computerScore++;
    if (computerScore % 10 === 0) {
        alert("Sebaiknya udahan karna dah kalah 10 kali, luck Anda sedikit 😅")}
    document.getElementById(
      "result"
    ).textContent = `yah kalah mampus ${computerVT} ngalahin ${player}`;
    computerScoreEl.textContent = computerScore;
    return "yah kalah mampus " + computerVT + " ngalahin " + player;
  }
  updateScore();

function updateScore() {
  document.getElementById(
    "player-score"
  ).textContent = `Your score: ${playerScore}`;
  document.getElementById(
    "computer-score"
  ).textContent = `Computer's score: ${computerScore}`;
}
 }