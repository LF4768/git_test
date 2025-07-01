import {start} from './projects.js';

const projects = document.querySelector(".projects");
const projectTitle = document.querySelector(".project-title")
const todos = document.querySelector(".todo-list");


let projectButtons;
let index;

import "./styles.css";

function render() {
    const renderProjects = function() {
        let todoButton = document.querySelector(".add-todo-button")
        projects.innerHTML = '';
        for(let i = 0; i < start.viewProject().length; i++) {
            let projectHolder = document.createElement("button");
            projectHolder.textContent += `${start.viewProject()[i].name}`
            projectHolder.classList.add("project-button")
            projectHolder.addEventListener("click", () => {
                projectTitle.textContent = `${start.viewProject()[i].name}`
                if(start.viewProject().length > 0) {
                    todoButton.hidden = false;
                }
                localStorage.setItem("projects", JSON.stringify(start.viewProject()));
                deleteItems().removeProject();
                index = i;
                renderProjects();           
                render().renderTodos();
            });
            projects.appendChild(projectHolder)
        }
        projectButtons = document.querySelectorAll(".project-button");
    }

    
    const renderTodos = function() {
        todos.innerHTML = '';
        if(start.viewTodo(index,0) === undefined) {
        } else{
            for(let i = 0; i < start.viewProject()[index].todos.length; i++){
                let inputCheckbox = document.createElement("input");
                let todoHolder = document.createElement("div");
                todoHolder.classList.add("todo");
                inputCheckbox.classList.add("todo-checkbox");   
                inputCheckbox.setAttribute("type","checkbox");
                inputCheckbox.setAttribute("name", "status");
                todoHolder.appendChild(inputCheckbox);

                let nameInfo = document.createElement("div");
                nameInfo.classList.add("todo-name-info");
                nameInfo.textContent = `${start.viewTodo(index,i).name}`;
                todoHolder.appendChild(nameInfo);

                let dueDateInfo = document.createElement("div");
                dueDateInfo.classList.add("todo-due-date-info");
                dueDateInfo.textContent = `${start.viewTodo(index,i).dueDate}`;
                todoHolder.appendChild(dueDateInfo);
                
                let deleteTodoButton = document.createElement("button");
                deleteTodoButton.classList.add("delete-todo-button");
                deleteTodoButton.textContent = "Delete Todo"
                deleteTodoButton.hidden = true;
                todoHolder.appendChild(deleteTodoButton);
                
                todos.appendChild(todoHolder);
            }
            todoStatus().statusChange();
        }
        
    }

    const template = function() {
        projectTitle.textContent = "Template Project";
        let inputCheckbox = document.createElement("input");
        let todoHolder = document.createElement("div");
        todoHolder.classList.add("todo");
        inputCheckbox.classList.add("todo-checkbox");   
        inputCheckbox.setAttribute("type","checkbox");
        inputCheckbox.setAttribute("name", "status");
        todoHolder.appendChild(inputCheckbox);

        let nameInfo = document.createElement("div");
        nameInfo.classList.add("todo-name-info");
        nameInfo.textContent = "Read a book";
        todoHolder.appendChild(nameInfo);

        let dueDateInfo = document.createElement("div");
        dueDateInfo.classList.add("todo-due-date-info");
        dueDateInfo.textContent = "2025-12-03";
        todoHolder.appendChild(dueDateInfo);

        todos.appendChild(todoHolder);
        
        
    }

    return {renderProjects, renderTodos, template}
}

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
                start.arrangePriority(index);
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



function deleteItems() {
    const removeProject = function() {
        let todoButton = document.querySelector(".add-todo-button")
        let deleteProjectButton = document.createElement("button");
        deleteProjectButton.classList.add("delete-project");
        deleteProjectButton.textContent = "Delete Project";
        projectTitle.appendChild(deleteProjectButton);
        deleteProjectButton.addEventListener("click", () => {
            start.deleteProject(index);
            if(start.viewProject().length == 0) {
                todoButton.hidden = true;
            }
            render().renderProjects();
            render().template();
        })
    }    
    
    const removeTodo = function(projectIndex, todoIndex, event) {
        let deleteTodoButtons = document.querySelectorAll(".delete-todo-button");
        if(event == true) {
            deleteTodoButtons[todoIndex].hidden = false;
            deleteTodoButtons[todoIndex].addEventListener("click", () => {
                start.deleteTodo(projectIndex, todoIndex);
                render().renderTodos();
            })
        } else {
            deleteTodoButtons[todoIndex].hidden = true;
            deleteTodoButtons[todoIndex].removeEventListener("click", () => {
                start.deleteTodo(projectIndex, todoIndex);
                render().renderTodos();
            })
        }
    }
    return {removeProject, removeTodo};
}    


dialogBoxes().newProject();
dialogBoxes().newTodo();


function todoStatus() {
    const statusChange = function() {
        let todoStatus = document.querySelectorAll("input[type=checkbox][name=status]");
        
        for(let i = 0; i < todoStatus.length; i++) {
            todoStatus[i].addEventListener("change", () => {
                start.statusChanger(index,i);
                if(start.viewTodo(index,i).status === "complete") {
                    (todoStatus[i].parentNode).classList.add("complete")
                    deleteItems().removeTodo(index, i, true);
                } else if (start.viewTodo(index,i).status === "incomplete") {
                    (todoStatus[i].parentNode).classList.remove("complete");
                    deleteItems().removeTodo(index, i, false);
                }
            })
        }
    }
    return {statusChange}
}

start.storageGetter();

render().renderProjects();