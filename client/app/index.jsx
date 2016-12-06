import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Main from './components/Main.jsx';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import AllLinks from './components/AllLinks.jsx';
import NewLink from './components/NewLink.jsx';
import SingleList from './components/SingleList.jsx';
import EditList from './components/EditList.jsx';

import SingleListPage from './components/SingleListPage.jsx';
import SingleUserPage from './components/SingleUserPage.jsx';

var checkAuth = function(nextState, replace) {
  if (!localStorage.getItem('id_token')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AllLinks} />
      <Route path="/new" component={NewLink} onEnter={checkAuth} />
      <Route path="/login" component={Login} />
      <Route path="/user/:id" component={SingleUserPage} />
      <Route path="/list/:id" component={SingleListPage} />
      <Route path="/list/:id/edit" component={EditList} onEnter={checkAuth}/>
    </Route>
  </Router>
), document.getElementById('app'));