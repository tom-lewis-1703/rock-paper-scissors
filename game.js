function game(user_input, cpu_input) {
  if (user_input == cpu_input) {
    return "draw";
  } else if (user_input == "ROCK" && cpu_input == "SCISSORS") {
    return "player";
  } else if (user_input == "SCISSORS" && cpu_input == "PAPER") {
    return "player";
  } else if (user_input == "PAPER" && cpu_input == "ROCK") {
    return "player";
  } else return "cpu";
}

const buttons = document.querySelector("#buttons");
const rock_btn = document.querySelector("#rock");
const paper_btn = document.querySelector("#paper");
const scissors_btn = document.querySelector("#scissors");

let player_score = 0;
let cpu_score = 0;

rock_btn.addEventListener("click", (event) => {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let cpu_input = choices[Math.floor(Math.random() * choices.length)];
  let user_input = "ROCK";

  const outcome = document.querySelector("#outcome");
  const player_score_text = document.querySelector("#playerscore");
  const cpu_score_text = document.querySelector("#cpuscore");

  let winner = game(user_input, cpu_input);

  if (winner == "player") {
    outcome.textContent = `The cpu chose ${cpu_input.toLowerCase()}, You win this round!`;
    player_score += 1;
  } else if (winner == "cpu") {
    outcome.textContent = `The cpu chose ${cpu_input.toLowerCase()}, You lose this round...`;
    cpu_score += 1;
  } else {
    outcome.textContent = `Draw!\nYou both chose ${cpu_input.toLowerCase()}`;
  }

  player_score_text.textContent = `Your Score: ${player_score}`;
  cpu_score_text.textContent = `CPU's Score: ${cpu_score}`;

  if (player_score == 5) {
    outcome.textContent = "Congrats! You win!";
    player_score = 0;
    cpu_score = 0;
  } else if (cpu_score == 5) {
    outcome.textContent = "Sorry. You lost...";
    player_score = 0;
    cpu_score = 0;
  }
});

paper_btn.addEventListener("click", (event) => {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let cpu_input = choices[Math.floor(Math.random() * choices.length)];
  let user_input = "PAPER";

  const outcome = document.querySelector("#outcome");
  const player_score_text = document.querySelector("#playerscore");
  const cpu_score_text = document.querySelector("#cpuscore");

  let winner = game(user_input, cpu_input);

  if (winner == "player") {
    outcome.textContent = `The cpu chose ${cpu_input.toLowerCase()}, You win this round!`;
    player_score += 1;
  } else if (winner == "cpu") {
    outcome.textContent = `The cpu chose ${cpu_input.toLowerCase()}, You lose this round...`;
    cpu_score += 1;
  } else {
    outcome.textContent = `Draw!\nYou both chose ${cpu_input.toLowerCase()}`;
  }

  player_score_text.textContent = `Your Score: ${player_score}`;
  cpu_score_text.textContent = `CPU's Score: ${cpu_score}`;

  if (player_score == 5) {
    outcome.textContent = "Congrats! You win!";
    player_score = 0;
    cpu_score = 0;
  } else if (cpu_score == 5) {
    outcome.textContent = "Sorry. You lost...";
    player_score = 0;
    cpu_score = 0;
  }
});

scissors_btn.addEventListener("click", (event) => {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let cpu_input = choices[Math.floor(Math.random() * choices.length)];
  let user_input = "SCISSORS";

  const outcome = document.querySelector("#outcome");
  const player_score_text = document.querySelector("#playerscore");
  const cpu_score_text = document.querySelector("#cpuscore");

  let winner = game(user_input, cpu_input);

  if (winner == "player") {
    outcome.textContent = `The cpu chose ${cpu_input.toLowerCase()}, You win this round!`;
    player_score += 1;
  } else if (winner == "cpu") {
    outcome.textContent = `The cpu chose ${cpu_input.toLowerCase()}, You lose this round...`;
    cpu_score += 1;
  } else {
    outcome.textContent = `Draw!\nYou both chose ${cpu_input.toLowerCase()}`;
  }

  player_score_text.textContent = `Your Score: ${player_score}`;
  cpu_score_text.textContent = `CPU's Score: ${cpu_score}`;

  if (player_score == 5) {
    outcome.textContent = "Congrats! You win!";
    player_score = 0;
    cpu_score = 0;
  } else if (cpu_score == 5) {
    outcome.textContent = "Sorry. You lost...";
    player_score = 0;
    cpu_score = 0;
  }
});
