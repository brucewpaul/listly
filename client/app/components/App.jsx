import React from 'react';

import Header from './Header.jsx'
import Main from './Main.jsx'

class App extends React.Component {
  componentWillMount() {
    this.lock = new Auth0Lock('9uvVgISu0MjoaTUt51nqBGEWPWqjmQXQ', 'brucewpaul.auth0.com');
    // Set the state with a property that has the token
    this.setState({idToken: this.getIdToken()});
  }

  createLock() {
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
  }

  getIdToken() {
    // First, check if there is already a JWT in local storage
    var idToken = localStorage.getItem('id_token');
    var authHash = this.lock.parseHash(window.location.hash);
    // If there is no JWT in local storage and there is one in the URL hash,
    // save it in local storage
    if (!idToken && authHash) {

      if (authHash.id_token) {

        idToken = authHash.id_token
        localStorage.setItem('id_token', authHash.id_token);
      }
      if (authHash.error) {
        // Handle any error conditions
        console.log("Error signing in", authHash);
      }
    }
    return idToken;
  }

  render() {
    return (
      <div>
        <Header idToken={this.state.idToken} lock={this.lock} />
        <Main lock={this.lock} idToken={this.state.idToken} children={this.props.children}/>
      </div>
    )
  }
}

export default App;