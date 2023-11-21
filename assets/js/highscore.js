const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

/* Dummy Highscore: */

const dummyHighscores = [
  { username: "John Woke", score: 6 },
  { username: "Jimmi Sleep", score: 5 },
  { username: "That Doe Girl", score: 8 },
];

localStorage.setItem("highscores", JSON.stringify(dummyHighscores));
highscores.push(...dummyHighscores);

const highscoreList = document.getElementById("highscore-list");

highscores.forEach((highscore) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${highscore.username} - ${highscore.score}`;
  highscoreList.appendChild(listItem);
});
