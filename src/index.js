import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import setAuthToken from './utils/set-auth-token';
import jwt_decode from 'jwt-decode';
import Login from './Login';
import Register from './Register';
import Book from './Book';
import Checkout from './Checkout';
import Cart from './Cart';
import Account from './Account';
import Navbar from './Navbar';

const checkAuthenticationStatus = () => {
  // check for token
  if (localStorage.JWT) {
    setAuthToken(localStorage.JWT);
    const decoded = jwt_decode(localStorage.JWT);
    // check for expiration
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem('JWT');
      setAuthToken(false);
      return false;
    }
    return decoded;
  }
  return false;
};

class Root extends React.Component {
  state = {
    currentUser: {},
    isAuthenticated: false
  };

  componentWillMount() {
    const currentUser = checkAuthenticationStatus();
    if (currentUser) this.setState({ currentUser, isAuthenticated: true });
    console.log(currentUser);
  }

  setCurrentUser = user => this.setState({ currentUser: user, isAuthenticated: true });

  logout = () => {
    localStorage.removeItem('JWT');
    setAuthToken(false);
    this.setState({ currentUser: {}, isAuthenticated: false });
  };

  render() {
    const { currentUser, isAuthenticated } = this.state;
    return (
      <BrowserRouter>
        <Navbar logout={this.logout} isAuthenticated={isAuthenticated} currentUser={currentUser} />

        <Switch>
          <Route path="/" component={App} exact />

          <Route
            path="/account"
            render={props => (
              <Account {...props} currentUser={currentUser} isAuthenticated={isAuthenticated} />
            )}
            exact
          />

          <Route
            path="/login"
            render={props => (
              <Login
                setCurrentUser={this.setCurrentUser}
                isAuthenticated={isAuthenticated}
                {...props}
              />
            )}
            exact
          />

          <Route
            path="/register"
            render={props => <Register {...props} isAuthenticated={isAuthenticated} />}
            exact
          />

          <Route path="/book/:isbn" component={Book} exact />

          <Route path="/book/checkout/:isbn" component={Checkout} exact />

          <Route path="/cart" render={routeProps => <Cart {...routeProps} />} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
