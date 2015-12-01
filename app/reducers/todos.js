import Immutable from 'immutable';
import _ from 'lodash';

import Constants from '../constants';

var Todo = Immutable.Record({
  completed: false,
  text: ''
});

export default function todos(state = Immutable.List([]), action) {
  switch(action.type){
  case Constants.ADD_TODO:
    return state.push(new Todo({
      text: action.text
    }));
  case Constants.COMPLETE_TODO:
    return state.setIn([action.index, 'completed'], true);
  case Constants.LOAD_STATE:
    _.forEach(action.state.todos, (todo)=>{
      state = state.push(new Todo(todo));
    });
    return state;
  default:
    return state;
  }
}
