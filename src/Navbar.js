import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">
          <h1 className="navbar-brand">Library</h1>
        </Link>
        <div className="d-flex flex-row-reverse" role="group" aria-label="Basic example">
          <Link to="/login" className="btn btn-primary mr-2  pl-4 pr-4">
            Login
          </Link>
          <Link to="/register" className="btn btn-danger mr-3 pl-4 pr-4">
            Register
          </Link>
        </div>
      </nav>
    );
  }
}
