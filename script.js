//this is the question array that should populate on the page

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
//these are the properties that in the question container to pull information
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


//this unselects any  previous answer option in the quiz with the class answer using
const unselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};


//returns the selects answer in the quiz, looping through all elemetns with class answer
const onceSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

 //this shows the current quiz questions and answer options, it first calls the "unselectAnswers" to clear previous select
 const beginQuiz = () => {
  unselectAnswers();
  const currentData = quizData[currentQuiz];
  questionElement.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
};

beginQuiz();


//once the button is clicked this determines if to add to the score depending on if the answer is truly equal to the right answer, ends with a message of Wine Rewards!!
submitButton.addEventListener("click", () => {
  const answer = onceSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score ++;
    currentQuiz++;
    if (currentQuiz < quizData.length) beginQuiz();
    else {
      quiz.innerHTML = `
  <h2>Wine rewards!! You answered ${score}/${quizData.length} questions correctly!</h2>

      <button onclick="location.reload()">Reload</button>
      `;
   }
  }
});
