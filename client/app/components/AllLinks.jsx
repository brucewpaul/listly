import React from 'react';

import SingleList from './SingleList.jsx'

class AllLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: []
    };

  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: "/api/lists",
      method: "GET",
      success: function(data) {
        self.setState({
          lists: data
        })
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.lists.map( list => {
          return (
            <SingleList listItem={list} />
          )
        })}
      </div>
    )
  }
}

export default AllLinks;