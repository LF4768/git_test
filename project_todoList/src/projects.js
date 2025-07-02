
function projectTemplate() {
    let projects = [];
    const projectArray = () => projects;
    const projectAdder = function(name) {
        projects.push({
            name: name,
            todos: [],
        });
    }
    const projectDeleter = function(index) {
        projects.splice(index,1)
    }   

    const storageGet = function() {
        if(JSON.parse(localStorage.getItem("projects")) != null){
            projects = JSON.parse(localStorage.getItem("projects"))
        }

    }

    return {projectArray, projectAdder, projectDeleter, storageGet}
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
    const toggleStatus = function(project, projectIndex, todoIndex) {
        if(project.projectArray()[projectIndex].todos[todoIndex].status == "incomplete") {
            project.projectArray()[projectIndex].todos[todoIndex].status = "complete";
        } else {
            project.projectArray()[projectIndex].todos[todoIndex].status = "incomplete";
        }
    }

    const addTodo = function(name, desc, dueDate, priority, notes, status) {
        return new todoDetails(name, desc, dueDate, priority, notes, status)
    }

    const todoDeleter = function(project,projectIndex, todoIndex) {
        project.projectArray()[projectIndex].todos.splice(todoIndex,1)
    }

    const priorityOrder = function(project, projectIndex) {
        let temp = project.projectArray()[projectIndex].todos;
        let ascArray = [];
        while (temp.length != 0) {
            let index = 0
            let mini = temp[0].priority;
            for(let i = 0; i < temp.length; i++) {
                if (Number(temp[i].priority) < mini) {
                    console.log("works")
                    mini = temp[i].priority;
                    index = i;
                }
            }
            ascArray.push(temp[index]); 
            temp.splice(index, 1)
        }
        project.projectArray()[projectIndex].todos = ascArray; 
    }

    return{addTodo, todoDeleter, priorityOrder, toggleStatus};
}




function controller() {
    const project = projectTemplate();
    const todo = todos();

    const addProject = (name) => project.projectAdder(name);

    const viewProject = () => project.projectArray();

    const addTodo = function(index, name, desc, dueDate, priority, notes, status) {
        project.projectArray()[index].todos.push(todo.addTodo(name, desc, dueDate, priority, notes, status)); 
    }
    const statusChanger = function(projectIndex, todoIndex) {
        todo.toggleStatus(project,projectIndex,todoIndex)
    }

    const viewTodo = function(index1, index2)  {
        return project.projectArray()[index1].todos[index2]
    }
    
    const arrangePriority = function(index) {
        todo.priorityOrder(project, index)
    }

    const deleteProject = function(index) {
        project.projectDeleter(index)
    }

    const deleteTodo = function(projectIndex, todoIndex) {
        todo.todoDeleter(project, projectIndex, todoIndex);
    }

    const storageGetter = function() {
        project.storageGet();
    }
    
    const methods = function(){
        let controller = localStorage.getItem('controller')
        let func = eval('(' + controller + ')')
        func(); 

    }

    return {viewProject, addTodo, statusChanger, addProject, deleteProject, viewTodo, deleteTodo, arrangePriority, storageGetter, methods};
}

export const start = controller();



localStorage.setItem('controller', controller.toString()) 



