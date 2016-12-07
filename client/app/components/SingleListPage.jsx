import React from 'react';
import { Link } from 'react-router'

import SingleList from './SingleList.jsx'

class SingleListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentList: null,
      isUserList: false
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
        });
        self.props.lock.getProfile(self.props.idToken, function (err, profile) {
          if (err) {
            console.log("Error loading the Profile", err);
            return;
          }
          if ( data[0].id === profile.email ) {
            self.setState({isUserList: true});
          }
        });
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.isUserList ? (<p><Link to={`/list/${this.props.params.id}/edit`}>Edit list</Link></p>) : null }
        {this.state.currentList !== null ? <SingleList listItem={this.state.currentList} /> : null}
      </div>
    )
  }
}

export default SingleListPage;