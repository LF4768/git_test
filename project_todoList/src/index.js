import {start} from './projects.js';

const projects = document.querySelector(".projects");
const projectTitle = document.querySelector(".project-title")
const todos = document.querySelector(".todo-list");


let projectButtons;
let index;

import "./styles.css";



function render() {
    const renderProjects = function() {
        projects.innerHTML = '';
        for(let i = 0; i < start.viewProject().length; i++) {
            let projectHolder = document.createElement("button");
            projectHolder.textContent += `${start.viewProject()[i].name}`
            projectHolder.classList.add("project-button")
            projectHolder.addEventListener("click", () => {
                projectTitle.textContent = `${start.viewProject()[i].name}`
                index = i;
                start.viewTodo(i,0)
                renderProjects();
                render().renderTodos();
            });
            projects.appendChild(projectHolder)
        }
        projectButtons = document.querySelectorAll(".project-button");
    }
    
    const renderTodos = function() {
        todos.innerHTML = '';
        let todoHolder = document.createElement("div");
        todoHolder.classList.add("todo");

        if(start.viewTodo(index,0) === undefined) {
        } else{
                for(let i = 0; i < start.viewProject()[index].todos.length; i++){
                let inputCheckbox = document.createElement("input");
                inputCheckbox.classList.add("todo-checkbox");   
                inputCheckbox.setAttribute("type","checkbox")
                todoHolder.appendChild(inputCheckbox);

                let nameInfo = document.createElement("div");
                nameInfo.classList.add("todo-name-info");
                nameInfo.textContent = `${start.viewTodo(index,i).name}`;
                todoHolder.appendChild(nameInfo);

                let dueDateInfo = document.createElement("div");
                dueDateInfo.classList.add("todo-due-date-info");
                dueDateInfo.textContent = `${start.viewTodo(index,i).dueDate}`;
                todoHolder.appendChild(dueDateInfo);
                todos.appendChild(todoHolder);
            }
        }
        
    }


    return {renderProjects, renderTodos}
}

render().renderProjects();




function dialogBoxes() {

    const newProject = function() {
        const addProjectButton = document.querySelector(".add-project-button");
        const projectDialogBox = document.querySelector(".add-project-dialog");
        const submitProjectButton = document.querySelector(".submit-project-button");
        const projectName = document.querySelector("#project-name");


        addProjectButton.addEventListener("click", () => {
            projectDialogBox.showModal();
        })

        projectDialogBox.addEventListener("close", () => {
            if(projectName.value === "") {
                window.alert("No Value Given!")
            } else {
                start.addProject(projectName.value)
                render().renderProjects();
                projectName.value = "";
            }
        })

        submitProjectButton.addEventListener("click", (e) => {
            e.preventDefault();
            projectDialogBox.close();
        })
    }
    
    const newTodo = function() {        
        const addTodoButton = document.querySelector(".add-todo-button");
        const todoDialogBox = document.querySelector(".add-todo-dialog");
        const submitTodoButton = document.querySelector(".submit-todo-button")
        const todoName = document.querySelector("#todo-name");
        const todoDesc = document.querySelector("#todo-desc");
        const todoDueDate = document.querySelector("#todo-due-date");
        const todoPriority = document.querySelector("#todo-priority");
        const todoNotes = document.querySelector("#todo-notes");    

        addTodoButton.addEventListener("click", () => {
            todoDialogBox.showModal();
        })


        todoDialogBox.addEventListener("close", () => {
            let currentTime = new Date();
            let day = currentTime.getDate();
            let month = currentTime.getMonth() + 1;
            let year = currentTime.getFullYear();
            let date = year + "-" + "0" + month + "-" + day
            
            if(todoDueDate.value < date) {
                window.alert("Due Date cannot be less than current date!")
            } else if(todoName.value === "" || todoDesc.value === "" || todoPriority.value === "" || todoNotes.value === "" ) {
                window.alert("No Value Given!")
            } else {
                start.addTodo(index, todoName.value,todoDesc.value,todoDueDate.value,todoPriority.value,todoNotes.value, "incomplete");
                render().renderTodos();
            }
            console.log(start.viewProject());
        })

        submitTodoButton.addEventListener("click", (e) => {
            e.preventDefault();
            todoDialogBox.close()
        })
    }

    return{newProject, newTodo};
}

dialogBoxes().newTodo();

    

















































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