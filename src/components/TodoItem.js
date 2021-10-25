import React from "react";


function TodoItem(props) {
  return (
    <li>
      <input 
        type="checkbox"
        onChange={() => props.handleChangeProps(props.todo.id)}
        checked={props.todo.completed}
      /> 
        <button 
          onClick={() => props.deleteTodoProps(props.todo.id)}
        >
          Delete
        </button>
  
        {props.todo.title}
    </li>
  )
}

export default TodoItem;