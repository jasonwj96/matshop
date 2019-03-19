import React, { Component } from "react";
import "./register.scss";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {
        firstName: false,
        lastName: false,
        email: false,
        password: false
      }
    };
  }

  registerUser = event => alert("Registered user");

  render() {
    return (
      <div className="register-container">
        <div className="form-container">
          <div className="logo">Matshop</div>
          <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="firstName">
              First name <input type="text" name="firstName" />
            </label>
            <label htmlFor="lastName">
              Last name <input type="text" name="lastName" />
            </label>
            <label htmlFor="email">
              Email address <input type="email" name="email" />
            </label>
            <label htmlFor="password">
              Password <input type="password" name="password" />
            </label>
            <label htmlFor="confirmPassword">
              Confirm password <input type="password" name="confirmPassword" />
            </label>
            <div className="form-footer">
              <button onClick={this.registerUser}>Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
