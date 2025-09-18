import { Component } from "react";
import "./ToDo.css";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  componentDidMount() {
    const saveTasks = localStorage.getItem("tasks");
    if (saveTasks) {
      this.setState({ tasks: JSON.parse(saveTasks) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim() !== "") {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: "",
      });
    }
  };

  deleteTask = (index) => {
    const updatedTask = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTask });
  };

  render() {
    return (
      <div className="toDoContainer">
        <h1 className="toDoTitle">ToDo List</h1>

        <div className="toDoInputSection">
          <input
            className="toDoInput"
            value={this.state.newTask}
            onChange={this.handleChange}
            placeholder="Enter a task..."
          />
          <button className="toDoAddButton" onClick={this.addTask}>
            Add
          </button>
        </div>

        <ul className="toDoList">
          {this.state.tasks.map((task, index) => (
            <li key={index} className="toDoItem">
              <p className="toDoText">{task}</p>
              <button
                className="toDoDeleteButton"
                onClick={() => this.deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;
