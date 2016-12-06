import React from 'react';
import { Link } from 'react-router'

import SingleList from './SingleList.jsx'

class SingleListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentList: null
    }
  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: `/api/list/${self.props.params.id}`,
      method: "GET",
      success: function(data) {
        self.setState({
          currentList: data[0]
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Link to={`/list/${this.props.params.id}/edit`}>Edit list</Link>
        {this.state.currentList !== null ? <SingleList listItem={this.state.currentList} /> : null}
      </div>
    )
  }
}

export default SingleListPage;