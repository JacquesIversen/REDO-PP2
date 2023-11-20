const quizzes = [
  {
    name: "Alaska Geography",
    image: "alaska-image.jpg",
    questions: [
      {
        image: "alaska-image.jpg",
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

let currentQuizIndex = 0;
let currentQuestionIndex = 0;

function displayQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  const currentQuiz = quizzes[currentQuizIndex];
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  quizContainer.innerHTML = "";

  const questionElement = document.createElement("p");
  questionElement.classList.add("question");
  questionElement.textContent = currentQuestion.question;
  quizContainer.appendChild(questionElement);

  const optionsList = document.createElement("ul");
  optionsList.classList.add("options");
  currentQuestion.options.forEach((option, index) => {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "quiz-option";
    radioInput.value = option;
    label.appendChild(radioInput);
    label.appendChild(document.createTextNode(option));
    listItem.appendChild(label);
    optionsList.appendChild(listItem);
  });
  quizContainer.appendChild(optionsList);
}

displayQuiz();
