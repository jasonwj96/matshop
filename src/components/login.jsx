import React, { Component } from "react";
import "./login.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailIsValid: false,
      passwordIsValid: true
    };
  }

  verifyEmail = () => {
    this.setState({
      emailIsValid: !this.state.emailIsValid
    });
  };
  verifyPassword = () => alert("Logged in succesfully");

  render() {
    return (
      <div className="login-container">
        <div className="login-panel">
          <div className="logo">Matshop</div>
          <form>
            {!this.state.emailIsValid ? (
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="brucewayne@gmail.com"
                />
                <a href="/"> Forgot your email?</a>
              </div>
            ) : (
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <a href="/"> Forgot your password?</a>
              </div>
            )}
          </form>

          <div className="login-footer">
            {!this.state.emailIsValid ? (
              <div className="login-buttons">
                <button onClick={this.verifyEmail}>Next</button>
              </div>
            ) : (
              <div className="login-buttons">
                <button className="back-btn" onClick={this.verifyEmail}>
                  Back
                </button>
                <button onClick={this.verifyPassword}>Login</button>
              </div>
            )}
            <p>
              Need an account?<a href="/home"> Click Here</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
