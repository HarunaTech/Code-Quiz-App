// The logic code will be written here

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
}