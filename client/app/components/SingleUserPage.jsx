import React from 'react';
import { Link } from 'react-router'

import SingleList from './SingleList.jsx'

class SingleListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: '',
      lists: []
    }
  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: `/api/user/${self.props.params.id}`,
      method: "GET",
      success: function(data) {
        self.setState({
          currentUser: data
        });
        $.ajax({
          url: `/api/lists/user/${data.email}`,
          method: "GET",
          success: function(data) {
            console.log('from users lists', data)
            self.setState({
              lists: data
            })
          }
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.currentUser.nickname}</h1>
        {this.state.lists.map( list => {
          return (
            <SingleList listItem={list} />
          )
        })}
      </div>
    )
  }
}

export default SingleListPage;