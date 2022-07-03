// Your code here

//1. Create a 30 second multiple choice quiz similar to the game from Module 2

//2. Use Javascript to manipulate the HTML

//3. Create a questions array (questionsArr) variable to contain quiz data.

//4. questionArr should contain at least five questions.

//5. When page loads for first time user start quiz button must display with id-attribute of 'start-quiz'

//6. When start quiz button is clicked, program should select first question in questionsArr as well as possible answers.

//7. Each question will have a thirty second timer, use setInterval and clearInterval to create timer.

//8. Selecting an option or running out of time should cause program to immediately show the next question in questionsArr.

//9. For returning user previous score must display above start quiz button.

//10. After last question is answered or time runs out, program will display start quiz button along with new score.

//11. Calculate score by dividing the number of correct answers by the total number of questions. 

//12. Round the score to the nearest whole number.

//13. Use application JavaScript localStorage API to store user's most recent score under key previous-score after each game and retrieve score on page load. To ensure the score will display even if user navigates away from site. 

var questionsArr = [
    {
        question: 'Which is NOT a Doctor Who enemy?',
        answer: 'The Borg',
        options: [
            'Daleks',
            'Cybermen', 
            'Weeping Angels',
            'The Borg',
        ]
    }, 
    {
        question: "What is the name of The Doctor's ship?",
        answer: 'TARDIS',
        options: [
            'Millenium Falcon',
            'Enterprise', 
            'Serenity',
            'TARDIS',
        ]
    }, 
    {
        question: 'What does TARDIS stand for?',
        answer: 'Time and Relative Dimension in Space',
        options: [
            'Time and Relative Dimension in Space',
            'Time and Relational Dimension in Space', 
            'Truth and Rightousness Driven in Style',
            'Tacos and Ramen Devoured in Space',
        ]
    },  
    {
        question: 'Over the years the show has had how many Doctors?',
        answer: '13',
        options: [
            '9',
            '11', 
            '13',
            '12',
        ]
    }, 
    {
        question: 'Which character was a Doctor Who companion?',
        answer: 'Donna Noble',
        options: [
            'Donna Noble',
            'Hoban "Wash" Washburne', 
            'Michael Burnham',
            'Jessica Cruz',
        ]
    }, 
    {
        question: 'Who played as the Ninth Doctor?',
        answer: 'Christopher Eccleston',
        options: [
            'David Tennant',
            'Matt Smith', 
            'Peter Capaldi',
            'Christopher Eccleston',
        ]
    }, 
]

var quiz = document.getElementById('quiz')
var numCorrect = 0
var qIndex = 0
var intervalId

//Score Quiz Function
function scoreQuiz() {
    console.log(numCorrect)
    var percentage = Math.round((numCorrect/questionsArr.length) * 100)
    console.log(percentage)
    quiz.innerHTML = ""
    quiz.innerHTML = "Current Score " + percentage + '%'
    localStorage.setItem('previous-score', percentage)
    qIndex = 0
    numCorrect = 0
    setStart()
}

//Set Start Function
function setStart() {
    var startQuiz = document.createElement('button')
    startQuiz.setAttribute('id', 'start-quiz')
    startQuiz.textContent = 'Start Quiz!'
    quiz.appendChild(startQuiz)
    startQuiz.addEventListener ('click', function(e) {
        formatQuiz()
    })    
}

//Show start-quiz button on page load
function startGame() {
    var score = localStorage.getItem('previous-score')
    if (score) {
        var scoreEl = document.createElement('p')
        scoreEl.innerHTML = 'Previous Score: ' + score + '%'
        quiz.appendChild(scoreEl)
    }
    setStart()
}

startGame()

function formatQuiz() {
    quiz.textContent = ""
    var q = questionsArr[qIndex]
    var questions = document.createElement('p')
    questions.innerHTML = q.question
    quiz.appendChild(questions)

    var container = document.createElement('div')
    for (let i = 0; i < q.options.length; i++) {
        var element = q.options[i];
        // console.log(element)
        var choices = document.createElement('button')
        choices.innerHTML = element
        container.appendChild(choices)
        choices.addEventListener('click', function(e) {
            var response = (e.target.innerHTML)
            if (response === q.answer) {
                numCorrect++
            }
            endTime()
        })
    }
        quiz.appendChild(container)
        var timeRemaining =  document.createElement('p')
        timeRemaining.textContent = 30
        timeRemaining.id = 'time'
        quiz.appendChild(timeRemaining)
        startTime()
}

function startTime() {
    intervalId = setInterval(function(){
        var timeRemaining = document.getElementById('time')
        var seconds = Number(timeRemaining.textContent) - 1
        if (seconds === -1) {
            endTime()
        } else {
            timeRemaining.textContent = seconds
        }
    }, 1000)
}

function endTime() {
    clearInterval(intervalId)
    qIndex++
    if (qIndex === questionsArr.length) {
        scoreQuiz()
    } else {
        formatQuiz()
    }
}

