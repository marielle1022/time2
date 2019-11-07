// Taken largely from Nat's Notes 16-spa notes and lens app
// spa1-setup branch
// This is to simulate pages using Ract-Router
// Current path is part of application state.
// Store application state in URL bar, not in root component
// state or Redux
// Use path (and React-Router) to decide which components to render.
// Changes to SPA: adding route that points to js/timesheets/new...
// In SPA, now have jsx pages for timesheets, different things relating to
// timesheets, etc.

// QUESTION: include this?
// <Route exact path="/photos/:id" render={(props) =>
//   <PhotosShow id={props.match.params.id} />
// } />

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Col } from 'react-bootstrap';
import { Provider, connect } from 'react-redux';

import TimesheetsNew from './timesheets/new';
import TimesheetsList from './timesheets/index';
import TimesheetsShow from './timesheets/show';
import Login from './login';

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
        <Col md="8">
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
        </Col>
        <Col md="4">
          <Session />
        </Col>
      </Navbar>

      <Switch>
        <Route exact path="/">
           <TimesheetsList />
         </Route>

        <Route exact path="/users">
          <h1>Users</h1>
        </Route>

        <Route exact path="/timesheets/new">
          <TimesheetsNew />
        </Route>

        <Route exact path="/timesheets/:id" render={
          (props) =>
            <TimesheetsShow id={props.match.params.id} />
        } />

        <Route exact path="/login">
          <Login />
        </Route>

      </Switch>
    </Router>
  );
}

let Session = connect(({session}) => ({session}))(({session, dispatch}) => {
  function logout(ev) {
    ev.preventDefault();
    localStorage.removeItem('session');
    dispatch({
      type: 'LOG_OUT',
    });
  }

  if (session) {
    return (
      <Nav>
        <Nav.Item>
          <p className="text-light py-2">User: {session.username}</p>
        </Nav.Item>
        <Nav.Item>
          <a className="nav-link" href="#" onClick={logout}>Logout</a>
        </Nav.Item>
      </Nav>
    );
  }
  else {
    return (
      <Nav>
        <Nav.Item>
          <NavLink to="/login" exact activeClassName="active" className="nav-link">
            Login
          </NavLink>
        </Nav.Item>
      </Nav>
    );
  }
});
