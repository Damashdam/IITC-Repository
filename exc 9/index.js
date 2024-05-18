//////set_interval_1//////

// let startButton = document.querySelector('.startButton');
// let stopButton = document.querySelector(".stopButton");
// let timer = document.querySelector(".h1Timer");
// let interval;

// startButton.addEventListener("click", startTimer);
// stopButton.addEventListener("click", stopTimer);

// function startTimer() {
//     let counter = 0;
//     interval = setInterval(() => {
//         if (counter < 1000) {
//             timer.innerHTML = counter;
//             counter++;
//         } else {
//             clearInterval(interval);
//         }
//     }, 1);
// }

// function stopTimer() {
//     clearInterval(interval);
// }

////////set_interval_2///////
// let arrayOfNums = [1, 2, 3, 4, 5];
// let timer = document.querySelector(".h1Timer");
// let i = -1;

// function addToArrayElements() {
//     timer.innerHTML = arrayOfNums;

//     let interval = setInterval(() => {
//         i++;
//         if (i >= arrayOfNums.length) {
//             clearInterval(interval);
//         } else {
//             arrayOfNums[i]++;
//             timer.innerHTML = arrayOfNums.join(", ");
//         }
//     }, 1000);
// }

// addToArrayElements();


////////set_timeout_1///////
// function helloWithDelay() {
//     let interval = setInterval(() => {
//         setTimeout(() => {
//             console.log('HelloWorld');

//         }, 0);
//     }, 5000);
// }
// helloWithDelay();