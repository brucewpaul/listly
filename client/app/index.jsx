import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import App from './components/App.jsx';
import AllLinks from './components/AllLinks.jsx';
import NewLink from './components/NewLink.jsx';
import SingleList from './components/SingleList.jsx';
import EditList from './components/EditList.jsx';

import SingleListPage from './components/SingleListPage.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AllLinks} />
      <Route path="/new" component={NewLink} />
      <Route path="/list/:id" component={SingleListPage} />
      <Route path="/list/:id/edit" component={EditList} />
    </Route>
  </Router>
), document.getElementById('app'));