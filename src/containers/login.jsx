import React, { Component } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import configuration from "../config";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailIsValid: false,
      passwordIsValid: false,
      email: "",
      password: "",
      errors: {
        email: true,
        password: true
      },
      classNames: {
        email: "pristine",
        password: "pristine"
      }
    };
  }

  loginUser = async () => {
    if (configuration.passwordRegex.test(this.state.password)) {
      try {
        const response = await fetch(`${configuration.apiPath}/account/login`, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ password: this.state.password })
        });

        const data = await response.json();

        if (data.userLoggedIn) {
          localStorage.setItem("userEmail", this.state.email);
          this.props.history.push("/home");
        } else {
          throw new Error();
        }
      } catch (error) {
        alert("The password is incorrect.");
      }
    }
  };

  verifyEmail = async () => {
    if (configuration.emailRegex.test(this.state.email)) {
      try {
        const response = await fetch(
          `${configuration.apiPath}/account/validate`,
          {
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ email: this.state.email })
          }
        );

        const data = await response.json();

        if (data.accountExists) {
          this.setState({
            emailIsValid: !this.state.emailIsValid
          });
        } else {
          throw new Error("The email doesn't exist");
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Please insert a valid email format");
    }
  };

  handleEmailChange = event => {
    this.setState(
      {
        email: event.target.value
      },
      () => {
        const regex = configuration.emailRegex;
        const valid = regex.test(this.state.email);

        if (valid) {
          this.setState({
            classNames: {
              email: "valid"
            }
          });
        } else {
          this.setState({
            classNames: {
              email: "error"
            }
          });
        }

        this.setState({
          errors: {
            email: valid
          }
        });
      }
    );
  };

  handlePasswordChange = event => {
    this.setState(
      {
        password: event.target.value
      },
      () => {
        const regex = configuration.passwordRegex;
        const valid = regex.test(this.state.password);

        if (valid) {
          this.setState({
            classNames: {
              password: "valid"
            }
          });
        } else {
          this.setState({
            classNames: {
              password: "error"
            }
          });
        }

        this.setState({
          errors: {
            password: valid
          }
        });
      }
    );
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-panel">
          <div className="logo">Matshop</div>
          <form onSubmit={e => e.preventDefault()}>
            {!this.state.emailIsValid ? (
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="emailInput"
                  className={this.state.classNames.email}
                  type="email"
                  name="email"
                  placeholder="brucewayne@gmail.com"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  onClick={this.handleEmailChange}
                />
                <Link to="/"> Forgot your email?</Link>
              </div>
            ) : (
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="passwordInput"
                  className={this.state.classNames.password}
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  onClick={this.handlePasswordChange}
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
