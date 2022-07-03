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

function setStart() {
    var startQuiz = document.createElement('button')
    startQuiz.setAttribute('id', 'start-quiz')
    startQuiz.textContent = 'Start Quiz!'
    quiz.appendChild(startQuiz)
    startQuiz.addEventListener ('click', function(e) {
        formatQuiz()
    })    
}

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

