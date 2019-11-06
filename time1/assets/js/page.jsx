// Taken largely from Nat's Notes 16-spa notes and lens app
// spa1-setup branch
// This is to simulate pages using Ract-Router
// Current path is part of application state.
// Store application state in URL bar, not in root component
// state or Redux
// Use path (and React-Router) to decide which components to render.
// Changes to SPA: adding route that points to js/timesheets/new...
// In SPA, now have jsx pages for timesheets, different things relating to
// timehseets, etc.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import TimesheetsNew from './timesheets/new';
import { Provider, connect } from 'react-redux';

import store from './store';

export default function init_page(root) {
  let tree = (
    <Provider store={store}>
      <Page />
    </Provider>
  );
  ReactDOM.render(tree, root);
}

function Page(props) {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Nav>
          <Nav.Item>
            <NavLink to="/" exact activeClassName="active" className="nav-link">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/users" exact activeClassName="active" className="nav-link">
              Users
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/timesheets/new" exact activeClassName="active" className="nav-link">
            New Timesheet
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>

        <Route exact path="/users">
          <h1>Users</h1>
        </Route>

        <Route exact path="/timesheets/new">
          <TimesheetsNew />
        </Route>
      </Switch>
    </Router>
  );
}
