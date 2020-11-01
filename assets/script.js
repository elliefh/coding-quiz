// variable declarations
// the following variables will be accessed and updated with each click to provide the User with the neccessary text, such as information/rules on the coding quiz, questions for the quiz, and information at the end of the quiz
var list = document.getElementById("list");
var bigText = document.getElementById("bigText");
var smallText = document.getElementById("smallText");
var header = document.getElementById("header");

// the following variables will be visible throughout the quiz to see the countdown timer as well as the highscores 
var viewScores = document.getElementById("highscores");
var countdown = document.getElementById("countdown");

// the following variables will be accessed and updated to alert the User with real-time feedback on right/wrong answers
var alert = document.getElementById("alert");
var feedback = document.createElement("p");

// the following variables are created for various buttons presented in the quiz
var startBtn = document.createElement("button");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
var submitBtn = document.createElement("button");
var returnBtn = document.createElement("button");
var clearBtn = document.createElement("button");

// the following variables keep track of the User's scores and time left
var score = 0;
var timeLeft = 0;
var timer = null;
var storedScores = [];

// programming the first visible page, with information and rules of the Coding Quiz
function startPage() {
    // updating the HTML with appropriate texts and buttons
    bigText.textContent = "Coding Quiz Challenge";
    smallText.textContent = "Answer as many of the following code-related questions within the 100 second time limit. Keep in mind that incorrect answers will result in a time reduction of 10 seconds. Good luck!";
    viewScores.textContent = "View Highscores";
    countdown.innerHTML = "Countdown: Ready";
    startBtn.innerHTML = "Start Quiz";
    list.appendChild(startBtn);

    // updating the CSS styling for the first visible page
    bigText.style.textAlign = "center";
    smallText.style.textAlign = "center";
    startBtn.style.textAlign = "center";
    viewScores.style.textDecoration = "underline";
    list.style.justifyContent = "center";

    // updating the eventlistners to ensure the right page appears when clicked 
    viewScores.addEventListener("click", scores);
    startBtn.addEventListener("click", startTimer);
}

// programming for the countdown timer, which is executed when the User clicks on the "Start Quiz" button
// the timer is shown on the screen, so the User knows how much time is left
// whenever time runs out, the User is led to the game over page 
function startTimer() {
    timeLeft = 100;
    timer = setInterval(function() {
        if (timeLeft <= 0) {
            countdown.innerHTML = "Countdown: Time's out!";
            endPage();
        }
        else {
            countdown.innerHTML = "Countdown: " + timeLeft + " seconds"
        }
        timeLeft--;
    }, 1000);

// when the timer starts, the first question function is executed 
    questionOne();
}

// programming for the alerts shown when the User answers the question correctly, which results in 10 additional score points 
function correct() {
    score = score + 10;
    feedback.textContent = "Correct! You scored +10 points!";
    feedback.style.color = "green";
    alert.appendChild(feedback);
}

// programming for the alerts shown when the User answers the question incorrectly, which results in a 10 sec time deduction
function incorrect() {
    timeLeft = timeLeft - 10;
    feedback.textContent = "Incorrect! You've lost 10 seconds!";
    feedback.style.color = "red";
    alert.appendChild(feedback);
}

// programming for question 1, which updates the texts and buttons to show a question and multiple choice answers
// updating the eventlistners to ensure the next question appears when clicked
// an alert shows up in the following question, providing the User with feedback on whether they answered the question correctly or incorrectly  
function questionOne() {
    list.removeChild(startBtn); 
    bigText.textContent = "Q1: Commonly used data types DO NOT include:"
    smallText.textContent = "";
    button1.innerHTML = "A: Strings";
    button2.innerHTML = "B: Booleans";
    button3.innerHTML = "C: Alerts";
    button4.innerHTML = "D: Numbers";
    list.appendChild(button1);
    list.appendChild(button2);
    list.appendChild(button3);
    list.appendChild(button4);
    list.style.flexDirection = "column";
    list.style.justifyContent = "flex-start";
    bigText.style.textAlign = "left";
    button1.onclick = incorrect;
    button2.onclick = incorrect;
    button3.onclick = correct;
    button4.onclick = incorrect;
    button1.addEventListener("click", questionTwo);
    button2.addEventListener("click", questionTwo);
    button3.addEventListener("click", questionTwo);
    button4.addEventListener("click", questionTwo);
}

// programming for question 2, which updates the texts and buttons to show a question and multiple choice answers
// updating the eventlistners to ensure the next question appears when clicked
// an alert shows up in the following question, providing the User with feedback on whether they answered the question correctly or incorrectly 
function questionTwo() {
    bigText.textContent = "Q2: The condition of an if/else statement is enclosed within:"
    button1.innerHTML = "A: Quotes";
    button2.innerHTML = "B: Parentheses";
    button3.innerHTML = "C: Curly brackets";
    button4.innerHTML = "D: Square brackets";
    list.style.flexDirection = "column";
    button1.onclick = incorrect;
    button2.onclick = correct;
    button3.onclick = incorrect;
    button4.onclick = incorrect;
    button1.addEventListener("click", questionThree);
    button2.addEventListener("click", questionThree);
    button3.addEventListener("click", questionThree);
    button4.addEventListener("click", questionThree);
}

