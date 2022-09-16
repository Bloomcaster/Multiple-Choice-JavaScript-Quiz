var countdownDisplay = document.querySelector("countdownDisplay");
var startButton = document.querySelector("start-btn");
var choices = Array.from(document.querySelectorAll(".choices"));
var questionList = document.querySelector("questionList");
var timerElement = document.getElementById("time-count");
var win = document.querySelector(".win");
var wineDrank = document.getElementById("#choice-buttons");

//so that the buttons can be selected for answers
var btnA = document.querySelector("#btnA");
var btnA = document.querySelector("#btnB");
var btnA = document.querySelector("#btnC");
var btnA = document.querySelector("#btnD");
var questionDisplay = document.querySelector("question-display");

var currentQuestion = "";
var correctAnswer = true;
var isWin = false;

var questionTally = 0;
var questionChoices = [];
var timer;
var timerCount;
var questionNum;


//this the the question array
questionList = [
  {
    question: "Which is not a Bordeaux varietal?",
    choices: ["merlot", "sangiovese", "malbec", "cabernet sauvignon"],
    answer: "sangiovese",
  },
  {
    question:
      "What two characteristics makes Hunter Valley semillion stand out from other examples around the world?",
    choices: [
      "high alcohol, rich fruit",
      "low alcohol, matchstick aroma",
      "high alcohol, matchstick aroma",
      "low alcohol, rich fruit",
    ],
    answer: "low alcohol, matchstick aroma",
  },
  {
    question: "What is pinot noir called in Italy?",
    choices: ["pinot negro", "blaugurgunder", "pinot nero", "pinot grigio"],
    answer: "pinot nero",
  },
  {
    question:
      "Which winery is famous for breaking the ceiling for American made wines in the 1976 Judgment of Paris?",
    choices: [
      "Opus One",
      "Tablas Creek",
      "Duckhorn Vineyards",
      "Chateau Montelena",
    ],
    answere: "Chateau Montelena",
  },
];



function startGame() {
  isWin = false;
  timerCount = 60;
  startButton.disabled = true;
  startTimer();
}

function winGame() {
  questionChoices.textContent = "CHEERS AND ENJOY A GLASS OF WINE";
  winCounter++;
  startButton.disabled = false;
  setWins();
}



//this function is used for the timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      lossGame();
    }
  }, 1000);
}



function rightAnswers (event) {
  event.preventDefault();

  if(questionList[questionNum].answer== event.target.value){
questionTally=questionTally+1;
  }
  else{
    timerCount = timerCount-10;
  }
  if(questionNum<questionList.length) {
    revealQuestion(questionNum+1);
}
else{
  winGame();
}
questionNum ++;
};
  

 function revealQuestion (x){
  questionDisplay.textContent = questionList[x].text;
  btnA.textContent = questionList[x].bnt[0];
  btnB.textContent = questionList[x].btn[1];
  btnC.textContent = questionList[x].btn[2];
  btnD.textContent = questionList[x].btn[3];  
  var x = questionNum;     
}

 
  
  

  
/*this shows the win count and sets it to the storage, rest of functions are for win/loss tallies for the game*/
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);


function getWins() {
  var talliedWins = localStorage.getItem("winCount");
  if (talliedWins === null) {
    winCounter = 0;
  } else {
    wineCounter = talliedWins;
  }
  win.textContent = winCounter;
}




var startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
    startGame();
    console.log("Button clicked.");
});

optionsBtns.forEach(function(click){
  click.addEventListener("click", guessAnswer);
});
 


wineDrank.forEach(function(click){
  click.addEventListener("click", guessAnswer);
});
}