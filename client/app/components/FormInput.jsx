import React from 'react'

var FormInput = (props) => (
  <div>
    <div className="form-group">
      <label>Title:</label>
      <input
        className="form-control"
        type="text"
        value={props.item.title}
        onChange={props.handleItemChange.bind(this, props.index, 'title')}
        name="title"/>
    </div>
    <div className="form-group">
      <label>Description:</label>
      <input
        className="form-control"
        type="text"
        value={props.item.description}
        onChange={props.handleItemChange.bind(this, props.index, 'description')}
        name="title"/>
    </div>
    <div className="form-group">
      <label>Url:</label>
      <input
        className="form-control"
        type="text"
        value={props.item.url}
        onChange={props.handleItemChange.bind(this, props.index, 'url')}
        name="title"/>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default FormInput;
