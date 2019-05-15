import React, { Component } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';
import setAuthToken from './utils/set-auth-token';
import jwt_decode from 'jwt-decode';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    Axios.post('/api/auth/login', { email, password })
      .then(res => {
        console.log(res);
        const { token } = res.data;
        localStorage.setItem('JWT', token);
        setAuthToken(token);
        const decodedUser = jwt_decode(token);
        this.props.setCurrentUser(decodedUser);
        this.props.history.push('/');
      })
      .catch(err => console.error(err));
  };

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your Library account</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                <input type="submit" className="btn btn-primary btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
