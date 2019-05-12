import React, { Component } from 'react';
import Navbar from './Navbar';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <Navbar />
          <div className="row mt-5">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your Library account</p>
              <form action="dashboard.html">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <input type="submit" className="btn btn-danger btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;