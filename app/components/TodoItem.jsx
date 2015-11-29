import React from 'react';
import Actions from '../actions';

export default class TodoItem extends React.Component {
  render() {
    var todo = this.props.todo;
    return (
      <li>
        <span>{todo.text} - </span>
        {todo.completed ? <span>Completed!</span> : <button onClick={()=>{this.completeTodo();}}>Complete</button>}
      </li>
    );
  }

  completeTodo() {
    this.props.dispatch(Actions.completeTodo(this.props.index));
  }
}

