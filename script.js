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
    correct: "b",
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
  {
    question: "What country is the world's largest exporter of rose wines?",
    a: "France",
    b: "Italy",
    c: "USA",
    d: "Spain",
    correct: "d",
  },
  {
    question:
      "Which group of grapes is not authorized for white wine production of Bordeaux AOP?",
    a: "semillion, sav blanc, godello",
    b: "muscadelle, semillion, ugni blanc",
    c: "columbard, sav blanc, merlot blanc",
    d: "sav gris, sav blanc, semillion",
    correct: "a",
  },
  {
    question: "What wine is similar in style to Italy's vin santo?",
    a: "amarone",
    b: "vino tostado",
    c: "malmsey madeira",
    d: "tawny port",
    correct: "b",
  },
  {
    question:
      "What is diacetyl?",
    a: "acid in wine",
    b: "another term for heavy tannins in wine",
    c: "compound that causes buttery character on the palate",
    d: "another term for sugar in wine",
    correct: "c",
  },
  {
    question: "What percentage of merlot is planted in Hawkes Bay that represents the nations total?",
    a: "20%",
    b: "90%",
    c: "75%",
    d: "50%",
    correct: "b",
  },
  {
    question:
      "What is the reason that Bordeaux and Bordeaux Superieur added six more varietals to be used since 2021?",
    a: "tastes have changed",
    b: "phylloxera",
    c: "dry styles of wines are selling",
    d: "climate change",
    correct: "d",
  },
  {
    question: "Where would one find the designations of vi de finca classification?",
    a: "Priorat",
    b: "Rioja",
    c: "Barriada",
    d: "Alentejo",
    correct: "a",
  },
  {
    question:
      "What does anejo mean on a bottle of Spanish wine?",
    a: "minimum of 3 years in oak and demonstrates a marked oxidative character",
    b: "minimum 18 months in total oak or bottle",
    c: "minimum 2 years total in oak or in bottle",
    d: "none of the above",
    correct: "c",
  },
  {
    question: "Where are the communes of Fargues and Preignac found?",
    a: "Sauternes AOP",
    b: "Coteaux du Layon",
    c: "Quarts de Chaume",
    d: "Bonnezeaux",
    correct: "a",
  },
  {
    question:
      "Where would one find ceniza a sandy black topsoil?",
    a: "Napa Valley",
    b: "Barriada",
    c: "Lanzarote",
    d: "Hawkes Bay",
    correct: "c",
  },
  {
    question: "Which country was and still is the global leader for screw cap wines regardless of pedigree?",
    a: "Australia",
    b: "New Zealand",
    c: "South Africa",
    d: "Argentina",
    correct: "b",
  },
  {
    question:
      "What varietal makes up 63% of plantings in Bordeaux?",
    a: "merlot",
    b: "cab sav",
    c: "carmenere",
    d: "cab franc",
    correct: "a",
  },
  {
    question: "Besides jalles what other contribution did the Dutch give the early Bordeaux wine region?",
    a: "canals",
    b: "grape growing techniques",
    c: "wine sold by brand names rather than generic category",
    d: "making Bordeaux known for red wine production",
    correct: "c",
  },
  {
    question:
      "What is the production of second wine in Bordeaux mean?",
    a: "wine made from fruit rejected for grand vin",
    b: "grapes that are cut after green harvest in the late stage of growth",
    c: "wines that are sold as two buck chuck, made Trader Joes famous",
    d: "wines sold when the best plots fall victim to climate change, pest and any outside factor making the grand vin less desireable",
    correct: "a",
  },
  {
    question: "What is the most important AOP for cabernet Sav in Bordeaux?",
    a: "Saint-Julien",
    b: "Margaux",
    c: "Paulliac",
    d: "Saint-Estephe",
    correct: "c",
  },
  {
    question:
      "Which winery is known for age-worthy cabernet sav in Chile?",
    a: "Casa Real",
    b: "Vina Alaviva",
    c: "Domus Aurea",
    d: "all of the above",
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
