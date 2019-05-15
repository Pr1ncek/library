import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const guestLinks = (
      <div className="d-flex flex-row" role="group" aria-label="Basic example">
        <Link to="/login" className="btn btn-primary mr-2  pl-4 pr-4">
          Login
        </Link>
        <Link to="/register" className="btn btn-danger mr-3 pl-4 pr-4">
          Register
        </Link>
      </div>
    );

    const authLinks = (
      <div className="d-flex flex-row" role="group" aria-label="Basic example">
        <Link
          to="/account"
          className="h4 mr-4 mt-1"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          {this.props.isAuthenticated && this.props.currentUser.firstName}
        </Link>
        <Link to="/cart" className="btn btn-secondary mr-2  pl-4 pr-4">
          View Cart
        </Link>

        <Link to="/register" className="btn btn-danger mr-3 pl-4 pr-4" onClick={this.props.logout}>
          Logout
        </Link>
      </div>
    );

    return (
      <nav className="navbar navbar-dark bg-dark container">
        <Link to="/">
          <h1 className="navbar-brand">📚 CSP Library</h1>
        </Link>
        {this.props.isAuthenticated ? authLinks : guestLinks}
      </nav>
    );
  }
}
