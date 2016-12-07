import React from 'react';

import Header from './Header.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       lock: this.props.lock,
       idToken: this.props.idToken
     })
    )

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
            {childrenWithProps}
          </div>
        </div>
      </div>
    )
  }
}

export default App;