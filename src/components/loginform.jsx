import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import configuration from "../config";
import "./loginform.scss";

const LoginForm = props => {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: true,
    password: true
  });
  const [classNames, setClassNames] = useState({
    email: "pristine",
    password: "pristine"
  });

  useEffect(() => {
    document.title = "Matshop - Login";
  }, []);

  useEffect(() => {
    const regex = configuration.emailRegex;
    const valid = regex.test(email);

    if (valid) {
      setClassNames({ ...classNames, email: "valid" });
    } else {
      setClassNames({ ...classNames, email: "error" });
    }

    setErrors({ ...errors, email: valid });
  }, [email]);

  useEffect(() => {
    const regex = configuration.passwordRegex;
    const valid = regex.test(password);

    if (valid) {
      setClassNames({ ...classNames, password: "valid" });
    } else {
      setClassNames({ ...classNames, password: "error" });
    }

    setErrors({ ...errors, password: valid });
  }, [password]);


  const loginUser = async () => {
    // if (configuration.passwordRegex.test(password)) {
    //   try {
    //     const response = await fetch(`${configuration.apiPath}/account/login`, {
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       method: "POST",
    //       body: JSON.stringify({ password: password })
    //     });

    //     const data = await response.json();
    //   } catch (error) {

    //   }
    // } else {

    // }
  };

  const verifyEmail = async () => {
    if (configuration.emailRegex.test(email)) {
      try {
        const response = await fetch(
          `${configuration.apiPath}/verifyEmail.php`,
          {
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ email })
          }
        );

        const data = await response.json();

        if (data.accountExists) {
          setEmailIsValid(!emailIsValid);
        } else {
          throw new Error("The email doesn't exist");
        }
      } catch (error) {
      }
    } else {
    }
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-panel">
          <div className="logo">Matshop</div>
          <form onSubmit={e => e.preventDefault()}>
            {!emailIsValid ? (
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="emailInput"
                  className={classNames.email}
                  type="email"
                  name="email"
                  placeholder="brucewayne@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                  onClick={handleEmailChange}
                />
                <Link className="link" to="/recovery">
                  Forgot your email?
                </Link>
              </div>
            ) : (
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="passwordInput"
                    className={classNames.password}
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    onClick={handlePasswordChange}
                  />
                  <Link to="/"> Forgot your password?</Link>
                </div>
              )}
          </form>

          <div className="login-footer">
            {!emailIsValid ? (
              <div className="login-buttons">
                <button onClick={verifyEmail}>Next</button>
              </div>
            ) : (
                <div className="login-buttons">
                  <button className="back-btn" onClick={verifyEmail}>
                    Back
                </button>
                  <button onClick={loginUser}>Login</button>
                </div>
              )}
            <p>
              Need an account?
              <Link className="link" to="/register">
                click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
