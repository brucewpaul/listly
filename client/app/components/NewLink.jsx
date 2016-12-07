import React from 'react';
import { browserHistory } from 'react-router';

import Header from './Header.jsx';
import FormInput from './FormInput.jsx'

class NewLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      items: []
    };
  }

  componentDidMount() {
    // The token is passed down from the App component
    // and used to retrieve the profile
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        return;
      }
      $.ajax({
        url: `/api/user/`,
        method: "PUT",
        data: profile,
      }).done(function(data) {
        console.log('from ajax', data)
      }).fail(function(err){
        console.log('an error has occured :', err);
      });
      this.setState({id: profile.email, profile: profile});
    }.bind(this));
  }

  checkForm() {
    if ( this.state.title && this.state.description ) {
      this.setState({isValid: true})
    }
  }

  handleChange(name, event) {
    var stateChange = {};
    stateChange[name] = event.target.value;
    this.setState(stateChange);
    this.checkForm()
  }

  handleItemChange(index, name, event) {
    var copyStateItems = this.state.items.slice(0);
    copyStateItems[index][name] = event.target.value
    this.setState({items: copyStateItems});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    var self = this;
    $.ajax({
      url: "/api/lists",
      method: "POST",
      data: self.state,
    }).done(function(data) {
      console.log(data)
        browserHistory.push(`/list/${data._id}`);
    }).fail(function(err){
      console.log('an error has occured :', err);
    });
  }

  handleAddItem() {
    var stateChange = {
      title: '',
      description: '',
      url: ''
    }
    this.setState((state) => ({items: state.items.concat([stateChange]) }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="form-group">
              <label>Title:</label>
              <input
                className="form-control"
                type="text"
                value={this.state.title}
                onChange={this.handleChange.bind(this, 'title')}
                name="title"
                required />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                className="form-control"
                type="text"
                value={this.state.description}
                onChange={this.handleChange.bind(this, 'description')}
                name="description"
                required />
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <h3>Items:</h3>

            <div className="form-item-list">
              {this.state.items.map( (item, index) => {
                return (
                  <FormInput handleItemChange={this.handleItemChange.bind(this)} key={index} index={index} item={item} />
                )
              })}
            </div>

            <a onClick={this.handleAddItem.bind(this)} className="btn btn-primary btn-block">Add Item</a>

          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-xs-12">
            <input type="submit" value="Submit" className="btn btn-block btn-success btn-lg" disabled={!this.state.isValid} />
          </div>
        </div>
      </form>
    );
  }
}

export default NewLink;