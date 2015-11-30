import _ from 'lodash';

import Constants from '../constants';

export default function todos(state = [], action) {
  switch(action.type){
  case Constants.ADD_TODO:
    state.push({
      text: action.text,
      completed: false
    });
    return _.cloneDeep(state);
  case Constants.COMPLETE_TODO:
    state[action.index].completed = true;
    return _.cloneDeep(state);
  default:
    return state;
  }
}
