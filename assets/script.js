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

const nameModal = document.getElementById("nameModal");
const nameForm = document.getElementById("nameForm");
const closeButton = document.querySelectorAll(".close");

const yourScore = document.getElementById("your-score");
const yourFinalScore = document.getElementById("your-final-score");
var highscoreModal = document.getElementById("highscore-modal");

var span = document.getElementsByClassName("close")[0];

// Get the highscores container
var highscoresContainer = document.getElementById("highscores");


var timer;
var questions;
var remainingTime;
var right = 0;
var wrong = 0;
var buttonClicked = 0;
var currentQuestion;
var score = 0;

rightDisplay.textContent = right;
wrongDisplay.textContent = wrong;

var questions = [    
    {   question: "Q: What is JavaScript?",           
        choices: ["A programming language", "A markup language", "A database", "A server"],
        answer: "A programming language"
    },
    {
        question: "Q: How do you declare a JavaScript variable?",
        choices: ["v carName;", "var carName;", "variable carName;", "None"],
        answer: "var carName;"
    },
    {
        question: "Q: What is an array?",
        choices: ["A collection of objects", "A collection of strings", "A collection of numbers", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Q: Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onclick", "onchange", "onmouseover"],
        answer: "onclick"
    },
    {
        question: "Q: Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<scripting>", "<script>", "<js>"],
        answer: "<script>"
    },
    {
        question: "Q: What is the difference between == and === in JavaScript?",
        choices: ["== compares value, === compares value and type", "== compares type, === compares value", "== and === are the same", "None of the above"],
        answer: "== compares value, === compares value and type"
    },
    {
        question: "Q: What is the purpose of the 'this' keyword in JavaScript?",
        choices: ["It refers to the current function", "It refers to the global object", "It refers to the object that the function is a method of", "None of the above"],
        answer: "It refers to the object that the function is a method of"
    },
    {
        question: "Q: What is the difference between null and undefined in JavaScript?",
        choices: ["null is a value, undefined means a variable has been declared but has not been assigned a value", "undefined is a value, null means a variable has been declared but has not been assigned a value", "null and undefined are the same", "None of the above"],
        answer: "null is a value, undefined means a variable has been declared but has not been assigned a value"
    },
    {
        question: "Q: What is the result of the following code: '5' + 3?",
        choices: ["35", "8", "53", "NaN"],
        answer: "53"
    },
    {
        question: "Q: What is the result of the following code: typeof undefined;",
        choices: ["undefined", "null", "object", "string"],
        answer: "undefined"
    },
    {
        question: "Q: What is the result of the following code: [1, 2, 3] + [4, 5, 6]?",
        choices: ["[1, 2, 3, 4, 5, 6]", "10", "NaN", "Error"],
        answer: "[1, 2, 3] + [4, 5, 6]"
    },
    {
        question: "Q: What is the result of the following code: 2 * '3'?",
        choices: ["6", "23", "Error", "NaN"],
        answer: "6"
    }];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions.splice(randomIndex, 1)[0];
}


function startQuiz() {
    wrongDisplay.textContent = 0;
    rightDisplay.textContent = 0;
    wrong = 0;
    right = 0;
    score = 0;
    remainingTime = 35;
    nextQuestion();
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
        score ++;
        rightDisplay.textContent = score;
        nextQuestion();

// do something with the score and name, like save it to a database or display it on the page



      } else if (currentQuestion.answer === currentQuestion.choices[1] && buttonClicked === 2) {
        // Button2 is correct
        quizMessage.textContent = "Correct";
        // Increase the score as well
        score ++;
        rightDisplay.textContent = score;
        nextQuestion();

      } else if (currentQuestion.answer === currentQuestion.choices[2] && buttonClicked === 3) {
        // Button3 is correct
        quizMessage.textContent = "Correct";

        // Increase the score as well
        score ++;
        rightDisplay.textContent = score;
        nextQuestion();

      } else if (currentQuestion.answer === currentQuestion.choices[3] && buttonClicked === 4) {
        // Button4 is correct
        quizMessage.textContent = "Correct";

        // Increase the score as well
        score ++;
        rightDisplay.textContent = score;
        nextQuestion();

      } else {
        // answer is wrong
        quizMessage.textContent = "Wrong";
        wrong ++;
        console.log("Here");

        wrongDisplay.textContent = wrong;
        if (wrong === 3) {
            revealScore();
        }else {
        nextQuestion();
        }

        // Game over - User lost
      }
}

function updateTimer() {
    remainingTime--;
    timerDisplay.textContent = remainingTime;

    if (remainingTime <= 0) {
        revealScore();
        clearInterval(timer);
        // Reveal the score

        // Let user save the score
    }
}



function nextQuestion() {
    currentQuestion = getRandomQuestion();
    if (currentQuestion) {
    console.log(currentQuestion);   
    // questionDisplay.textContent = questions.choices[0];
    questionDisplay.textContent = currentQuestion.question;

    button1.textContent = currentQuestion.choices[0];
    button2.textContent = currentQuestion.choices[1];
    button3.textContent = currentQuestion.choices[2];
    button4.textContent = currentQuestion.choices[3];
    }else{
        revealScore();
    }
}


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

nameForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    if (name) {
      // Hide the name modal
      nameModal.style.display = "none";
      // Reset the name input field
      nameInput.value = "";
      const scoreData = { name: name, score: score };
      const existingData = JSON.parse(localStorage.getItem("scoreName")) || [];
      const index = existingData.findIndex(data => data.name === name);
      
      if (index > -1) {
        existingData[index].score = score;
      } else {
        existingData.push(scoreData);
      }
      
      localStorage.setItem("scoreName", JSON.stringify(existingData));
    }
  });


  
//    Close modals when the user clicks the close button
for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", function() {
      const modal = this.parentNode.parentNode;
      modal.style.display = "none";
    });
  }


  function showHighScores() {
    highscoreModal.style.display = "block";
    var highScores = JSON.parse(localStorage.getItem("scoreName"));
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });
    
    // Display high scores in a table
    var highScoresHtml = "";
    var minLength = Math.min(highScores.length, 10);
    for (var i = 0; i < minLength; i++) {
      highScoresHtml += "<tr><td>" + highScores[i].name + "</td><td>" + highScores[i].score + "</td></tr>";
    }
    highscoresContainer.innerHTML = highScoresHtml;
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  }


  
function revealScore() {
    clearInterval(timer);
    nameModal.style.display = "block";
    yourScore.textContent = "Your Score is: " + score;
    yourFinalScore.textContent = "Your Last Score is: " + score;
}

startButton.addEventListener("click", startQuiz);
