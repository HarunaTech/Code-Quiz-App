// The logic code will be written here

// Declaring variable to get/ access element by ID 

var startScreenEl = document.getElementById("start-screen"); // connected to line 18 in html
var questionsEl = document.getElementById("questions"); // connected to line 28 in html
var questionTitleEl = document.getElementById("question-title"); // connected to line 29 in html
var questionChoicesEl = document.getElementById("choices"); // connected to line 30 in html
var timeEl = document.getElementById("time"); // connected to line 15 in html
var answerChoices = document.getElementById("choices");


// Creating a start button with a query selector, declaring variable with var startButton
// The line of code is using query selector to select the start Id linked
// with the hmtl and an event listener is used to create and listen to the button when its clicked
// 
var startButton = document.querySelector("#start") // the id "start" is linked to line 25 of the html
startButton.addEventListener("click", startQuiz); // added  event listener to that button 


// This line of code is creating a function and alerting user to start Quiz When the startQuiz button is clicked 
function startQuiz (){
    alert("Start Quiz");

    console.log("click startQuiz Button") // console log the check if its working 

// Hide the start screen. Set an Attribute to hide the display text at welcome screen
// It used to hide the welcome text so that the quiz can start when the start Quiz button is click
startScreenEl.setAttribute("class", "hide");// this is also referencing line 18 by set the attribute class

// Unhide and show the questions 
questionsEl.removeAttribute("class");

}

// Delcaring function to display the questions 
// calling display fucntion (commit 4)
var index = 0;
var timerId;
var timeRemaining = 135;

displayQuestion();

// function where current question will be display to the user 
function displayQuestion(){
    // Get the current questions from quiz questions Array (question.js file)
var currentQuestion = quizQuestions[index]; 


// display the question to the user. This get the  
// This will display the question as tagerted and display it using questionTitleEl.textContent
// The .textContent is used to display the content of questionTitleEl as it was reference above and line 28 in html

questionTitleEl.textContent = currentQuestion.question; 
questionChoicesEl.innerHTML = ""; // This done to  clear the previous question in the DOM

// The is looping through the current question and answer choices and to dispaly answerChoices in an order list 
for (let i = 0; i < currentQuestion.answerChoices.length; i++) {
    var answerChoices = document.createElement("button");
    answerChoices.textContent = currentQuestion.answerChoices[i]
    questionChoicesEl.appendChild(answerChoices)

    // adding an event lister to the button created 
    answerChoices.addEventListener("click", displayQuestion);

    console.log("You click choice ") // checking to see if the click button work
}

}

// This code is set to display a timer on the page 
// Start the timer 
timerId = setInterval(countDown, 1000); // every 1000ms it will call CountDown
timeEl.textContent = timeRemaining; // it is used to get time Id class in line 15 html and display


// A call back fuction that will call the countDown function every 1000 miliseconds
function countDown(){
    // Decrement timer is shown to the user
    timeRemaining--;
    timeEl.textContent = timeRemaining;

    // The if statement to stop the quiz after time is <=0
    // If available reaches 0 or less stop the quiz
    if (timeRemaining <= 0){
        stopQuiz();
    }
}


// The function to stop the quiz 
function stopQuiz(){
// To be completed 
    
}


