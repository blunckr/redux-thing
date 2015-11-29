import React from 'react';

import AddTodo from '../components/AddTodo.jsx';
import TodoList from '../components/TodoList.jsx';
import Footer from '../components/Footer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.stateFromStore();
    props.store.subscribe(() => {
      this.setState(this.stateFromStore());
    });
  }

  stateFromStore() {
    var { visibilityFilter, todos } = this.props.store.getState();
    return { visibilityFilter, todos };
  }

  render() {
    var store = this.props.store;
    return (
      <div>
        <AddTodo dispatch={store.dispatch}/>
        <TodoList todos={this.state.todos} visibilityFilter={this.state.visibilityFilter} dispatch={store.dispatch}/>
        <Footer visibilityFilter={this.state.visibilityFilter} dispatch={store.dispatch}/>
      </div>
    );
  }
}

