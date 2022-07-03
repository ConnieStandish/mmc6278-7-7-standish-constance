// Your code here

//1. Create a 30 second multiple choice quiz similar to the game from Module 2
//2. Use Javascript to manipulate the HTML

//3. Create a questions array (questionsArr) variable to contain quiz data.
//4. questionArr should contain at least five questions.

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

//5. When page loads for first time user start quiz button must display with id-attribute of 'start-quiz'

//6. When start quiz button is clicked, program should select first question in questionsArr as well as possible answers.

//7. Each question will have a thirty second timer, use setInterval and clearInterval to create timer.

//8. Selecting an option or running out of time should cause program to immediately show the next question in questionsArr.

var quiz = document.getElementById('quiz')
var numCorrect = 0
var qIndex = 0
var intervalId

var startQuiz = document.createElement('button')
startQuiz.setAttribute('id', 'start-quiz')
startQuiz.textContent = 'Start Quiz!'
quiz.appendChild(startQuiz)

var questions = document.createElement('p')
var timeRemaining =  document.createElement('p')

function formatQuiz() {
    quiz.textContent = ""
    var q = questionsArr[qIndex]
    questions.innerHTML = q.question
    quiz.appendChild(questions)

    var container = document.createElement('div')
    for (let i = 0; i < q.options.length; i++) {
        var element = q.options[i];
        // console.log(element)
        var choices = document.createElement('button')
        choices.value = element
        choices.innerHTML = element
        quiz.appendChild(container)
        container.appendChild(choices)
    }
}

function startTimer() {
    quiz.appendChild(timeRemaining)
    timeRemaining.textContent = 30
    intervalId = setInterval(function(){
        var seconds = Number(timeRemaining.textContent) - 1
        if (seconds === -1) {
            clearInterval(intervalId)
        } else {
            timeRemaining.textContent = seconds
        }
    }, 1000)
}

startQuiz.onclick = function(e) {
    formatQuiz()
    startTimer()
}

//9. For returning user previous score must display above start quiz button.


//10. After last question is answered or time runs out, program will display start quiz button along with new score.
//11. Calculate score by dividing the number of correct answers by the total number of questions. 
//12. Round the score to the nearest whole number.
//13. Use application JavaScript localStorage API to store user's most recent score under key previous-score after each game and retrieve score on page load. To ensure the score will display even if user navigates away from site. 