// Your code here

//1. Create a 30 second multiple choice quiz similar to the game from Module 2
//2. Use Javascript to manipulate the HTML
//3. Create a questions array (questionsArr) variable to contain quiz data.
//4. questionArr should contain at least five questions.
//5. When page loads for first time user start quiz button must display with id-attribute of 'start-quiz'
//6. For returning user previous score must display above start quiz button.
//7. When start quiz button is clicked, program should select first question in questionsArr as well as possible answers.
//8. Each question will have a thirty second timer, use setInterval and clearInterval to create timer.
//9. Selecting an option or running out of time should cause program to immediately show the next question in questionsArr.
//10. After last question is answered or time runs out, program will display start quiz button along with new score.
//11. Calculate score by dividing the number of correct answers by the total number of questions. 
//12. Round the score to the nearest whole number.
//13. Use application JavaScript localStorage API to store user's most recent score under key previous-score after each game and retrieve score on page load. To ensure the score will display even if user navigates away from site. 