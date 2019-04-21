import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import "./login.scss";
import LoginForm from "../components/loginform";

const Login = props => {
  const [userLoggedIn] = useState(
    localStorage.getItem("userEmail") ? true : false
  );

  const content = userLoggedIn ? <Redirect to="/home" /> : <LoginForm />;

  return content;
};

export default Login;
