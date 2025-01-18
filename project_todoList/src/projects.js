

function projectTemplate() {
    const projects = [];
    const projectArray = () => projects;
    const viewProjects = function() {
        console.log(projects);
    }
    const projectAdder = function(name) {
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
 
    function todoDetails(name, desc, dueDate, priority, notes, status) {
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = status;
    }

    const addTodo = function(name, desc, dueDate, priority, notes, status) {
        return new todoDetails(name, desc, dueDate, priority, notes, status)
    }

    return{addTodo};
}

function controller() {
    const project = projectTemplate();
    const todo = todos();

    const addProject = (name) => project.projectAdder(name);

    const viewProject = () => project.viewProjects();

    const addTodo = function(name, desc, dueDate, priority, notes, status) {
        let index = project.indexFinder();
        project.projectArray()[index].todos.push(todo.addTodo(name, desc, dueDate, priority, notes, status));
    }
    const statusChanger = function(todoIndex) {
        let projectIndex = project.indexFinder();
        project.projectArray()[projectIndex].todos[todoIndex].status = "Complete"

    }

    const viewTodo = function(index1, index2)  {
        console.log(project.projectArray()[index1].todos[index2])
    }

    const deleteProject = function(index) {
        project.projectDeleter(index)
    }

    return {viewProject, addTodo, statusChanger, addProject, deleteProject, viewTodo};
}

export const start = controller();
start.addProject("hello");
start.addProject("asdf");
start.addProject();
start.addTodo('x', "1", "3", "1", "hello", "incomplete");
start.addTodo('y', "5", "26", "000", "bye", "complete");
start.viewProject();
start.statusChanger(1);
start.viewTodo(1,0);
start.deleteProject(2);