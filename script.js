var quizInfo = [
  {
    question: "Which is not a Bordeaux varietal?",
    a: "merlot",
    b:  "sangiovese", 
    c:  "malbec", 
    d:  "cabernet sauvignon",
    correct: "b",
  },
  {
    question: "What two characteristics makes Hunter Valley semillion stand out from other examples around the world?",
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
    question: "Which winery is famous for breaking the ceiling for American made wines in the 1976 Judgment of Paris?",
    a: "Opus One",
    b: "Tablas Creek",
    c: "Duckhorn Vineyards",
    d: "Chateau Montelena",
    correct: "Chateau Montelena",
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

});

optionsBtns.forEach(function(click){
  click.addEventListener("click", guessAnswer);

});

 


wineDrank.forEach(function(click){
  click.addEventListener("click", guessAnswer);
});
}