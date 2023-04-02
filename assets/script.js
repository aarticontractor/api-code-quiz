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
        answer: "Both"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<scripting>", "<script>", "<js>"],
        answer: "Both"
    }

  // Add more questions and answer choices as needed
];
