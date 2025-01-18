import {start} from './projects.js';


import "./styles.css";


const body = document.querySelector("body");

function test(event) {
    console.log(event.target.className);
    const element = event.target;
    element.setAttribute("style", "background-color: red;");
    body.removeChild(element);
};


for(let i = 0; i < 5; i++) {
    const button = document.createElement("button")
    button.classList.add("test")
    button.classList.add(`${i}`)
    
    body.appendChild(button);
}

const button = document.querySelectorAll(".test");
button.forEach((e) => {
    e.addEventListener("click", test);
})