// function Name(parameter1, parameter2, ...) {
//     work of the function (body)
// }

// Parameter: A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// Argument: An argument is the value that is passed to the function when it is called (it’s a call time term).

let weather = "rainy";


function jikh() {  //this is known as  a custom function
    let message = "solo to the yolo";
    console.log("jikh is better");
    console.log("Today the weather is " + weather); //The function can access the outer variable as it is global
};

// console.log(message)  This gives error as this is out of the scope of the function

jikh(); //this is used to invoke(execute the function)

function tomorrow() {
    weather = "sunny" //functions can modify the value of the global variable
    console.log("Tomorrow the weather is " + weather);
};

tomorrow();

let userName = "Sam"

function changeUser() {
    let userName = "John"; //if two variables with the same name are declared, the one inside the function overshadows the global one
    console.log('Welcome ' + userName )
}

changeUser();
console.log("Welcome " + userName); //outside the function the global variable is used


const truth = "Ikh is better than jikh"
const correction = truth.replace("Ikh", "Wikh") //the values given to function in parenthesis are called parameters or arguments or attributes
console.log(correction);

function hello(name = "chris") { //provided the option to take optional parameters and change value in parenthesis if necessary
    console.log(`Hello ${name}!`);
}

hello(); //gives back chris by default
hello("Ari"); //gives back Ari


function showMessage(from,text) { //this function has been given two parameters namely from and text
    console.log(from + ": " + text);
}

showMessage("Computer", "John is the new user") //arguments are given to the function in the same format as the parameters

function newMessage(from, text) {
    from = '*' + from +  '*';
    console.log(from + ": " + text);
};

let from = "Computer";

newMessage("Computer", "Hello User!");

console.log(from); //uses the global variable as the other one is out of scope

newMessage("Unknown"); //as no argument for text parameter is given it returns as undefined.
//to avoid this, parameters are given default values

function exampleDefault(from = "Computer", text = "No text given") {
    console.log(from + ": " + text);
}

exampleDefault(); //the default value when no default value is given is undefined.

//for more complex expressions, default value of a parameter can be another function
// function showMessage(from, text = anotherFunction())
//When no text is given, anotherFunction() works as default


// function name() {
//   let userName = window.prompt("What is your name", "Jeff");             **COMPLEX 
//   return userName                                                            EXPRESSION
// }                                                                                   SUCCESS**

// function exampleComplex(salutation, person = name()) {
//     console.log(salutation + person)
// };
// exampleComplex("Good Morning Mr/Mrs. ");

// Alternate way of making a default paramater

// Method 1
function math(answer) {
    if (answer === undefined) {
        answer = "Theres no solution for this problem";
    }
    console.log(answer)
};
math(5);
math();

// Method 2
function ganit(solution) {
    solution = solution || "Theres no answer to this question";
    console.log(solution);
};
ganit(10);
ganit();

// Method 3(more modern)
function showCount(count) {
    console.log(count ?? 'none'); // "??" is called the  nullish coalescing operator
}

showCount(8);
showCount();
showCount(null);

function sum(a,b) {
    return a + b;          //The directive return can be in any place of the function. 
                          //When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).
}

let result = sum(10,20);
console.log(result);

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else { //this else is not required and is put here for better readability
//         return confirm("Do you have permission from your parents?");
//     };
// };

// let age = window.prompt("What is your age?");

// if (checkAge(age)) {
//     console.log("Go Ahead")
// } else {
//     console.log("Go to your room")
// }

function doNothing() {} //if a function does not return a value, it bydefault returns undefined.
console.log(doNothing() == undefined);

function emptyReturn() {
    return;                 //empty returns also returns the value undefined.
}
console.log(emptyReturn() === undefined);

//Never break a line for a long return
// return 
//         something very long
// this is considered the same as 
// return;
//         something very long  
// JS assumes a semicolon when a new line is added
// if you want to break, do it like this
// return (
//     something very long
// )