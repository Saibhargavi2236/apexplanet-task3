const quizData = [
  { question: "Which country is home to the Eiffel Tower?", options: ["France", "Italy", "Germany", "Spain"], answer: "France" },
  { question: "Where is the Great Wall located?", options: ["Japan", "China", "India", "Mongolia"], answer: "China" },
  { question: "Which city is known as the Big Apple?", options: ["Los Angeles", "New York", "Chicago", "Miami"], answer: "New York" },
  { question: "Which country has the city of Venice?", options: ["Italy", "France", "Greece", "Spain"], answer: "Italy" },
  { question: "Mount Everest lies between Nepal and which country?", options: ["India", "Bhutan", "China", "Pakistan"], answer: "China" },
  { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
  { question: "Which desert is the largest in the world?", options: ["Gobi", "Sahara", "Kalahari", "Arabian"], answer: "Sahara" },
  { question: "Which country is famous for tulips and windmills?", options: ["Belgium", "Netherlands", "Sweden", "Denmark"], answer: "Netherlands" },
  { question: "The Taj Mahal is located in which Indian city?", options: ["Agra", "Delhi", "Jaipur", "Mumbai"], answer: "Agra" },
  { question: "Which country has the maple leaf on its flag?", options: ["USA", "Canada", "UK", "Australia"], answer: "Canada" },
  { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
  { question: "Which city is known for the Christ the Redeemer statue?", options: ["Lisbon", "Rio de Janeiro", "Buenos Aires", "Mexico City"], answer: "Rio de Janeiro" },
  { question: "Which country is also known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "South Korea"], answer: "Japan" },
  { question: "Which continent is the Sahara Desert located on?", options: ["Asia", "Africa", "Australia", "South America"], answer: "Africa" },
  { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  selectedAnswer = null;
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  scoreEl.textContent = "";
  nextBtn.disabled = true;

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      selectedAnswer = option;
      const allBtns = optionsEl.querySelectorAll("button");

      // Disable all buttons after click
      allBtns.forEach(b => b.disabled = true);

      // Mark correct/wrong
      if (option === q.answer) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
        // highlight correct answer
        allBtns.forEach(b => {
          if (b.textContent === q.answer) b.classList.add("correct");
        });
      }
      nextBtn.disabled = false;
    };
    optionsEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  if (selectedAnswer === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  scoreEl.textContent = `Your score: ${score}/${quizData.length}`;
  nextBtn.style.display = "none";
}

loadQuestion();
