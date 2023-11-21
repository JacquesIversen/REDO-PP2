const score = localStorage.getItem("quizScore");
document.getElementById("score").value = score;
document.getElementById("display-score").textContent = score;
console.log(score);

const highscoreForm = document.getElementById("highscore-form");

highscoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;

  if (username.trim() !== "") {
    const highscoreData = {
      username: username,
      score: score,
    };
    console.log("Highscore Data:", highscoreData);
  } else {
    alert("Please enter a valid username.");
  }
});
