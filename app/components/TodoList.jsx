import React from 'react';
import _ from 'lodash';

import Constants from '../constants';

import TodoItem from './TodoItem.jsx';

export default class TodoList extends React.Component {
  render() {
    var todos = this.filteredTodos();

    return (
      <ul>
        {_.map(todos, (todo)=>{
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
      return _.filter(todos, {completed: false});
    case f.SHOW_COMPLETED:
      return _.filter(todos, {completed: true});
    }
  }
}

