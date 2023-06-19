import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";


function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "ama99",
      password: "ama999"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


// JSX code for login form
const renderForm = (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="textt" name="uname" placeholder="Username" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" placeholder="Password" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" value="Sign In" />
      </div>
      
    </form>
  </div>
);


  return (
    <div className="app">
      <div className="login-form">
        <div className="title"><h2>Morawaka Hot Kitchen</h2><h5>Sign up or login here</h5></div>
        {isSubmitted ? <div>You are successfully logged in</div> : renderForm}
        <li>
            <Link to="/dashboard">Go</Link>
        </li>
      </div>
    </div>

    
    
  );
}

export default Login;