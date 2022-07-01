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

var quiz = document.getElementById('quiz')
var startQuiz = document.createElement('button')
startQuiz.setAttribute('id', 'start-quiz')
startQuiz.textContent = 'Start Quiz!'
quiz.appendChild(startQuiz)

startQuiz.onclick = function(e) {
    var numCorrect = 0
    var questions = document.createElement('p')
    var container = document.createElement('div')
    var choices = document.createElement('button')
    var timeRemaining =  document.createElement('p')
    

    for (let i = 0; i < questionsArr.length; i++) {
        quiz.appendChild(questions)
    }
}

//8. For returning user previous score must display above start quiz button.




//9. Selecting an option or running out of time should cause program to immediately show the next question in questionsArr.
//10. After last question is answered or time runs out, program will display start quiz button along with new score.
//11. Calculate score by dividing the number of correct answers by the total number of questions. 
//12. Round the score to the nearest whole number.
//13. Use application JavaScript localStorage API to store user's most recent score under key previous-score after each game and retrieve score on page load. To ensure the score will display even if user navigates away from site. 