// programming for question 3, which updates the texts and buttons to show a question and multiple choice answers
// updating the eventlistners to ensure the next question appears when clicked
// an alert shows up in the following question, providing the User with feedback on whether they answered the question correctly or incorrectly 
function questionThree() {
    bigText.textContent = "Q3: Arrays in JavaScript can be used to store:"
    button1.innerHTML = "A: Numbers";
    button2.innerHTML = "B: Strings";
    button3.innerHTML = "C: Booleans and other arrays";
    button4.innerHTML = "D: All of the above";
    list.style.flexDirection = "column";
    button1.onclick = incorrect;
    button2.onclick = incorrect;
    button3.onclick = incorrect;
    button4.onclick = correct;
    button1.addEventListener("click", questionFour);
    button2.addEventListener("click", questionFour);
    button3.addEventListener("click", questionFour);
    button4.addEventListener("click", questionFour);
}

// programming for question 4, which updates the texts and buttons to show a question and multiple choice answers
// updating the eventlistners to ensure the next question appears when clicked
// an alert shows up in the following question, providing the User with feedback on whether they answered the question correctly or incorrectly 
function questionFour() {
    bigText.textContent = "Q4: A variable is declared in javascript by typing:"
    button1.innerHTML = "A: var";
    button2.innerHTML = "B: vari";
    button3.innerHTML = "C: variable";
    button4.innerHTML = "D: v";
    list.style.flexDirection = "column";
    button1.onclick = correct;
    button2.onclick = incorrect;
    button3.onclick = incorrect;
    button4.onclick = incorrect;
    button1.addEventListener("click", questionFive);
    button2.addEventListener("click", questionFive);
    button3.addEventListener("click", questionFive);
    button4.addEventListener("click", questionFive);
}

// programming for question 5, which updates the texts and buttons to show a question and multiple choice answers
// updating the eventlistners to ensure the end page appears when clicked
function questionFive() {
    bigText.textContent = "Q5: The definition of CSS is the following:"
    button1.innerHTML = "A: The language for programming web pages";
    button2.innerHTML = "B: The language for building web pages";
    button3.innerHTML = "C: The language for styling web pages";
    button4.innerHTML = "D: None of the above";
    list.style.flexDirection = "column";
    button1.onclick = incorrect;
    button2.onclick = incorrect;
    button3.onclick = correct;
    button4.onclick = incorrect;
    button1.addEventListener("click", endPage);
    button2.addEventListener("click", endPage);
    button3.addEventListener("click", endPage);
    button4.addEventListener("click", endPage);
}

// programming for the eng page, which shows the User's total score and provides a form to submit their score with their initials 
function endPage() {
    clearInterval(timer);
    countdown.innerHTML = "Countdown: All done!";
    list.removeChild(button1); 
    list.removeChild(button2); 
    list.removeChild(button3); 
    list.removeChild(button4); 
    bigText.textContent = "All done!";
    smallText.textContent = "Your final score is: " + score + ". Put your initials below!";    
    bigText.style.textAlign = "center";
    smallText.style.textAlign = "center";
    submitBtn.innerHTML = "Submit";
    submitBtn.style.textAlign = "center";
    list.appendChild(submitBtn);
    list.style.flexDirection = "row";
    list.style.justifyContent = "center";

    // setting up the form 
    var form = document.createElement("form");
    form.setAttribute("id", "submitForm");
    document.getElementById("submission").appendChild(form);
    var formInput = document.createElement("INPUT");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("placeholder", "Your Initials");
    formInput.setAttribute("id", "initials");
    document.getElementById("submitForm").appendChild(formInput);
    document.getElementById("submission").style.justifyContent = "center";
    document.getElementById("submission").style.margin = "5px";
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        var submittedInitials = document.querySelector("#initials").value;
        if (submittedInitials==="") {
            feedback.textContent = "Form cannot be left blank! Please submit initials.";        
        }
        else {
            localStorage.setItem("initials", submittedInitials);
            localStorage.setItem("scores", score);
            scores();
        }
    }); 
}

// programming for the score page, which shows scores and clears unnecessary buttons
function scores() {
    list.removeChild(submitBtn);
    document.getElementById("submitForm").remove();
    alert.removeChild(feedback);
    bigText.textContent = "Highscores";
    smallText.textContent = "";
    returnBtn.innerHTML = "Return";
    clearBtn.innerHTML = "Clear Highscores";
    returnBtn.style.textAlign = "center";
    clearBtn.style.textAlign = "center";
    list.appendChild(returnBtn);
    list.appendChild(clearBtn);
    list.style.flexDirection = "row";
    list.style.justifyContent = "center";
    returnBtn.addEventListener("click", returnHome);    
    // clearBtn.addEventListener("click");        
}

// programming to reset everything, including the event listeners associated with the buttons, clearning buttons no longer needed, and clearing the score 
// executes the startPage function to take the User back to the first visible page
function returnHome() {
    list.removeChild(returnBtn);
    list.removeChild(clearBtn);
    button1.removeEventListener("click", questionTwo);
    button1.removeEventListener("click", questionThree);
    button1.removeEventListener("click", questionFour);
    button1.removeEventListener("click", questionFive);
    button1.removeEventListener("click", endPage);
    button2.removeEventListener("click", questionTwo);
    button2.removeEventListener("click", questionThree);
    button2.removeEventListener("click", questionFour);
    button2.removeEventListener("click", questionFive);
    button2.removeEventListener("click", endPage);
    button3.removeEventListener("click", questionTwo);
    button3.removeEventListener("click", questionThree);
    button3.removeEventListener("click", questionFour);
    button3.removeEventListener("click", questionFive);
    button3.removeEventListener("click", endPage);
    button4.removeEventListener("click", questionTwo);
    button4.removeEventListener("click", questionThree);
    button4.removeEventListener("click", questionFour);
    button4.removeEventListener("click", questionFive);
    button4.removeEventListener("click", endPage);
    score = 0;

    startPage();
}

// executes the startPage function so the user is presented with the first visible page
startPage();
