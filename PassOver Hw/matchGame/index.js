let startButton = document.querySelector(".btn");
let gameButtons = document.querySelectorAll(".game_button");
let clickedButtons = [];

startButton.addEventListener("click", function () {
    document.querySelector(".wrapper").classList.remove("hidden");
    document.querySelector(".btn").classList.add("hidden");
});

function startGame() {
    startButton.addEventListener("click", function () {
        document.querySelector("header h1").innerHTML = "You have started, please select matching images"
    });




    function hideFalse() {
    }



    gameButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (!button.classList.contains("invisible")) {
                button.classList.add("invisible");
                clickedButtons.push(button);
                if (clickedButtons.length == 2) {
                    if (clickedButtons[0].value === clickedButtons[1].value) {
                        alert("You have won");
                        clickedButtons.forEach(function (btn) {
                            btn.classList.add("invisible");
                        });
                    }

                    ////////////////////////////////////// problem here////////////////////////////////////////////////////////////////////////////////////////////////
                    // else {
                    //     setTimeout(function (button) {
                    //         button.classList.remove("invisible");
                    //     }, 1500);
                    // }
                    clickedButtons = [];
                }
            }



        });
    });

    let moves = 0;

    gameButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            moves++;
            document.querySelector(".moves").innerHTML = moves;
        });
    });

    const timer = document.querySelector(".timer");
    let count = 0;
    setInterval(function () {
        count++;
        timer.innerHTML = count;
    }, 1000);
}

startGame();

