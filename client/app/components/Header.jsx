import React from 'react';
import { Link, browserHistory } from 'react-router'


class Header extends React.Component {
  constructor(props) {
    super(props);
    // console.log('in head', this)
  }

  showLock() {
    // Show the Auth0Lock widget
    this.props.lock.show();
  }

  logout() {
    localStorage.removeItem('id_token');
    // browserHistory.push('/');
    window.location.href = ('/');
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to={`/`} className="navbar-brand">Make-A-List</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              { this.props.idToken ? (<li><Link to={`/new`}>New List</Link></li>) : null }

              { this.props.idToken ? (<li><a onClick={this.logout}>Logout</a></li>) : ( <li><a onClick={this.showLock.bind(this)}>Login</a></li>) }


            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;