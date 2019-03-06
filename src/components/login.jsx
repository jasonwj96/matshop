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
      emailInputStyle: {
        borderColor: ""
      },
      passwordInputStyle: {
        borderColor: ""
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
          alert("The password is correct.");
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
          throw new Error();
        }
      } catch (error) {
        alert("The email doesn't exist");
      }
    } else {
      alert("Please insert a valid email format");
    }
  };

  //configures style input validation given a regex and an input value
  handleInputChange = (regex, validStyle, errorStyle, inputValue) => {
    if (regex.test(inputValue)) {
      this.setState(validStyle);
    } else {
      this.setState(errorStyle);
    }
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });

    const validStyle = {
      emailInputStyle: {
        borderColor: "#00bb00" //green
      }
    };

    const errorStyle = {
      emailInputStyle: {
        borderColor: "#eb0000" //red
      }
    };

    this.handleInputChange(
      configuration.emailRegex,
      validStyle,
      errorStyle,
      this.state.email
    );
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });

    const validStyle = {
      passwordInputStyle: {
        borderColor: "#00bb00" //green
      }
    };

    const errorStyle = {
      passwordInputStyle: {
        borderColor: "#eb0000" //red
      }
    };

    this.handleInputChange(
      configuration.passwordRegex,
      validStyle,
      errorStyle,
      this.state.password
    );
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
