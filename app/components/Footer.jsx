import React from 'react';
import _ from 'lodash';

import Constants from '../constants';

import FilterButton from './FilterButton.jsx';

export default class Footer extends React.Component {
  render() {
    var f = Constants.VisibilityFilters;
    var filters = [f.SHOW_ALL, f.SHOW_ACTIVE, f.SHOW_COMPLETED];
    return (
      <div>
        {_.map(filters, (filter)=>{
          return <FilterButton key={filter} name={filter} currentFilter={this.props.visibilityFilter} dispatch={this.props.dispatch}/>;
        })}
      </div>
    );
  }
}
