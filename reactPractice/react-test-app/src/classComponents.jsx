import {useState, Component} from "react"

function ClassComp({name}) {
    const [todos, setTodos] = useState(["Just some demo tasks", "As an example"]);
    const [inputVal, setInputVal] = useState("");

    const handleInputChange = (e) => {
    setInputVal(e.target.value);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, inputVal]);
    setInputVal("");
    };

    return (
        <section>
            <h3>{name}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task-entry">Enter a task: </label>
                <input
                    type="text"
                    id="task-entry"
                    name="task-entry"
                    value={inputVal}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
            <h4>All the tasks!</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </section>
  );
}


class ClassComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todos: ["Just some demo tasks", "As an example"], 
            inputVal: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
        this.handleRemoveTask = this.handleRemoveTask.bind(this)
    }

    handleInputChange(e) {
        this.setState((state) => ({
            ...state,
            inputVal: e.target.value,
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((state) => ({
            ...state,
            todos: state.todos.concat(state.inputVal),
        }));
    }

    handleRemoveTask(todo) {
        this.setState((prev) => ({
            ...prev,
            todos: prev.todos.filter((item) => item != todo),
        }))
    }

    handleTodoInput(e,todo) {
        this.setState((state) => ({
            ...state,
            todos: state.todos.map((item) => item == todo ? e : item)
        }))
    }

    render() {
        return (
            <section>
                <h3>{this.props.name}</h3>
                 {/* The input field to enter Todos */}
                <form>
                    <label htmlFor="task-entry">Enter a task: </label>
                    <input type="text" id="task-entry" name="task-entry" value={this.state.inputVal} onChange={this.handleInputChange} />
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
                <h4>All the tasks!</h4>
                {/* The list of all the Todos, displayed */}
                <ul>
                    {this.state.todos.map((todo) => (
                        <>
                            <InputComp value={todo} onCall={(e) => this.handleTodoInput(e.target.value,todo)}/>
                            <button onClick={() => this.handleRemoveTask(todo)}>Remove</button> <br/>
                        </>
                        )
                    )}
                </ul>
                <Count todos={this.state.todos}/>
            </section>
        )
    }
}


class Count extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return <p>Count is: {this.props.todos.length}</p>
    }
}

class InputComp extends Component {
    constructor(props) {
        super(props)
        this.state = {editMode: false};

        this.handleEdit = this.handleEdit.bind(this)
    }


    handleEdit() {
        this.setState((prev) => ({
            editMode: !this.state.editMode
        }))
    }



    render() {
        return (
            <>
                {!this.state.editMode ? <p>{this.props.value}</p> : <input type="text" id="task-entry" name="task-entry" onChange={(e) => this.props.onCall(e)} value={this.props.value}></input>} 
                <button onClick={this.handleEdit}>{ !this.state.editMode ? "Edit" : "Resubmit"}</button>
            </>
        )
    }
}


export default ClassComponent