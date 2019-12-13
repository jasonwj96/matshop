import React, { useState, useEffect } from "react";
import "./register.scss";
import Configuration from "../config";

const Register = props => {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerData, setRegisterData] = useState({});

  useEffect(() => {
    document.title = "Matshop - Register";
  }, []);

  const registerUser = () => {
    const data = {
      userId: Math.random().toString(36).slice(2).substring(0, 6).toUpperCase(),
      firstName,
      lastName,
      email,
      address,
      password
    }

    if (registerData !== null && window.confirm("Are you sure you want to register?")) {
      const options = {
        method: 'POST',
        body: JSON.stringify(registerData)
      }
      const url = `${Configuration.apiPath}/registerUser.php`;

      fetch(url, options)
        .then(
          response => response.clone().text()
        )
        .then(
          json => alert("User registered successfully")
        )
        .catch
        (
          err => console.log(err)
        )
    }

    setRegisterData(data);
  };

  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = event => {
    setLastName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleAddressChange = event => {
    setAddress(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = event => {
    setConfirmPassword(event.target.value);
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
              value={firstName}
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
              value={lastName}
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
              value={email}
              placeholder="notbatman@gmail.com"
              onChange={handleEmailChange}
            />
          </label>
          <label htmlFor="address">
            <div>Residence address</div>
            <textarea
              type="text"
              name="address"
              value={address}
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
              value={password}
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
              value={confirmPassword}
              name="confirmPassword"
              onChange={handlePasswordConfirmChange}
            />
          </label>
          <div className="form-footer">
            <div>
              <div className="requiredDiv" />
              <p id="requiredText">
                Required field
              </p>
            </div>
            <button onClick={registerUser}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Register);
