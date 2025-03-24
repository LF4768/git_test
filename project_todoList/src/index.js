import {start} from './projects.js';

const projects = document.querySelector(".projects");
let projectButtons;

import "./styles.css";


function render() {
    for(let i = 0; i < start.viewProject().length; i++) {
        let div = document.createElement("div");
        div.innerHTML = start.viewProject()[i].name;
        div.classList.add("project-button")
        projects.appendChild(div);
        div.dataset.id = i;
    }
    projectButtons = document.querySelectorAll(".project-button");
}

render();

projectButtons.forEach((button) => {
    button.addEventListener("click", (e) => console.log(e.target.dataset.id))
})

// function test(event) {
//     console.log(event.target.className);
//     const element = event.target;
//     element.setAttribute("style", "background-color: red;");
//     body.removeChild(element);
// };


// for(let i = 0; i < 5; i++) {
//     const button = document.createElement("button")
//     button.classList.add("test")
//     button.classList.add(`${i}`)
    
//     body.appendChild(button);
// }

// const button = document.querySelectorAll(".test");
// button.forEach((e) => {
//     e.addEventListener("click", test);
// })