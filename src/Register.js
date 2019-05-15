import React, { Component } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';

class Register extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    Axios.post('/api/auth/register', { firstName, lastName, email, password })
      .then(res => {
        console.log(res);
        this.props.history.push('/login');
      })
      .catch(err => console.error(err));
  };

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div className="register ">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Library account</p>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                    required
                  />
                </div>
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

                <input type="submit" className="btn btn-danger btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
