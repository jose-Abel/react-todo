import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css"


const TodoItem = props => {
  const [editing, setEditing] = useState();

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const handleEditing = () => {
    setEditing(true);
  }

  const handleUpdatedDone = e => {
    if (e.key === "Enter") {
      setEditing(false)
    }
  }
  
  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  const { completed, id, title } = props.todo

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input 
          type="checkbox"
          className={styles.checkbox}
          onChange={() => props.handleChangeProps(id)}
          checked={completed}
        /> 
          <button 
            onClick={() => props.deleteTodoProps(id)}
          >
            Delete
          </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input 
        type="text" 
        style={editMode} 
        className={styles.textInput}
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem;