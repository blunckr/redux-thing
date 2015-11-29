import Constants from './constants';

export default {
  addTodo(text) {
    return { type: Constants.ADD_TODO, text };
  },

  completeTodo(index) {
    return { type: Constants.COMPLETE_TODO, index };
  },

  setVisibilityFilter(filter) {
    return { type: Constants.SET_VISIBILITY_FILTER, filter };
  }
};
