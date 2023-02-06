const quizData = [
  {
    question: "Which is not a Bordeaux varietal?",
    a: "merlot",
    b: "sangiovese",
    c: "malbec",
    d: "cabernet sauvignon",
    correct: "b",
  },
  {
    question:
      "What two characteristics makes Hunter Valley semillion stand out from other examples around the world?",
    a: "high alcohol, rich fruit",
    b: "low alcohol, matchstick aroma",
    c: "high alcohol, matchstick aroma",
    d: "low alcohol, rich fruit",
    correct: "c",
  },
  {
    question: "What is pinot noir called in Italy?",
    a: "pinot negro",
    b: "blaugurgunder",
    c: "pinot nero",
    d: "pinot grigio",
    correct: "c",
  },
  {
    question:
      "Which winery is famous for breaking the ceiling for American made wines in the 1976 Judgment of Paris?",
    a: "Opus One",
    b: "Tablas Creek",
    c: "Duckhorn Vineyards",
    d: "Chateau Montelena",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.textContent = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

let answerArray = [a_text, b_text, c_text, d_text]

for(var i = 0; i < answerArray.length; i++) {
  answerArray[i].addEventListener('click', function(e) {
    var selected = e.target
    selected.setAttribute('id', "checked")
    console.log(selected)
  })
}

function getSelected() {
  answerArray.push(a_text, b_text, c_text, d_text)
  answerArray.forEach((answerEl) => {
    console.log(answerEl)
    if (answerEl.id === "checked") {
      return answerEl.textContent
    }
    return null
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer)
  if(answer === undefined) return
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
      <h2>Wine rewards!! You answered ${score}/${quizData.length} questions correctly!</h2>

      <button onclick="location.reload()">Reload</button>
      `;
  }
});
