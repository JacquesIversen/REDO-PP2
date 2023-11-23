const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

const dummyHighscores = [
  { username: "John Woke", score: 6 },
  { username: "Jimmi Sleep", score: 5 },
  { username: "That Doe Girl", score: 8 },
];

const storedHighscores = JSON.parse(localStorage.getItem("highscores"));

if (!storedHighscores || storedHighscores.length === 0) {
  localStorage.setItem("highscores", JSON.stringify(dummyHighscores));
  highscores.push(...dummyHighscores);
}

highscores.sort((a, b) => b.score - a.score);

const top10Highscores = highscores.slice(0, 10);

const highscoreList = document.getElementById("highscore-list");

top10Highscores.forEach((highscore) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${highscore.username} - ${highscore.score}`;
  listItem.classList.add("highscore-li");
  highscoreList.appendChild(listItem);
});
