import React, { Component } from "react";
import "./login.scss";

export default class Login extends Component {
  loginUser = () => {};

  render() {
    return (
      <div className="login-container">
        <div className="login-panel">
          <div className="logo">Matshop</div>
          <form onSubmit={this.loginUser}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </form>
          <div className="login-footer">
            {/* <button className="register">Register</button> */}
            <button className="login">Login</button>
          </div>
        </div>
      </div>
    );
  }
}
