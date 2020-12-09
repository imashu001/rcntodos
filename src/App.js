import React, { Component } from "react";
import Task from "./task";
import "./App.css";
import { addtask, ADD_TASK } from "./actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: "",
    };
  }
  handleonChange = (e) => {
    this.setState({
      task: [e.target.value],
    });
  };
  handleDelete = (task) => {
    const { tasks } = this.state;
    console.log(tasks.indexOf(task));
    tasks.splice(tasks.indexOf(task), 1);
    this.setState({});
    // window.location.reload();
    // tasks.filter(task);
  };

  handleClick = (e) => {
    e.preventDefault();
    const { task, tasks } = this.state;
    if (task !== "") {
      tasks.push(task);
      this.setState({
        tasks: tasks,
      });
      const submitForm = document.querySelector(".add");
      submitForm.reset();
      // this.props.store.dispatch(addtask(task));
    }
  };
  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <div id="action-area">
          <form className="add">
            <input onChange={this.handleonChange} id="tas" />
            <button type="reset" onClick={this.handleClick}>
              Submit
            </button>
          </form>
          {tasks.map((task) => (
            <Task task={task} handleDelete={this.handleDelete} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
