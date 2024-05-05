// let array = [5, 3, 8, 4, 2];
// let newArray = [...array];

// for (let i = 0; i < newArray.length; i++) {
//     for (let j = 0; j < newArray.length - 1 - i; j++) {
//         if (newArray[j] > newArray[j + 1]) {
//             let temp = newArray[j];
//             newArray[j] = newArray[j + 1];
//             newArray[j + 1] = temp;
//         }
//     }
// }

// console.log(newArray); // Output: [2, 3, 4, 5, 8]


///////sort_2//////
// for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1 - i; j++) {
//         if (array[j] > array[j + 1]) {
//             let min = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = min;
//         }
//     }
// }

// console.log(array);




//////js_local_storage_1.5////

// let count = 0;

// document.querySelector(".incButton").addEventListener('click', function () {
//     count++
//     document.querySelector(".paragraph").innerHTML = count;
//     addToLocalStorage();

// })

// function addToLocalStorage() {
//     localStorage.setItem('counter', count)
//     localStorage.getItem('counter')

// }

// window.addEventListener('load', function () {
//     count = parseInt(localStorage.getItem('counter')) || 0;
//     document.querySelector(".paragraph").innerHTML = count;
// });


//////js_local_storage_2////

// function addTodo() {
//     let todoInput = document.getElementById('todoInput');
//     let todoText = todoInput.value.trim();
//     if (todoText === '') return;
//     todos.push(todoText);
//     todoInput.value = '';
//     localStorage.setItem('todos', JSON.stringify(todos));
// }


// function showTodos() {
//     let todoList = document.getElementById('todoList');
//     todoList.innerHTML = '';
//     todos.forEach(todo => {
//         let li = document.createElement('li');
//         li.textContent = todo;
//         todoList.appendChild(li);
//     });
// }

// function clearTodos() {
//     localStorage.removeItem('todos');
//     todos = [];
//     showTodos();
// }


// document.getElementById('addTodo').addEventListener('click', addTodo);


// document.getElementById('showTodos').addEventListener('click', showTodos);


// document.getElementById('clearTodos').addEventListener('click', clearTodos);


// let todos = JSON.parse(localStorage.getItem('todos')) || [];


//////js_local_storage_2.5///////
// function addTodo() {
//     let todoInput = document.getElementById('todoInput');
//     let todoText = todoInput.value.trim();
//     if (todoText === '') return;
//     todos.push(todoText);
//     todoInput.value = '';
//     localStorage.setItem('todos', JSON.stringify(todos));
// }


// function showTodos() {
//     let todoList = document.getElementById('todoList');
//     todoList.innerHTML = '';
//     todos.forEach(todo => {
//         let li = document.createElement('li');
//         li.textContent = todo;
//         todoList.appendChild(li);
//         changeToGreen(li); // Pass 'li' as an argument
//     });
// }


// function clearTodos() {
//     localStorage.removeItem('todos');
//     todos = [];
//     showTodos();
// }



// let clicks = 0;

// function changeToGreen(pressed) {

//     pressed.addEventListener("click", function () {
//         clicks++;
//         if (clicks === 1) {

//             pressed.style.color = "green";
//         }
//         if (clicks === 2) {
//             pressed.style.color = "black";
//             clicks = 0

//         }

//     });
// }

// function removeGreen(pressed) {

// }


// document.getElementById('addTodo').addEventListener('click', addTodo);
// document.getElementById('showTodos').addEventListener('click', showTodos);
// document.getElementById('clearTodos').addEventListener('click', clearTodos);


// let todos = JSON.parse(localStorage.getItem('todos')) || [];
