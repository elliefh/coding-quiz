var bigText = document.getElementById("bigText");
var smallText = document.getElementById("smallText");
var list = document.getElementById("list");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
var score = 0;
var timer = document.getElementById("timer");

function startPage() {
    bigText.textContent = "Coding Quiz Challenge";
    smallText.textContent = "Answer as many of the following code-related questions within the time limit of 120 seconds. Keep in mind that incorrect answers will result in a time reduction of 10 seconds. Good luck!";
    button1.innerHTML = "Start Quiz";
    list.appendChild(button1);
    document.querySelector("button").addEventListener("click", questionOne);
}

function questionOne() {
    alert("hi!");
    bigText.textContent = "Commonly used data types DO NOT include:"
    smallText.textContent = "";
    button1.innerHTML = "Strings";
    button2.innerHTML = "Booleans";
    button3.innerHTML = "Alerts";
    button4.innerHTML = "Numbers";
    list.appendChild(button2);
    list.appendChild(button3);
    list.appendChild(button4);
}

function questionTwo() {
    bigText.textContent = "Commonly used data types DO NOT include:"
    answer1.innerHTML = "Strings";
    answer2.innerHTML = "Booleans";
    answer3.innerHTML = "Alerts";
    answer4.innerHTML = "Numbers";
}

function questionThree() {
    bigText.textContent = "Commonly used data types DO NOT include:"
    answer1.innerHTML = "Strings";
    answer2.innerHTML = "Booleans";
    answer3.innerHTML = "Alerts";
    answer4.innerHTML = "Numbers";
}

function questionFour() {
    bigText.textContent = "Commonly used data types DO NOT include:"
    answer1.innerHTML = "Strings";
    answer2.innerHTML = "Booleans";
    answer3.innerHTML = "Alerts";
    answer4.innerHTML = "Numbers";
}

function questionFive() {
    bigText.textContent = "Commonly used data types DO NOT include:"
    answer1.innerHTML = "Strings";
    answer2.innerHTML = "Booleans";
    answer3.innerHTML = "Alerts";
    answer4.innerHTML = "Numbers";
}

startPage();
