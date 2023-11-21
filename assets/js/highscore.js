const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

const highscoreList = document.getElementById("highscore-list");

highscores.forEach((highscore) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${highscore.username} - ${highscore.score}`;
  highscoreList.appendChild(listItem);
});
