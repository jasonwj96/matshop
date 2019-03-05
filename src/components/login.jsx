import React, { Component } from "react";
import "./login.scss";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      emailIsValid: false,
      passwordIsValid: false,
      email: "",
      password: "",
      emailInputStyle: {
        borderColor: ""
      },
      passwordInputStyle: {
        borderColor: ""
      }
    };
  }

  //These method will make an http request for validation
  verifyEmail = () => {
    if (this.state.emailRegex.test(this.state.email)) {
      this.setState({
        emailIsValid: !this.state.emailIsValid
      });
    } else {
      alert("Please insert a valid email format");
    }
  };

  //These method will make an http request for validation
  loginUser = () => {};

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });

    if (this.state.emailRegex.test(this.state.email)) {
      this.setState({
        emailInputStyle: {
          borderColor: "#00bb00"
        }
      });
    } else {
      this.setState({
        emailInputStyle: {
          borderColor: "#eb0000"
        }
      });
    }
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

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
                  id="emailInput"
                  type="email"
                  name="email"
                  placeholder="brucewayne@gmail.com"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  style={this.state.emailInputStyle}
                />
                <Link to="/"> Forgot your email?</Link>
              </div>
            ) : (
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="passwordInput"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  style={this.state.passwordInputStyle}
                />
                <Link to="/"> Forgot your password?</Link>
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
                <button onClick={this.loginUser}>Login</button>
              </div>
            )}
            <p>
              Need an account?<Link to="/Register"> click here</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
