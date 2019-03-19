import React, { Component } from "react";
import "./register.scss";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {
        firstName: false,
        lastName: false,
        email: false
      }
    };
  }

  registerUser = () => {
    console.log();
  };

  render() {
    return (
      <div className="register-container">
        <div className="form-container">
          <div className="logo">Matshop</div>
          <form action="">
            <label htmlFor="firstName">
              First name <input name="firstName" />
            </label>
            <label htmlFor="lastName">
              Last name <input name="lastName" />
            </label>
            <label htmlFor="email">
              Email address <input name="email" />
            </label>
            <label htmlFor="password">
              Password <input name="password" />
            </label>
            <div className="form-footer">
              <button onClick={this.register}>Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
