import React from 'react'
import { Link } from 'react-router'

var SingleItem = (props) => (
  <a href={props.item.url} className="single-item list-group-item">
    <p className="text-primary">{props.item.title}</p>
    <p><small>({props.item.url})</small></p>
    <p>{props.item.description}</p>
  </a>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
SingleItem.propTypes = {
  listItem: React.PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default SingleItem;
