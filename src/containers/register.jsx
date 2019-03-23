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
              <div>
                First name
                <div className="requiredDiv" />
              </div>
              <input type="text" name="firstName" placeholder="Bruce" />
            </label>
            <label htmlFor="lastName">
              <div>Last name</div>
              <input type="text" name="lastName" placeholder="Wayne" />
            </label>
            <label htmlFor="email">
              <div>
                Email address
                <div className="requiredDiv" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="brucewayne@gmail.com"
              />
            </label>
            <label htmlFor="address">
              <div>Residence address</div>
              <textarea
                type="text"
                name="address"
                placeholder="Wayne Manor, 1007 Mountain Drive, Gotham City. "
              />
            </label>
            <label htmlFor="password">
              <div>
                Password
                <div className="requiredDiv" />
              </div>
              <input type="password" name="password" />
            </label>
            <label htmlFor="confirmPassword">
              <div>
                Confirm password
                <div className="requiredDiv" />
              </div>
              <input type="password" name="confirmPassword" />
            </label>
            <div className="form-footer">
              <div>
                <div className="requiredDiv" />
                Required field
              </div>
              <button onClick={this.registerUser}>Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
