import React from "react";
import TodoItem from "./TodoItem";


const TodosList = props => {

  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem 
          todo={todo} 
          key={todo.id} 
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  )
}

export default TodosList;