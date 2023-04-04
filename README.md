# JavaScript: Password Generator

## Description

[Visit the Deployed Site](https://aarticontractor.github.io/api-code-quiz/)
<br>

In this project I was supposed to build a timed coding quiz with multiple-choice questions from scratch. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code. It has a clean, polished, and responsive user interface.  Basically, the coding quiz features multiple choice questions on JavaScript, a timer, a pop-up to submit the user's name and a prompt to view the top 10 highest scores.

Displayed in the below image is the pseudocode flowchart of this project which entails the basic high-level functionalities that will occur in the application for better understanding of how the app was made:
<br>
<br>

![alt text](assets)


<br>
<br>

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |  
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     |  


<br>



## Table of Contents

* [Application Highlights and Usage](#application-highlights-and-usage)
* [Code Snippets](#code-snippets)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)

<br>


## Application Highlights and Usage

<br>

When the start button is clicked, a 40 second timer starts and user is presented with a question:
<br>
<br>
<br>

![alt text](assets/)

<br>
<br>
<br>


When the game is over, the user can submit their name and view high scores by clicking on the button in the nav bar:
<br>
<br>
<br>

![alt text](assets/)

<br>
<br>
<br>



## Code Snippets

<br>

The following code snippet shows the functions where a question is presented to user and once the user has answered it, it get removed from the array list while another function starts the timer :


```javascript

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
    
    // Start timer
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}
```

<br>
<br>
<br>

The below snippet shows how the user can submit name and display it in the high sores table and the scores are stored in the local storage:

```javascript

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
```

<br>
<br>
<br>

## Learning Points 

   I learned the following skills while doing this project:
<br>
- Java script basics (functions, arrays, for-loops, if-else, alerts, prompts, confirm, etc)
- How to call a function
- When to define a variable
- How to use .addeventListener and document.querySelector to capture data from an HTML element
- How to create a psuedocode to help plan the functionalities of the application
- How to store values in the local storage of the web browser


<br>

## Author Info

### Aarti Contractor


- Portfolio: https://aarticontractor.github.io/aarticontractor_portfolio/
- Linkedin: https://www.linkedin.com/in/aarti-contractor/
- Github: https://github.com/aarticontractor

<br>

## Credits

- https://www.w3schools.com/jsref/jsref_obj_string.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://beautifier.io/
- https://onecompiler.com/javascript/3z45t4b2m
- https://cloudconvert.com/webm-to-gif
- 


<br>

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.