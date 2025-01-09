

function projectTemplate() {
    const projects = [];
    const projectArray = () => projects;
    const viewProjects = function() {
        console.log(projects);
    }
    const projectAdder = function() {
        const name = prompt("Enter Name");
        projects.push({
            name: name,
            todos: [],
        });
    }
    const projectDeleter = function(index) {
        projects.splice(index,1)
    }   
    function indexFinder() {
        let index = 0;
        for(let i = 0; i < projectArray().length; i++) {
            if(projectArray()[i].name == "asdf") {
                index = i;
                break;
            } 
        }
        return index;
    }
    return {projectArray, viewProjects, projectAdder, projectDeleter, indexFinder}
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
        let index = project.indexFinder();
        project.projectArray()[index].todos.push(todo.addTodo());
    }
    const statusChanger = function() {
        let index = project.indexFinder();
        project.projectArray()[index].todos[0].status = "Complete"

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
start.addProject();
start.addTodo();
start.addTodo();
start.viewProject();
start.statusChanger();
start.viewTodo();
start.viewProject();
