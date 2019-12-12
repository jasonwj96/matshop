import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import configuration from "../config";
import "./loginform.scss";
import { useHistory } from "react-router-dom";


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
  const history = useHistory();

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
    if (configuration.emailRegex.test(email) && configuration.passwordRegex.test(password)) {
      const options = {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ email, password })
      };

      await fetch(`${configuration.apiPath}/loginUser.php`, options)
        .then(
          (response) => response.clone().text()
        )
        .then(
          (json) => {
            const response = JSON.parse(json);
            if (response[0].user_email === email) {
              localStorage.setItem("user_logged_in", true);
              localStorage.setItem("user_email", email);
              history.push("/home");
            }
          }
        )
        .catch(
          (err) => console.log(err)
        )

    }
  };

  const verifyEmail = async () => {
    if (configuration.emailRegex.test(email)) {
      const options = {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ email })
      };

      await fetch(`${configuration.apiPath}/verifyEmail.php`, options)
        .then(
          (response) => {
            return response.clone().text();
          }
        )
        .then(
          (json) => {
            const response = JSON.parse(json);
            console.log(response[0].user_email);
            setEmailIsValid(!emailIsValid);
            setEmail(response[0].user_email);
          }
        )
        .catch(
          () => alert('Error: el email introducido no existe.')
        )
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
                  <button className="back-btn" onClick={() => setEmailIsValid(!emailIsValid)}>
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
    </div >
  );
};

export default LoginForm;
