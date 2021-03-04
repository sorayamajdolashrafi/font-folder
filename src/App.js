import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Home from './home/Home.js';
import Sign from './sign/Sign.js';
import Search from './search/Search.js';
import Detail from './detail/Detail.js';
import Favorites from './favorites/Favorites.js';
import { putUserInLocalStorage, getUserFromLocalStorage } from './utils/localStorage-utils.js';
import PrivateRoute from './components/PrivateRoute';

export default class App extends Component {
  state = {
    user: getUserFromLocalStorage()
  }

  handleUserChange = (user) => {
    this.setState({ user })

    putUserInLocalStorage(user);
  }

  handleSignOut = () => {
    this.handleUserChange({})
  }

  render() {
    return (
      <div>
        <Router>

          <Header
            user={this.state.user}
            handleSignOut={this.handleSignOut} />

          <Switch>            
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/signin"
              exact
              render={(routerProps) => 
                <Sign
                  handleUserChange={this.handleUserChange} 
                  {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => 
                <Search 
                  user={this.state.user}
                  {...routerProps} />}
            />
            <Route
              path="/detail/:id"
              exact
              render={(routerProps) => 
                <Detail 
                user={this.state.user}
                {...routerProps} />}
            />
            <PrivateRoute
              path="/favorites"
              exact 
              token={this.state.user && this.state.user.token} 
              render={(routerProps) =>
                <Favorites
                  user={this.state.user} 
                  {...routerProps} />}
            />
          </Switch>

        </Router>
        
      </div>
    )
  }
}
