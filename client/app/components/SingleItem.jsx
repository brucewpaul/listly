import React from 'react'
import { Link } from 'react-router'

var SingleItem = (props) => (
  <li className="single-item">
    <div>
      <Link to="{props.item.url}">{props.item.title}</Link>
      <p><small>({props.item.url})</small></p>
      <p>{props.item.description}</p>
      </div>
  </li>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
SingleItem.propTypes = {
  listItem: React.PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default SingleItem;
