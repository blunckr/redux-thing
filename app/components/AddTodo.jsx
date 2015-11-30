import React from 'react';
import Actions from '../actions';

export default class AddTodo extends React.Component {
  constructor(){
    super();
    this.state = {text: ''};
  }

  updateText(e) {
    e.preventDefault();
    this.setState({text: e.currentTarget.value});
  }

  addTodo(e) {
    e.preventDefault();
    this.props.dispatch(Actions.addTodo(this.state.text));
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=>{this.addTodo(e);}}>
          <input type="text" value={this.state.text} onChange={(e)=> {this.updateText(e);}}/>
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

