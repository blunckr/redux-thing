import { combineReducers } from 'redux';
import Constants from './constants';

function visibilityFilter(state = Constants.VisibilityFilters.SHOW_ALL, action) {
  switch(action.type){
  case Constants.SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = [], action) {
  switch(action.type){
  case Constants.ADD_TODO:
    return [
      ...state,
      {
        text: action.text,
        completed: false
      }
    ];
  case Constants.COMPLETE_TODO:
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        completed: true
      }),
      ...state.slice(action.index + 1)
    ];
  default:
    return state;
  }
}

var todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
