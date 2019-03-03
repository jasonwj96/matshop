import React, { Component } from "react";
import "./login.scss";

export default class Login extends Component {
  loginUser = () => {};

  render() {
    return (
      <div className="login-container">
        <div className="login-panel">
          <div className="logo">Matshop</div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <a href="/"> Forgot your password?</a>
          </form>

          <div className="login-footer">
            <button onClick={this.loginUser}>Login</button>
            <p>
              Need an account?<a href="/home"> Click Here</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
