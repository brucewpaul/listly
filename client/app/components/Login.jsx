import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // console.log('in head', this)
  }

  showLock() {
    // Show the Auth0Lock widget
    this.props.lock.show();
  }

  render() {
    return (
      <div className="text-center panel panel-default">
        <div className="panel-body">
          <p className="lead">You need to log in to do that first</p>
          <a onClick={this.showLock.bind(this)} className="btn btn-success btn-lg">Login</a>
        </div>
      </div>
    )
  }
}

export default Login;