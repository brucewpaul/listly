import React from 'react';
import { Link } from 'react-router'

import ItemList from './ItemList.jsx'

class SingleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="single-list-item panel panel-default">
        <div className="panel-heading">
          <h1><Link to={`/list/${this.props.listItem._id}`}>{this.props.listItem.title}</Link></h1>
          <p><Link to={`/user/${this.props.listItem.id}`}><small>by {this.props.listItem.id}</small></Link></p>
        </div>
        <div className="panel-body">
          <p className="lead">{this.props.listItem.description}</p>
          {this.props.listItem.items.length !== 0 ? <ItemList items={this.props.listItem.items} /> : null}
        </div>
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
SingleList.propTypes = {
  listItem: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default SingleList;
