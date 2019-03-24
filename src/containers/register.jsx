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
      },
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: ""
    };
  }

  componentDidMount() {
    document.title = "Matshop - Register";
  }

  registerUser = () => alert("Registered user");

  handleFirstNameChange = event => {
    this.setState(
      {
        firstName: event.target.value
      },
      () => {}
    );
  };

  handleLastNameChange = event => {
    this.setState(
      {
        lastName: event.target.value
      },
      () => {}
    );
  };

  handleEmailChange = event => {
    this.setState(
      {
        email: event.target.value
      },
      () => {}
    );
  };

  handleAddressChange = event => {
    this.setState(
      {
        address: event.target.value
      },
      () => {}
    );
  };

  handlePasswordChange = event => {
    this.setState(
      {
        password: event.target.value
      },
      () => {}
    );
  };

  handlePasswordConfirmChange = event => {
    this.setState(
      {
        confirmPassword: event.target.value
      },
      () => {}
    );
  };

  render() {
    return (
      <div className="register-container">
        <div className="form-container">
          <div className="logo">Matshop</div>
          <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="firstName">
              <div>
                First name
                <div className="requiredDiv" />
              </div>
              <input
                type="text"
                value={this.state.firstName}
                name="firstName"
                placeholder="Bruce"
                onChange={this.handleFirstNameChange}
              />
            </label>
            <label htmlFor="lastName">
              <div>Last name</div>
              <input
                type="text"
                value={this.state.lastName}
                name="lastName"
                placeholder="Wayne"
                onChange={this.handleLastNameChange}
              />
            </label>
            <label htmlFor="email">
              <div>
                Email address
                <div className="requiredDiv" />
              </div>
              <input
                type="email"
                name="email"
                value={this.state.email}
                placeholder="notbatman@gmail.com"
                onChange={this.handleEmailChange}
              />
            </label>
            <label htmlFor="address">
              <div>Residence address</div>
              <textarea
                type="text"
                name="address"
                value={this.state.address}
                placeholder="Wayne Manor, 1007 Mountain Drive, Gotham City"
                onChange={this.handleAddressChange}
              />
            </label>
            <label htmlFor="password">
              <div>
                Password
                <div className="requiredDiv" />
              </div>
              <input
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handlePasswordChange}
              />
            </label>
            <label htmlFor="confirmPassword">
              <div>
                Confirm password
                <div className="requiredDiv" />
              </div>
              <input
                type="password"
                value={this.state.confirmPassword}
                name="confirmPassword"
                onChange={this.handlePasswordConfirmChange}
              />
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
