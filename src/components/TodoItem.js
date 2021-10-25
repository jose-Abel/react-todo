import React, { Component } from "react";
import styles from "./TodoItem.module.css"


class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }

  completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = e => {
    if (e.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    const { completed, id, title } = this.props.todo

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input 
            type="checkbox"
            className={styles.checkbox}
            onChange={() => this.props.handleChangeProps(id)}
            checked={completed}
          /> 
            <button 
              onClick={() => this.props.deleteTodoProps(id)}
            >
              Delete
            </button>
          <span style={completed ? this.completedStyle : null}>
            {title}
          </span>
        </div>
        <input 
          type="text" 
          style={editMode} 
          className={styles.textInput}
          value={title}
          onChange={e => {
            this.props.setUpdate(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    )
  }

}

export default TodoItem;