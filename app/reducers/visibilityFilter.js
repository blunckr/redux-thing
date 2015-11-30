import Constants from '../constants';

export default function visibilityFilter(state = Constants.VisibilityFilters.SHOW_ALL, action) {
  switch(action.type){
  case Constants.SET_VISIBILITY_FILTER:
    return action.filter;
  case Constants.LOAD_STATE:
    return action.state.visibilityFilter;
  default:
    return state;
  }
}
