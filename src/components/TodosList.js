import React, { Component } from "react";
import TodoItem from "./TodoItem";


class TodosList extends Component {

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    )
  }

}

export default TodosList;