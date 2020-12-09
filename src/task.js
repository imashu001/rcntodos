// @flow
// import * as React from "react";
import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: this.props.task,
      editMode: false,
      updateValue: "",
    };
  }
  handleClick = (e) => {
    this.setState({
      editMode: true,
    });
    this.setState({ updateValue: this.props.task });
  };
  handleOnChange = (e) => {
    this.setState({ updateValue: [e.target.value] });
  };
  handleSave = (e) => {
    this.setState({ newTask: this.state.updateValue });
    this.setState({ editMode: false });
  };
  render() {
    const { task, handleDelete } = this.props;
    const { editMode } = this.state;
    return (
      <div>
        {editMode ? (
          <div>
            <input
              id="edittext"
              type="text"
              onChange={(e) => this.handleOnChange(e)}
              value={this.state.updateValue}
            />
            <button onClick={() => this.handleSave()}>SAVE</button>
          </div>
        ) : (
          <div>
            <p
              style={{
                display: "inline-block",
                justifyContent: "space-between",
              }}
            >
              {task}{" "}
            </p>
            <button onClick={() => handleDelete(task)}>Delete</button>
            <button onClick={this.handleClick}>EDIT</button>
          </div>
        )}
      </div>
    );
  }
}

export default Task;
