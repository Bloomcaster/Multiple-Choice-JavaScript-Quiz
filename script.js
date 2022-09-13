var countdownDisplay = document.getElementById("countdown-timer");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var containerQuestionElement = document.getElementById("container-questions");
var questionElement = document.getElementById("questionList");
var answerButtonElement = document.getElementById("answer-buttons");
var timerElement = document.getElementById("timeCount");


var questionList = "";
var chooseAnswer = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var countdownTimer;
var timeCount = 60;
var currentQuestionIndex = 0

var questionList = [
  {
    question: "What is false about JavaScript?",
    answer: [
      { text: "JavaScript is the same as Java", correct: true },
      { text: "JavaScript powers the behavior of websites", correct: false },
      {
        text: "JavaScript is used with HTML and CSS to create websites",
        correct: false,
      },
      { text: "JavaScrip is case sensitive", correct: false },
    ],
  },

  {
    question: "Which operator is used to assign a value to an operator?",
    answer: [
      { text: "=", correct: true },
      { text: "#", correct: false },
      { text: "*", correct: false },
      { text: "+", correct: false },
    ],
  },
  {
    question:
      "Which formula is used to round the number to the nearest integer?",
    answer: [
      { text: "Math.round()", correct: true },
      { text: "rnd()", correct: false },
      { text: "round()", correct: false },
      { text: "mathRound()", correct: false },
    ],
  },
  {
    question: "Which is the correct styling for an array?",
    answer: [
      { text: 'var flowers=["rose", "lily", "dahlia"]', correct: true },
      { text: "varFlowers = rose, lily, dahlia", correct: false },
      { text: 'flowers= "rose", "lily", "dahlia"', correct: false },
      { text: 'VarFlowers==="rose, lily, dahlia"', correct: false },
    ],
  },
];



function startTimer() {
  //sets timer
  countdownDisplay.textContent = timeCount
  
  timer = setInterval(function () {
    timeCount--;
     timerElement.setNextQuestion = timeCount; 
if (timeCount >=0) {
  if (isWin && timeCount > 0) {
    clearInterval(timer);
    getWins();
  }
}
if (timeCount ===0) {
  clearInterval(timer);
  getLosses();
}
}, 1000);
}
   

var shuffledQuestions, currentQuestionIndex;


function init() {
  getWins();
  getLosses();
}


/* this will shuffle questions so not always the same order for game, also want to hide the start button when quiz begins*/
function startGame() {
  
  startTimer()
  startButton.disabled = true;
  startTimer()
 
  shuffledQuestions = questionList.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
}

startButton.addEventListener("click", startGame);
/*console.log(startButton);*/
nextButton = document.addEventListener("click", () => {
  currentQuestionIndex++;
  
});


/* we are doing this so that it makes it easier to sort out the correct answer, useful when having a large amount of data on the page (we are using a string not boolean*/
function showQuestion(question) {
  questionElement.innerText = questionList.question;
  question.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innterText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", chooseAnswer);
    answerButtonElement.appendChild(button);
  });
}

/*not sure about the questionList here, trying to reset after the next button is pressed*/



/*needs to be converted to an array since this is a live dataset for the for each loop*/
function chooseAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button.button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
