import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import configuration from "../config";
import Notification from "../components/notification";
import "./login.scss";

const Login = props => {
  const [userLoggedIn] = useState(
    localStorage.getItem("userEmail") ? true : false
  );
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
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationTitle, setNotificationTitle] = useState("");

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

  const displayNotification = (title, message) => {
    const notification = document.getElementById("notification");
    setNotificationTitle(title);
    setNotificationMessage(message);
    notification.style.opacity = 1;

    setTimeout(() => {
      notification.style.opacity = 0;
    }, 5000);
  };

  const loginUser = async () => {
    if (configuration.passwordRegex.test(password)) {
      try {
        const response = await fetch(`${configuration.apiPath}/account/login`, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ password: password })
        });

        const data = await response.json();

        if (data.userLoggedIn) {
          localStorage.setItem("userEmail", email);
          props.history.push("/home");
        } else {
          displayNotification(
            "Invalid input",
            "The email entered does not exist"
          );
        }
      } catch (error) {
        displayNotification(
          "Password error",
          "The password entered does not match the user email"
        );
      }
    } else {
      displayNotification(
        "Invalid password",
        "Please use a valid password format"
      );
    }
  };

  const verifyEmail = async () => {
    if (configuration.emailRegex.test(email)) {
      try {
        const response = await fetch(
          `${configuration.apiPath}/account/validate`,
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
        displayNotification("Email error", "The email entered does not exist");
      }
    } else {
      displayNotification("Invalid input", "Please use a valid email format");
    }
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const content = (
    <div>
      {userLoggedIn ? (
        <Redirect to="/home" />
      ) : (
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
      )}
      <Notification title={notificationTitle} message={notificationMessage} />
    </div>
  );

  return content;
};

export default Login;
