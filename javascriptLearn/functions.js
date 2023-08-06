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
//   let userName = window.prompt("What is your name", "Jeff");         
//   return userName                                                       
// }                                                                               

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

function sayHi() {                      //this is known as function declaration
    console.log("Hi World!");
}

sayHi();

let sayHello = function() {         //this is known as function expression
    console.log("Hello World!")
};

sayHello();

console.log(sayHi);  //shows the function code as functions are values stored in variables
//as there are no parenthesis after the function name, it does not execute

let func = sayHi;  //this statement copies the value(function) stored in sayHi to variable func
//no parenthesis are used after sayHi because if they were used, func = sayHi() would write the result of the call sayHi() into func and not the function itself
//this works with function declaration as well 

func();

//NOTE: semicolon is not used after a function declaration but used for a function expression
// function *name*() {....} is the syntax for function declaration
// but for the expression, the simple syntax is continued like let number = 5;
// this is why its written as let func = function() {...};

// function ask(question, yes , no) {
//     if (confirm(question)) {
//         yes()
//     } else no();
// }                                                               **CALLBACK FUNCTION EXAMPLE**

// function showOK() {
//     console.log("You Agree!");
// }

// function showCancel() {
//     console.log("You Disagree!");
// }

// ask("Do you agree", showOK, showCancel)

// the arguements showOK and showCancel of ask are called callback functions or just callbacks
// the idea is to create a function and call it back if necessary for the code  

//To do this using function expression and make the code shorter

// ask (
//     "Do You agree",
//     function() {console.log("You agree");},              these functions are created in the ask and are known as anonymous functions as they have no name
//     function() {console.log("You disagree!");},          these functions are not accessible outside of the ask function
// );

//A function is a value representing an “action”
// Regular values like strings or numbers represent the data.

// A function can be perceived as an action.

// We can pass it between variables and run when we want.

// Difference between function expression and function declaration
// 1. syntax(already written, expression has comma and is on the right side of the assignment expression)

// 2. A Function Expression is created when the execution reaches it and is usable only from that moment.
// Once the execution flow passes to the right side of the assignment let sum = function… – here we go,
//  the function is created and can be used (assigned, called, etc. ) from now on.

//  BUT function declarations are different

//  A Function Declaration can be called earlier than it is defined.
//  For example, a global Function Declaration is visible in the whole script, no matter where it is.
// That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions.
//  We can think of it as an “initialization stage”.
// And after all Function Declarations are processed, the code is executed. So it has access to these functions.

//For example

//THIS CODE WORKS

// tellHi("Jeff");

// function tellHi(name) {
//     console.log(`Hello, ${name}`);
// }

//THIS CODE DOES NOT WORK

// tellHello("Smith");

// let tellHello = function(name) {
//     console.log(`Hello ${name}`);
// };

// 3.In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.
//The block in which the function is defined, it can be called in that block only
//if a function is defined in an if block, it can only be called in the if block

// let age = 16; // take 16 as an example

// if (age < 18) {
//   welcome();                \   (runs)
//                             |
//   function welcome() {      |
//     alert("Hello!");        |  Function Declaration is available
//   }                         |  everywhere in the block where it's declared
//                             |
//   welcome();                /   (runs)

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }
// }

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

// welcome();  Error: welcome is not defined

// What can we do to make welcome visible outside of if?
// The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

// let age = prompt("What is your age?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Hello!");
//   };

// } else {

//   welcome = function() {
//     alert("Greetings!");
//   };

// }

// welcome();  ok now

// Or we could simplify it even further using a question mark operator

// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   function() { alert("Hello!"); } :
//   function() { alert("Greetings!"); };

// welcome();  ok now

// ARROW FUNCTIONS

// SYNTAX
// let func = (arg1, arg2, arg3, ...., argN) => expression; 
//This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.
//Its a shorter way to write
// let func = function(arg1, arg2, arg3, ...., argN) {
//    return expresssion
// };

let plus = (a, b) => a + b;

// let sum = func(a, b) {
//     return a + b;
// };

console.log(plus(5,7)/3)

//If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

let double = n => n*2;
console.log(double(3));

// even for no arguements, parenthesis should be present
let greeting = () => console.log("Hello World!");
greeting();

// let age = window.prompt("What is your age?", 20);

// let welcome = (age < 18) ?
//     () => console.log("Hello!") :          **USE OF ARROW FUNCTIONS AND 
//     () => console.log("Good Day!");                     TERNARY OPERATOR

// welcome();  

let add = (a, b) => {           //this is known as a multiline arrow function, these are enclosed in curly braces
    let result = a + b;             
    return result;              //When using curly braces, return is return to return the value
};
console.log(add(7, 8));

let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    "Do You Agree?", 
    () => console.log("You Agree!"),
    () => console.log("You Disagree!")
);

// JAVASCRIPT CALL STACK

// A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. 
// It has the information on what function is currently being run and what functions are invoked from within that function…
// The call stack works based on the LIFO principle i.e., last-in-first-out.

// If the number of execution contexts exceeds the size of the stack, a stack overflow error will occur. FOR EX

// function fn() {
//     fn();
// }                this gives an error of stack

// fn();

// let number = () => window.prompt("Choose a number.", 0);
// let add7 = () => Number(number()) + 7;
// console.log(add7())

function multiply(number1, number2) {
        console.log(number1 * number2);
}

multiply(4, 10);

function capitilize(word) {
    let string = word.toString();
    let firstLetter = string.charAt(0);
    let upperCase = firstLetter.toUpperCase();
    let rest = word.slice(1);
    let lowerCase = rest.toLowerCase();
    console.log(upperCase + lowerCase);
}

capitilize("HeLLo");
capitilize("WORLD");
capitilize("people");

function lastLetter(word) {
    let string = word.toString();
    let letter = string.slice(-1);
    console.log(letter);
}

lastLetter("This SHIT WoRkS PerFecTLY")

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
//parseInt() changes a string to an integer value and hence used to make sure a number is returned by the user.

let str = '';

for (let i = 1; i <= answer; i++) {

    if (i % 3 === 0 && i % 5 === 0) {       //JS reads from top to bottom, if the other conditions were placed in if this condition would have never worked
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
       console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else  {
        console.log(i);
    }
}

