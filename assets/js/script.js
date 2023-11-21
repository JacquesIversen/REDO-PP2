const AlaskaGeography = [
  {
    name: "Alaska Geography",
    questions: [
      {
        image: "anchor",
        question: "What is the largest city in Alaska by population?",
        options: ["Anchorage", "Fairbanks", "Juneau"],
        correctAnswer: "Anchorage",
      },
      {
        image: "alaska-image.jpg",
        question:
          "Which mountain range runs through the southern part of Alaska?",
        options: ["Alaska Range", "Sierra Nevada", "Rocky Mountains"],
        correctAnswer: "Alaska Range",
      },
      {
        image: "alaska-image.jpg",
        question:
          "Which of the following bodies of water does not border Alaska?",
        options: ["Bering Sea", "Gulf of Alaska", "Hudson Bay"],
        correctAnswer: "Hudson Bay",
      },
      {
        image: "alaska-image.jpg",
        question:
          "Which national park in Alaska is known for its diverse wildlife and stunning landscapes, including Mount McKinley?",
        options: [
          "Denali National Park",
          "Glacier Bay National Park",
          "Wrangell-St. Elias National Park",
        ],
        correctAnswer: "Denali National Park",
      },
      {
        image: "alaska-image.jpg",
        question: "Which river is the longest in Alaska?",
        options: ["Yukon River", "Tanana River", "Susitna River"],
        correctAnswer: "Yukon River",
      },
      {
        image: "alaska-image.jpg",
        question:
          "What is the largest glacier in North America, located in southeastern Alaska?",
        options: ["Hubbard Glacier", "Columbia Glacier", "Mendenhall Glacier"],
        correctAnswer: "Hubbard Glacier",
      },
      {
        image: "alaska-image.jpg",
        question:
          "Which island group in the Aleutian chain is the westernmost point of the United States?",
        options: [
          "Kodiak Islands",
          "Pribilof Islands",
          "Attu and the Near Islands",
        ],
        correctAnswer: "Attu and the Near Islands",
      },
      {
        image: "alaska-image.jpg",
        question:
          "Which major fault line runs through southern Alaska, contributing to its seismic activity?",
        options: [" San Andreas Fault", "Hayward Fault", "Denali Fault"],
        correctAnswer: "Denali Fault",
      },
    ],
  },
];

const alaskaGeography = AlaskaGeography[0];
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const progressBar = document.getElementById("progress-bar");
const progressPercent = document.getElementById("progress-percent");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let correctAnswers = 0;

function displayQuestion() {
  const questionData = alaskaGeography.questions[currentQuestionIndex];

  /* Clear Previous Question */
  questionContainer.innerHTML = "";

  /* Display Image */
  const questionImage = document.createElement("img");
  questionImage.src = questionData.image;
  questionContainer.appendChild(questionImage);

  /* Display Question */
  const questionText = document.createElement("p");
  questionText.textContent = questionData.question;
  questionContainer.appendChild(questionText);

  /* Display options  */
  questionData.options.forEach((option, optionIndex) => {
    const optionInput = document.createElement("input");
    optionInput.type = "radio";
    optionInput.name = `question${currentQuestionIndex}`;
    optionInput.value = option;
    optionInput.id = `q${currentQuestionIndex}o${optionIndex}`;

    const optionLabel = document.createElement("label");
    optionLabel.textContent = option;
    optionLabel.setAttribute("for", `q${currentQuestionIndex}o${optionIndex}`);

    questionContainer.appendChild(optionInput);
    questionContainer.appendChild(optionLabel);
  });

  backButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = true;

  questionContainer.addEventListener("change", function (event) {
    const selectedOption = document.querySelector(
      `input[name="question${currentQuestionIndex}"]:checked`
    );
    if (selectedOption && selectedOption.value === questionData.correctAnswer) {
      correctAnswers++;
    }

    nextButton.disabled = !selectedOption;
  });

  const progress =
    (currentQuestionIndex / alaskaGeography.questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressPercent.textContent = `${Math.round(progress)}%`;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < alaskaGeography.questions.length) {
    displayQuestion();
  } else {
    localStorage.setItem("quizScore", correctAnswers);
    window.location.href = "score.html";
  }
}

function previousQuestion() {
  currentQuestionIndex--;
  displayQuestion();
}

displayQuestion();

scoreDisplay.textContent = `Your Score: ${correctAnswers}`;
