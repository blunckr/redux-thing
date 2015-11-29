import React from 'react';

import Actions from '../actions';
import Constants from '../constants';

export default class FilterButton extends React.Component {
  render() {
    var text = this.filterName(this.props.name);
    var styles = {color: this.props.currentFilter == this.props.name ? 'red' : null};
    return (
      <button onClick={ ()=>{this.setVisibilityFilter();} } style={styles}>{text}</button>
    );
  }

  filterName (filter) {
    var f = Constants.VisibilityFilters;
    switch(filter){
    case f.SHOW_ALL:
      return 'All';
    case f.SHOW_ACTIVE:
      return 'Active';
    case f.SHOW_COMPLETED:
      return 'Completed';
    }
  }

  setVisibilityFilter() {
    this.props.dispatch(Actions.setVisibilityFilter(this.props.name));
  }
}

