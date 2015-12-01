import Immutable from 'immutable';

import Constants from '../constants';

export default function todos(state = Immutable.List([]), action) {
  switch(action.type){
  case Constants.ADD_TODO:
    return state.push(Immutable.Map({
      text: action.text,
      completed: false
    }));
  case Constants.COMPLETE_TODO:
    return state.setIn([action.index, 'completed'], true);
  case Constants.LOAD_STATE:
    return Immutable.fromJS(action.state.todos);
  default:
    return state;
  }
}
