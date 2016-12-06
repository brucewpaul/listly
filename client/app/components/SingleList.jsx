import React from 'react';
import { Link } from 'react-router'

import ItemList from './ItemList.jsx'

var SingleList = (props) => (
  <div className="single-list-item">
    <h1><Link to={`/list/${props.listItem._id}`}>{props.listItem.title}</Link></h1>
    <p>{props.listItem.description}</p>
    {props.listItem.items.length !== 0 ? <ItemList items={props.listItem.items} /> : null}
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
