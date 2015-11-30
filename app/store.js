import { combineReducers } from 'redux';

import visibilityFilter from './reducers/visibilityFilter';
import todos from './reducers/todos';

var todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
