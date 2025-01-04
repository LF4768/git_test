

function projectTemplate() {
    const projects = [];
    const projectArray = () => projects;
    const viewProjects = function() {
        console.log(projects);
    }
    const projectAdder = function() {
        projects.push({
            name: "Project Name",
            todos: [],
        });
    }
    const projectDeleter = function(index) {
        projects.splice(index,1)
    }   
    return {projectArray, viewProjects, projectAdder, projectDeleter}
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
            status: "Incomplete"
        }
        return todo;
    }

    return{addTodo};
}

export function controller() {
    const project = projectTemplate();
    const todo = todos();

    const addProject = () => project.projectAdder();

    const viewProject = () => project.viewProjects();

    const addTodo = function() {
        project.projectArray()[0].todos.push(todo.addTodo());
    }
    const statusChanger = function() {
        project.projectArray()[0].todos[0].status = "Complete"

    }

    const viewTodo = function()  {
        console.log(project.projectArray()[0].todos[0])
    }

    const deleteProject = function() {
        project.projectDeleter(0)
    }

    return {viewProject, addTodo, statusChanger, addProject, deleteProject, viewTodo};
}

const start = controller();
start.addProject();
start.addProject();
start.addTodo();
start.viewProject();
start.statusChanger();
start.viewTodo();
start.deleteProject();
start.viewProject();
