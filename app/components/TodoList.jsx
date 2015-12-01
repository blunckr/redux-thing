import React from 'react';

import Constants from '../constants';

import TodoItem from './TodoItem.jsx';

export default class TodoList extends React.Component {
  render() {
    var todos = this.filteredTodos();

    return (
      <ul>
        {todos.map((todo)=>{
          var index = this.props.todos.indexOf(todo);
          return <TodoItem key={index} todo={todo} index={index} dispatch={this.props.dispatch}/>;
        })}
      </ul>
    );
  }

  filteredTodos() {
    var f = Constants.VisibilityFilters;
    var todos = this.props.todos;
    switch(this.props.visibilityFilter){
    case f.SHOW_ALL:
      return todos;
    case f.SHOW_ACTIVE:
      return todos.filter((t)=>{ return !t.get('completed'); });
    case f.SHOW_COMPLETED:
      return todos.filter((t)=>{ return t.get('completed'); });
    }
  }
}

