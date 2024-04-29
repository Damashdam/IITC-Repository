function resetGame() {
    number1.innerHTML = "?";
    number2.innerHTML = "?";
    number3.innerHTML = "?";
    number4.innerHTML = "?";

    userButtons.forEach(function (button) {
        button.innerHTML = "0";
    });

    document.querySelector(".addedSpan").innerHTML = "";
}


const number1 = document.querySelector(".randomNumber1");
const number2 = document.querySelector(".randomNumber2");
const number3 = document.querySelector(".randomNumber3");
const number4 = document.querySelector(".randomNumber4");


let randomNumber1 = parseInt(Math.random() * 9 + 1);
let randomNumber2 = parseInt(Math.random() * 9 + 1);
let randomNumber3 = parseInt(Math.random() * 9 + 1);
let randomNumber4 = parseInt(Math.random() * 9 + 1);


number1.innerHTML = randomNumber1;
number2.innerHTML = randomNumber2;
number3.innerHTML = randomNumber3;
number4.innerHTML = randomNumber4;
number1.innerHTML = "?";
number2.innerHTML = "?";
number3.innerHTML = "?";
number4.innerHTML = "?";



let userButtons = document.querySelectorAll(".buttons");
let userButton1 = document.querySelectorAll(".button1")[0];
let userButton2 = document.querySelectorAll(".button2")[0];
let userButton3 = document.querySelectorAll(".button3")[0];
let userButton4 = document.querySelectorAll(".button4")[0];

userButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let currentValue = parseInt(button.innerHTML);
        currentValue++;
        if (currentValue > 10) {
            currentValue = 0;
        }
        button.innerHTML = currentValue;
    });
});



const goButton = document.querySelector(".buttonGo");

goButton.addEventListener("click", function () {
    const addedDiv = document.createElement("div");
    const addedButton1 = document.createElement("button");
    const addedButton2 = document.createElement("button");
    const addedButton3 = document.createElement("button");
    const addedButton4 = document.createElement("button");
    const bulls = document.createElement("h1");
    const cows = document.createElement("h1");
    const message = document.createElement("h2");

    document.querySelector(".addedSpan").appendChild(addedDiv);
    addedDiv.appendChild(addedButton1);
    addedDiv.appendChild(addedButton2);
    addedDiv.appendChild(addedButton3);
    addedDiv.appendChild(addedButton4);
    addedDiv.appendChild(bulls);
    addedDiv.appendChild(cows);
    document.querySelector(".addedSpan").appendChild(message);

    addedDiv.classList.add("numbersWrapper");
    addedButton1.classList.add("buttons");
    addedButton2.classList.add("buttons");
    addedButton3.classList.add("buttons");
    addedButton4.classList.add("buttons");
    bulls.classList.add("bullsCowsStyle");
    cows.classList.add("bullsCowsStyle");

    addedButton1.innerHTML = userButton1.innerHTML
    addedButton2.innerHTML = userButton2.innerHTML
    addedButton3.innerHTML = userButton3.innerHTML
    addedButton4.innerHTML = userButton4.innerHTML


    ////////////////bulls //////////////////
    let bullsCount = 0;
    if (addedButton1.innerHTML == randomNumber1) {
        bullsCount++;
    }
    if (addedButton2.innerHTML == randomNumber2) {
        bullsCount++;
    }
    if (addedButton3.innerHTML == randomNumber3) {
        bullsCount++;
    }
    if (addedButton4.innerHTML == randomNumber4) {
        bullsCount++;
    }
    bulls.innerHTML = bullsCount;

    ////////////////cows //////////////////
    let cowsCount = 0;
    if (
        addedButton1.innerHTML == randomNumber2 ||
        addedButton1.innerHTML == randomNumber3 ||
        addedButton1.innerHTML == randomNumber4
    ) {
        cowsCount++;
    }
    if (
        addedButton2.innerHTML == randomNumber1 ||
        addedButton2.innerHTML == randomNumber3 ||
        addedButton2.innerHTML == randomNumber4
    ) {
        cowsCount++;
    }
    if (
        addedButton3.innerHTML == randomNumber1 ||
        addedButton3.innerHTML == randomNumber2 ||
        addedButton3.innerHTML == randomNumber4
    ) {
        cowsCount++;
    }
    if (
        addedButton4.innerHTML == randomNumber1 ||
        addedButton4.innerHTML == randomNumber2 ||
        addedButton4.innerHTML == randomNumber3
    ) {
        cowsCount++;
    }
    cows.innerHTML = cowsCount;

    //////////////// Winning Message //////////////////
    if (bullsCount === 4) {
        message.innerHTML = "Congratulations! You've guessed all numbers correctly!";
    } else {
        message.innerHTML = "Try again!";
    }
});

const newGameButton = document.querySelector(".newGameButton");

newGameButton.addEventListener("click", function () {
    resetGame();
});
