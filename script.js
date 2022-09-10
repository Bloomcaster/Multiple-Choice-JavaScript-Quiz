const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const containerQuestionElement = document.getElementById
('container-questions')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById
('answer-buttons')



let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
    




/* this will shuffle questions so not always the same order for game*/
function startGame(){
 console.log('Start')
 startButton.classList.add('hide')
 shuffledQuestions = questionList.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 containerQuestionElement.classList.remove('hide')
 setNextQuestion() 

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
/* we are doing this so that it makes it easier to sort out the correct answer, useful when having a large amount of data on the page (we are using a string not boolean*/
function showQuestion(question) {
    questionElement.innterText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innterText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)

    }
}

/*needs to be converted to an array since this is a live dataset for the for each loop*/
function chooseAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
     Array.from(answerButtonsElement.children). forEach(button => {
    setStatusClass(button. button.dataset.correct)

})
if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
   element.classList.remove('correct')
   element.classList.remove('wrong')
}



const questionList = [
  {
    question: jfdkljflkdsjf,
    answer: [
        {text: 'jfdkjfsl', correct: true },
        {text: 'ggg', correct: false }
        {text: 'tri', correct: false }
        {text: 'ggg', correct: false} 
        
    
},
{

    question: jfdkljflkdsjf,
    answer: [
        {text: 'jfdkjfsl', correct: true },
        {text: 'ggg', correct: false }
        {text: 'ggg', correct: false }
        {text: 'ggg', correct: false }
    ]
},
{

        question: jfdkljflkdsjf,
        answer: [
            {text: 'jfdkjfsl', correct: true },
            {text: 'ggg', correct: false },
            {text: 'ggg', correct: false },
            {text: 'ggg', correct: false },
        ]
    },
    {

            question: jfdkljflkdsjf,
            answer: [
                {text: 'jfdkjfsl', correct: true },
                {text: 'ggg', correct: false },
                {text: 'ggg', correct: false },
                {text: 'ggg', correct: false },
            ]
        

