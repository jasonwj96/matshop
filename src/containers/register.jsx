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

  registerUser = () => alert("Registered user");

  render() {
    return (
      <div className="register-container">
        <div className="form-container">
          <div className="logo">Matshop</div>
          <form onSubmit={this.registerUser}>
            <label htmlFor="firstName">
              <p>
                First name
                <div className="requiredDiv" />
              </p>
              <input type="text" name="firstName" />
            </label>
            <label htmlFor="lastName">
              <p>Last name</p>
              <input type="text" name="lastName" />
            </label>
            <label htmlFor="email">
              <p>
                Email address
                <div className="requiredDiv" />
              </p>
              <input type="email" name="email" />
            </label>
            <label htmlFor="password">
              <p>
                Password
                <div className="requiredDiv" />
              </p>
              <input type="password" name="password" />
            </label>
            <label htmlFor="confirmPassword">
              <p>
                Confirm password
                <div className="requiredDiv" />
              </p>
              <input type="password" name="confirmPassword" />
            </label>
            <div className="form-footer">
              <p>
                <div className="requiredDiv" />
                Required field
              </p>
              <button onClick={this.registerUser}>Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
