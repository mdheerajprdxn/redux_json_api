import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { List } from "./List";
import UserDetail from "./UserDetail";
import "./App.css";

export const App = () => {
  return (
    <div>
      <Router>
        <div className='ui menu'>
          <div className='header item'>
            <Link to='/'>Home</Link>
          </div>
        </div>
        <div className='ui container'>
          <Switch>
            <Route path='/' exact>
              <List />
            </Route>
            <Route
              path='/user/:id'
              render={(props) => <UserDetail {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
