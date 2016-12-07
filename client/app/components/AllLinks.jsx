import React from 'react';

import SingleList from './SingleList.jsx'

class AllLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      stars: []
    };

  }

  componentWillMount() {
    var self = this;
    $.ajax({
      url: "/api/lists",
      method: "GET",
      success: function(data) {
        self.setState({
          lists: data
        })
      }
    });
    this.props.lock.getProfile(self.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        return;
      }
      self.setState({id: profile.email, profile: profile});
    });
  }

  handleClick(listId) {
    // console.log('test',this,listId)
    // var self = this;
    // $.ajax({
    //   url: `/api/user/${self.state.id}/stars/${listId}`,
    //   method: "POST",
    //   success: function(data) {
    //     console.log('from users update', data)
    //     this.setState((state) => ({stars: state.stars.concat([data.stars]) }));
    //   }
    // })
  }

  render() {
    return (
      <div>
        {this.state.lists.map( list => {
          return (
            <SingleList user={this.state.profile} handleClick={this.handleClick.bind(this)} listItem={list} />
          )
        })}
      </div>
    )
  }
}

export default AllLinks;