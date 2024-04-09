
////////////////msission 1////////////////////
let ticker = 1
while (ticker <= 100) {
    ticker++
    console.log(ticker)
}



////////////////msission 2////////////////////

let first = parseInt(prompt("write the first number"));
let second = parseInt(prompt("write the second number"));
let third = parseInt(prompt("write the third number"));
let fourth = parseInt(prompt("write the fourth number"));
let fifth = parseInt(prompt("write the fifth number"));

var sum = first + second + third + fourth + fifth;
console.log(sum);


////////////////msission 3////////////////////

let counter = 1;
while (counter <= 50) {
    let number = counter * 2;
    console.log(number);
    counter++;
}

////////////////mission 4////////////////////

let number = 1
for (let x = 1; x < 50; x++) {
    console.log(number ** 3)
}

////////////////mission 5////////////////////

let num = parseInt(prompt("Please enter an integer:"));
let factorial = 1;

if (num >= 0 && Number.isInteger(num)) {
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log("The factorial of", num, "is:", factorial);
} else {
    console.log("Invalid input. Please enter a non-negative integer.");
}


////////////////mission 6////////////////////
let min = Number.MAX_SAFE_INTEGER
let max = Number.MIN_SAFE_INTEGER

for (let i = 1; i <= 5; i++) {
    let number = parseFloat(prompt("please enter a number"))
    if (!isNaN(number)) {
        min = Math.min(min.number)
        max = Math.max(max.number)
    } else {
        console.log("Invalid input. Please enter a valid number.");

    }
}


console.log("Minimum number:", min);
console.log("Maximum number:", max);


////////////////mission 7////////////////////

for (i = 0; i < 101; i++) {
    console.log(i);
};

////////////////mission 7////////////////////

number = 1;

for (let x = 1; x <= 50; x++) {
    number++;
    console.log(number * 2);
};

////////////////mission 8////////////////////


let num2;
let factorial2 = 1;

do {
    num2 = parseInt(prompt("Please enter a positive integer:"));
    if (isNaN(num2) || num2 <= 0) {
        console.log("Invalid input. Please enter a positive integer.");
    }
} while (isNaN(num2) || num2 <= 0);

for (let i = 1; i <= num2; i++) {
    factorial *= i;
}

console.log("The factorial of", num2, "is:", factorial);



////////////////mission 9////////////////////
counter = 1;
do {
    let number = counter * 2;
    console.log(number);
    counter++;
} while (counter <= 50)



////////////////mission 10////////////////////

let userInput;
let numbers = [];

do {
    userInput = parseFloat(prompt("Please enter a positive number (enter 0 or a negative number to finish):"));
    if (userInput > 0 && !isNaN(userInput)) {
        numbers.push(userInput);
    }
} while (userInput > 0);

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log("Maximum number:", maximum);
console.log("Minimum number:", minimum);
