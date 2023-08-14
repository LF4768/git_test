// Events are actions that occur on your webpage such as mouse-clicks or keypresses, 
// and using JavaScript we can make our webpage listen and react to these events.

// 3 Ways to code Events

// (1) specifying function attributes directly on the HTML elements
// (2) setting properties of form on[eventType] (onclick, onmousedown, etc.) on the DOM nodes in your JavaScript
// (3) attaching event listeners to the DOM nodes 
// Out of these, event listerners is the preferred way

// Method 1
// <button onclick="alert('Hello World')">Click Me</button>

// This solution is less than ideal because we’re cluttering our HTML with JavaScript.

// Also, we can only set one “onclick” property per DOM element, 
//so we’re unable to run multiple separate functions in response to a click event using this method.

// Matlab, ek element toh ek onclick sirf

// Method 2

const btn = document.querySelector("#btn");
btn.onclick = () => console.log("Hello World!");

//Ab javascript ko html se toh nikaal liya hai
// par abhi bhi, ek DOM element toh ek onclick sirf

// Method 3 **BEST METHOD**

const eventListenerBtn = document.querySelector("#eventListenerBtn");
eventListenerBtn.addEventListener('click', () => {
    console.log('Hello World!') 
})

// Now, we maintain separation of concerns, and we also allow multiple event listeners if the need arises. 
// Method 3 is much more flexible and powerful, though it is a bit more complex to set up.

// Using Function

function clickFunction() {
    console.log("Good One Chief");
}

btn.onclick = clickFunction;

eventListenerBtn.addEventListener('click', clickFunction)   // Can have 2 click values, so gives back both

// Using named functions can clean up your code considerably, 
// and is a really good idea if the function is something that you are going to want to do in multiple places.

btn.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue';     // Turns the button color to blue
    e.target.style.color = "white";         // Turns the text color to white
  });

// The e in that function is an object that references the event itself. 
// Within that object you have access to many useful properties and methods (functions that live inside an object) such as which mouse button or key was pressed, 
// or information about the event’s target - the DOM node that was clicked.

// Attaching listeners to groups of nodes

const button = document.querySelectorAll("button");

button.forEach((button) => {
    button.addEventListener('click',() => {
        console.log(button.id);
    })
})