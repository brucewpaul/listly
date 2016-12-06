import React from 'react'

var SingleItem = (props) => (
  <div className="single-item">
    <div>{props.item.title}<br/>{props.item.description}<br/>{props.item.url}<br/><br/><br/><br/></div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
SingleItem.propTypes = {
  listItem: React.PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default SingleItem;
