import React, { useState } from "react";
import "./register.scss";
// import Configuration from "../config";

const Register = props => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    errors: {
      firstName: false,
      lastName: false,
      email: false,
      password: false
    }
  });

  document.title = "Matshop - Register";

  const registerUser = () => alert("Registered user");

  const handleFirstNameChange = event => {
    setState({ ...state, firstName: event.target.value });
  };

  const handleLastNameChange = event => {
    setState({ ...state, lastName: event.target.value });
  };

  const handleEmailChange = event => {
    setState({ ...state, email: event.target.value });
  };

  const handleAddressChange = event => {
    setState({ ...state, address: event.target.value });
  };

  const handlePasswordChange = event => {
    setState({ ...state, password: event.target.value });
  };

  const handlePasswordConfirmChange = event => {
    setState({ ...state, confirmPassword: event.target.value });
  };

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
              value={state.firstName || ""}
              name="firstName"
              placeholder="Bruce"
              onChange={handleFirstNameChange}
              onClick={handleFirstNameChange}
            />
          </label>
          <label htmlFor="lastName">
            <div>Last name</div>
            <input
              type="text"
              value={state.lastName || ""}
              name="lastName"
              placeholder="Wayne"
              onChange={handleLastNameChange}
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
              value={state.email || ""}
              placeholder="notbatman@gmail.com"
              onChange={handleEmailChange}
            />
          </label>
          <label htmlFor="address">
            <div>Residence address</div>
            <textarea
              type="text"
              name="address"
              value={state.address || ""}
              placeholder="Wayne Manor, 1007 Mountain Drive, Gotham City"
              onChange={handleAddressChange}
            />
          </label>
          <label htmlFor="password">
            <div>
              Password
              <div className="requiredDiv" />
            </div>
            <input
              type="password"
              value={state.password || ""}
              name="password"
              onChange={handlePasswordChange}
            />
          </label>
          <label htmlFor="confirmPassword">
            <div>
              Confirm password
              <div className="requiredDiv" />
            </div>
            <input
              type="password"
              value={state.confirmPassword || ""}
              name="confirmPassword"
              onChange={handlePasswordConfirmChange}
            />
          </label>
          <div className="form-footer">
            <div>
              <div className="requiredDiv" />
              Required field
            </div>
            <button onClick={registerUser}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
