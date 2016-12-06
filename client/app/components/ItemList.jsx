import React from 'react';

import SingleItem from './SingleItem.jsx'

var SingleList = (props) => (
  <div className="single-list-item">
    <h4>Items:</h4>
    {props.items.map( item => {
      return (
        <SingleItem item={item} />
      )
    })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
SingleList.propTypes = {
  listItem: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default SingleList;
