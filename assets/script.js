var bigText = document.getElementById("bigText");
var smallText = document.getElementById("smallText");
var header = document.getElementById("header");
var viewScores = document.getElementById("highscores");
var countdown = document.getElementById("countdown");
var list = document.getElementById("list");
var startBtn = document.createElement("button");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
var submitBtn = document.createElement("button");
var returnBtn = document.createElement("button");
var clearBtn = document.createElement("button");

var score = 0;
var timeLeft = 10;

function startPage() {
    bigText.textContent = "Coding Quiz Challenge";
    smallText.textContent = "Answer as many of the following code-related questions within the 100 second time limit. Keep in mind that incorrect answers will result in a time reduction of 10 seconds. Good luck!";
    viewScores.textContent = "View Highscores";
    countdown.innerHTML = "Countdown: Ready";
    startBtn.innerHTML = "Start Quiz";
    list.appendChild(startBtn);

    bigText.style.textAlign = "center";
    smallText.style.textAlign = "center";
    startBtn.style.textAlign = "center";
    viewScores.style.textDecoration = "underline";
    list.style.justifyContent = "center";
    viewScores.addEventListener("click", clearSubmitBtn);
    startBtn.addEventListener("click", questionOne);  
}

function questionOne() {
    var timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            countdown.innerHTML = "Countdown: Time's out!";
            endPage();
        }
        else {
            countdown.innerHTML = "Countdown: " + timeLeft + " seconds"
        }
        timeLeft--;
    }, 1000);
    
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
    button1.addEventListener("click", questionTwo);
    button2.addEventListener("click", questionTwo);
    button3.addEventListener("click", questionTwo);
    button4.addEventListener("click", questionTwo);
}

function questionTwo() {
    bigText.textContent = "Q2: The condition of an if/else statement is enclosed within:"
    button1.innerHTML = "A: Quotes";
    button2.innerHTML = "B: Curly brackets";
    button3.innerHTML = "C: Parentheses";
    button4.innerHTML = "D: Square brackets";
    list.style.flexDirection = "column";
    button1.addEventListener("click", questionThree);
    button2.addEventListener("click", questionThree);
    button3.addEventListener("click", questionThree);
    button4.addEventListener("click", questionThree);
}

function questionThree() {
    bigText.textContent = "Q3: Arrays in JavaScript can be used to store:"
    button1.innerHTML = "A: Numbers";
    button2.innerHTML = "B: Strings";
    button3.innerHTML = "C: Booleans and other arrays";
    button4.innerHTML = "D: All of the above";
    list.style.flexDirection = "column";
    button1.addEventListener("click", endPage);
    button2.addEventListener("click", endPage);
    button3.addEventListener("click", endPage);
    button4.addEventListener("click", endPage);
}

function endPage() {
    list.removeChild(button1); 
    list.removeChild(button2); 
    list.removeChild(button3); 
    list.removeChild(button4); 
    bigText.textContent = "All done!";
    smallText.textContent = "Your final score is: " + score;
    bigText.style.textAlign = "center";
    smallText.style.textAlign = "center";
    var form = document.createElement("form");
    submitBtn.innerHTML = "Submit";
    submitBtn.style.textAlign = "center";
    list.appendChild(submitBtn);
    list.style.flexDirection = "row";
    list.style.justifyContent = "center";
    submitBtn.addEventListener("click", clearSubmitBtn);    
}

function clearSubmitBtn() {
    list.removeChild(list.childNodes[0]);
    scores();
}

function scores() {
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

function returnHome() {
    list.removeChild(returnBtn);
    list.removeChild(clearBtn);

    button1.removeEventListener("click", questionTwo);
    button1.removeEventListener("click", questionThree);
    button1.removeEventListener("click", endPage);
    button2.removeEventListener("click", questionTwo);
    button2.removeEventListener("click", questionThree);
    button2.removeEventListener("click", endPage);
    button3.removeEventListener("click", questionTwo);
    button3.removeEventListener("click", questionThree);
    button3.removeEventListener("click", endPage);
    button4.removeEventListener("click", questionTwo);
    button4.removeEventListener("click", questionThree);
    button4.removeEventListener("click", endPage);

    startPage();
}

startPage();
