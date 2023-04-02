const startButton = document.getElementById("start-button");
const questionDisplay = document.getElementById("question-display");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const timerDisplay = document.getElementById("time-left");
const rightDisplay = document.getElementById("right");
const wrongDisplay = document.getElementById("wrong");
const quizMessage = document.getElementById("quiz-message");


var timer;
var questions;
var remainingTime;
var right = localStorage.getItem("right") || 0;
var wrong = localStorage.getItem("wrong") || 0;
var buttonClicked = 0;
var currentQuestion;

rightDisplay.textContent = right;
wrongDisplay.textContent = wrong;

var questions = [
    {  
        question: "What is JavaScript?",    
        choices: ["A programming language", "A markup language", "A database", "A server"],
        answer: "A programming language"
    },
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["v carName;", "var carName;", "variable carName;", "None"],
        answer: "var carName"
    },
    {
        question: "What is an array?",
        choices: ["A collection of objects", "A collection of strings", "A collection of numbers", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onclick", "onchange", "onmouseover"],
        answer: "onclick"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<scripting>", "<script>", "<js>"],
        answer: "Both"
    }

];
function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}


function startQuiz() {
    // Initialize quiz variables
    currentQuestion = getRandomQuestion();
    console.log(currentQuestion);
    remainingTime = 45; // You can adjust the time limit
    // questionDisplay.textContent = questions.choices[0];
    questionDisplay.textContent = currentQuestion.question;

    button1.textContent = currentQuestion.choices[0];
    button2.textContent = currentQuestion.choices[1];
    button3.textContent = currentQuestion.choices[2];
    button4.textContent = currentQuestion.choices[3];

      



    timerDisplay.textContent = remainingTime;
    quizMessage.textContent = "";
    

    console.log("Method already finished");
    // Start timer
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function correctOrWrong(buttonValue) {

    buttonClicked = buttonValue;

    console.log("Correct or Wrong method called");
    if (currentQuestion.answer === currentQuestion.choices[0] && buttonClicked === 1) {
        // Button1 is correct
        quizMessage.textContent = "Correct";

        // Increase the score as well

        // Next question


        //Prompt to save score with name


      } else if (currentQuestion.answer === currentQuestion.choices[1] && buttonClicked === 2) {
        // Button2 is correct
        quizMessage.textContent = "Correct";
      } else if (currentQuestion.answer === currentQuestion.choices[2] && buttonClicked === 3) {
        // Button3 is correct
        quizMessage.textContent = "Correct";
      } else if (currentQuestion.answer === currentQuestion.choices[3] && buttonClicked === 4) {
        // Button4 is correct
        quizMessage.textContent = "Correct";
      } else {
        // answer is wrong
        quizMessage.textContent = "Wrong";


        // Game over - User lost
      }
}

function updateTimer() {
    remainingTime--;
    timerDisplay.textContent = remainingTime;

    if (remainingTime <= 0) {
        clearInterval(timer);
        // Reveal the score

        // Let user save the score
    }
}


function updateLocalStorage() {
    localStorage.setItem("right", right);
    localStorage.setItem("wrong", wrong);
}



startButton.addEventListener("click", startQuiz);

window.addEventListener("beforeunload", updateLocalStorage);


button1.addEventListener("click", function() {
     correctOrWrong(1)
});

button2.addEventListener("click", function() {
    correctOrWrong(2)
});
button3.addEventListener("click", function() {
    correctOrWrong(3)
});
button4.addEventListener("click", function() {
    correctOrWrong(4)
});

