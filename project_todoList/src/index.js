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
    button.addEventListener("click", (e) => console.log(e.target.dataset.id));
})

const addProjectButton = document.querySelector(".add-project-button");
const projectDialogBox = document.querySelector(".add-project-dialog");
const submitProjectButton = document.querySelector(".submit-project-button");
const projectName = document.querySelector("#project-name");


addProjectButton.addEventListener("click", () => {
    projectDialogBox.showModal();
})

projectDialogBox.addEventListener("close", () => {
    start.addProject(projectName.value)
})

submitProjectButton.addEventListener("click", (e) => {
    e.preventDefault();
    projectDialogBox.close();
})

const addTaskButton = document.querySelector(".add-task-button");
const taskDialogBox = document.querySelector(".add-task-dialog");
const submitTaskButton = document.querySelector(".submit-task-button")
const taskName = document.querySelector("#task-name");
const taskDesc = document.querySelector("#task-desc");
const taskDueDate = document.querySelector("#task-due-date");
const taskPriority = document.querySelector("#task-priority");
const taskNotes = document.querySelector("#task-notes");    

addTaskButton.addEventListener("click", () => {
    taskDialogBox.showModal();
})

taskDialogBox.addEventListener("close", () => {
    start.addTodo(taskName.value,taskDesc.value,taskDueDate.value,taskPriority.value,taskNotes.value, "incomplete");
    console.log(start.viewProject());
})

submitTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    taskDialogBox.close()
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