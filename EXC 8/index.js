
////array_find_1/////
// let array = [1, 3, 5, -2, 7];


// let foundNumber = array.find(num => num == -2)
// if (foundNumber == -2) {
//     console.log("yes")
// }
// else {
//     console.log("no")
// }

////array_find_2/////
// let array = [{ name: "Moshe Kupernikos", age: 33 }, { name: "Shimon", age: 21 }, { name: "Joe", age: 34 }]
// function findPersonByAge(age) {
//     let foundedPerson = array.find(person => age === person.age)
//     if (foundedPerson) {
//         return foundedPerson
//     }
//     else {
//         return !!foundedPerson
//     }

// }
// console.log(findPersonByAge(33));
// console.log(findPersonByAge(11));

///array_splice_1////

// let array = [1, 3, 5, -2, 7];
// array.splice(2, 1)
// console.log(array)




///array_splice_2////
// let array = [{ name: "Moshe Kupernikos", age: 33 }, { name: "Shimon", age: 21 }, { name: "Joe", age: 34 },];

// array.splice(0, 1)
// console.log(array)


//////array_filter_1//////


// let array = [1, 4, 3, 5, -2, 7];

// const result = array.filter(checkIfDividedBy2)

// function checkIfDividedBy2(age) {
//     return age = age % 2 == 0;
// }
// console.log(result);


/////array_filter_2/////

// let array = [{ name: "Moshe Kupernikos", age: 33 }, { name: "Shimon", age: 21 }, { name: "Joe", age: 34 }];

// let result = array.filter(checkIfBiggerThen34);

// function checkIfBiggerThen34(person) {
//     return person.age >= 34;
// }

// console.log(result);

/////array_reduce_1/////

// let array = [1, 2, 3, 4, 5];
// function sumThis(total, num) {
//     return total + num;
// }

// let sum = array.reduce(sumThis, 0);

// console.log(sum);

///array_map_1////

// let paragraphs = document.querySelector(".paragraphs");
// let names = ["Alice", "Bob", "Charlie", "David"];

// let newListOfNames = names.map(createElements);

// function createElements(name) {
//     let newList = document.createElement("li");
//     newList.innerHTML = name;
//     return newList;
// }

// function returnAll() {
//     let newList = document.createElement("ul");
//     newListOfNames.map(name => {
//         newList.appendChild(name);
//     });
//     paragraphs.appendChild(newList);
// }

// returnAll();
