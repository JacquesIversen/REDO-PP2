const score = localStorage.getItem("quizScore");
document.getElementById("score").value = score;
document.getElementById("display-score").textContent = score;

const highscoreForm = document.getElementById("highscore-form");

highscoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;

  if (username.trim() !== "") {
    const highscoreData = {
      username: username,
      score: score,
    };

    const existingHighscores =
      JSON.parse(localStorage.getItem("highscores")) || [];

    existingHighscores.push(highscoreData);

    localStorage.setItem("highscores", JSON.stringify(existingHighscores));
    window.location.href = "quizlist.html";
  } else {
    alert("Please enter a valid username.");
  }
});
