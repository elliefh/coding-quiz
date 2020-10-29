var bigText = document.getElementById("bigText");
var smallText = document.getElementById("smallText");
var viewScores = document.getElementById("highscores");
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
var timer = document.getElementById("timer");

function startPage() {
    bigText.textContent = "Coding Quiz Challenge";
    smallText.textContent = "Answer as many of the following code-related questions within the time limit of 120 seconds. Keep in mind that incorrect answers will result in a time reduction of 10 seconds. Good luck!";
    viewScores.textContent = "View Highscores";
    startBtn.innerHTML = "Start Quiz";
    list.appendChild(startBtn);
    viewScores.addEventListener("click", scores);
    startBtn.addEventListener("click", questionOne);  
}

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
    button1.addEventListener("click", questionTwo);
    button2.addEventListener("click", questionTwo);
    button3.addEventListener("click", questionTwo);
    button4.addEventListener("click", questionTwo);
}

function questionTwo() {
    bigText.textContent = "Q2: "
    button1.innerHTML = "A:";
    button2.innerHTML = "B:";
    button3.innerHTML = "C:";
    button4.innerHTML = "D:";
    button1.addEventListener("click", questionThree);
    button2.addEventListener("click", questionThree);
    button3.addEventListener("click", questionThree);
    button4.addEventListener("click", questionThree);
}

function questionThree() {
    bigText.textContent = "Q3: "
    button1.innerHTML = "A: ";
    button2.innerHTML = "B: ";
    button3.innerHTML = "C: ";
    button4.innerHTML = "D: ";
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
    submitBtn.innerHTML = "Submit";
    list.appendChild(submitBtn);
    submitBtn.addEventListener("click", scores);    
}

function scores() {
    list.removeChild(submitBtn);
    bigText.textContent = "Highscores";
    smallText.textContent = "";
    returnBtn.innerHTML = "Return";
    clearBtn.innerHTML = "Clear Highscores";
    list.appendChild(returnBtn);
    list.appendChild(clearBtn);
    returnBtn.addEventListener("click", clear);    
    clearBtn.addEventListener("click");        
}

function clear() {
    list.removeChild(returnBtn);
    list.removeChild(clearBtn);
    startPage();
}

startPage();
