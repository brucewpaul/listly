import React from 'react';
import { browserHistory } from 'react-router';

import FormInput from './FormInput.jsx'

class EditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      items: []
    };
  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: `/api/list/${self.props.params.id}`,
      method: "GET",
      success: function(data) {
        self.setState(data[0]);
      }
    })
  }

  handleChange(name, event) {
    var stateChange = {};
    stateChange[name] = event.target.value;
    this.setState(stateChange);
  }

  handleItemChange(index, name, event) {
    var copyStateItems = this.state.items.slice(0);
    copyStateItems[index][name] = event.target.value
    this.setState({items: copyStateItems});
  }

  handleSubmit(event) {
    event.preventDefault();
    var self = this;
    $.ajax({
      url: `/api/list/${self.props.params.id}`,
      method: "PUT",
      data: self.state,
    }).done(function(data) {
      console.log('from ajax', data)
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
        <div className="form-group">
          <label>Title:</label>
          <input
            className="form-control"
            type="text"
            value={this.state.title}
            onChange={this.handleChange.bind(this, 'title')}
            name="title"/>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            className="form-control"
            type="text"
            value={this.state.description}
            onChange={this.handleChange.bind(this, 'description')}
            name="description"/>
        </div>

        <h3>Items:</h3>

        <div className="form-item-list">
          {this.state.items.map( (item, index) => {
            return (
              <FormInput handleItemChange={this.handleItemChange.bind(this)} key={index} index={index} item={item} />
            )
          })}
        </div>

        <a onClick={this.handleAddItem.bind(this)}>Add Item</a>


        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EditList;