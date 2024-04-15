//////array_operation_1//////
// const array_operation_1 = [];

// function calculate(arr) {
//     let sum = 0; // Initialize sum
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// const sum = calculate(array_operation_0);

// console.log("The sum of the elements in array_operation_0 is: " + sum);



//////array_operation_2//////

// const array_operation_0 = [];

// function average(arr) {
//     let average = 0;
//     for (let i = 0; i < arr.length; i++) {
//         average += arr[i];
//     }

//     return average;
// }

// const average_list = average(array_operation_0);

// console.log("The avarage of the elements in array_operation_0 is: " + average_list);



////array_operation_4//////
// function biggest(arr) {
//     let biggestValue = 0;
//     let biggestBook;

//     for (let i = 0; i < arr.length; i++) {
//         const book = arr[i];
//         const key = Object.keys(book)[0];
//         const value = book[key];

//         if (value > biggestValue) {
//             biggestValue = value;
//             biggestBook = key;
//         }
//     }

//     return biggestBook;
// }

// const biggest_book = biggest(array_operation_0);
// console.log(`The biggest book is ${biggest_book}`);



////array_operation_3//////

// const array_operation_0 = [
//     { book1: 100 },
//     { book2: 150 },
//     { book3: 80 },
//     { book4: 120 }
// ];

// function findBookWithFewestPages(arr) {
//     let minPages = Infinity;
//     let bookWithMinPages;

//     for (let i = 0; i < arr.length; i++) {
//         const book = arr[i];
//         const key = Object.keys(book)[0];
//         const pages = book[key];

//         if (pages < minPages) {
//             minPages = pages;
//             bookWithMinPages = key;
//         }
//     }

//     return bookWithMinPages;
// }

// const bookWithFewestPages = findBookWithFewestPages(array_operation_0);
// console.log(`The book with the fewest pages is "${bookWithFewestPages}"`);



////array_operation_5//////
// const array_operation_0 = [
//     { abc: 100 },
//     { book: 150 },
//     { the: 80 },
//     { shortest: 120 }
// ];

// function findBookWithShortestName(arr) {
//     let shortestNameLength = Infinity;
//     let bookWithShortestName;

//     for (let i = 0; i < arr.length; i++) {
//         const book = arr[i];
//         const key = Object.keys(book)[0];
//         const nameLength = key.length;

//         if (nameLength < shortestNameLength) {
//             shortestNameLength = nameLength;
//             bookWithShortestName = key;
//         }
//     }

//     return bookWithShortestName;
// }

// const bookWithShortestName = findBookWithShortestName(array_operation_0);
// console.log(`The book with the shortest name is "${bookWithShortestName}"`);



////array_operation_6//////


// const array_operation_0 = [
//     { abc: 100 },
//     { book: 150 },
//     { the: 80 },
//     { longestNameBook: 120 }
// ];

// function findBookWithLongestName(arr) {
//     let longestNameLength = 0;
//     let bookWithLongestName;

//     for (let i = 0; i < arr.length; i++) {
//         const book = arr[i];
//         const key = Object.keys(book)[0];
//         const nameLength = key.length;

//         if (nameLength > longestNameLength) {
//             longestNameLength = nameLength;
//             bookWithLongestName = key;
//         }
//     }

//     return bookWithLongestName;
// }

// const bookWithLongestName = findBookWithLongestName(array_operation_0);
// console.log(`The book with the longest name is "${bookWithLongestName}"`);
