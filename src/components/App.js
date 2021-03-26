import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Modal } from "./Modal";
import { List } from "./List";
import UserDetail from "./UserDetail";

import "./App.css";

export const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <div className='ui container'>
          <Switch>
            <Route path='/' exact>
              <List />
            </Route>
            <Route
              path='/users/:pageNo'
              render={(props) => <List {...props} />}
            />
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
