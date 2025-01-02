export function projectTemplate() {
    const projects = [];
    const projectArray = () => projects;
    const viewProjects = function() {
        console.log(projects);
    }
    return {projectArray, viewProjects}
}


function projects() {
    const project = projectTemplate();
    const todo = todos();
    const addProject = function() {
        project.projectArray().push({
            name: "Project Name",
            todos: [],
        });
    }
    const viewProject = function() {
        project.viewProjects();
    }

    const addTodo = function() {
        project.projectArray()[0].todos.push(todo.addTodo());
    }
    return {addProject, viewProject, addTodo};
}

function todos() {
    let todo = {};
    const addTodo = function() {
        todo = {
            name: "Todo Name",
            description: "Todo Description",
            dueDate: "Due Date",
            priority: "Priority",
            notes: "Notes",
        }
        return todo;
    }
    return{addTodo};
}

const start = projects();
start.addProject();
start.addTodo();
start.viewProject();
