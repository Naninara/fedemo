import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Dashboard from "./dashboard";
import axios from "axios";
function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginType, setLoginType] = useState("");
  const [auth, setAuth] = useState("");
  const [database,setDatabase]= useState([]);

  {useEffect(() => {
    axios.get("https://cobalt-blue-leopard-suit.cyclic.app/getsignupdetails").then((res) => {
     
      setDatabase(res.data);
    });
  }, [])};
 

  const errors = {
    gmail: "invalid gmail",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { gmail, pass } = document.forms[0];
    const userData = database.find((user) => user.gmail === gmail.value);
    console.log(userData)
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // success
        setIsSubmitted(true);
        setLoginType(userData.type);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="row box">
    <div className="col-md-3">
      <div class="form-container">
      <p class="title">Welocome to Rent it</p>
        <p class="title">Please Login</p>
        <form class="form" onSubmit={handleSubmit}>
          <div class="input-group">
            <label for="username">Gmail</label>
            <input type="email"  id="username" placeholder="" name="gmail" />
            {renderErrorMessage("uname")}
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="pass"
              id="password"
              placeholder=""
            />
             {renderErrorMessage("pass")}
            <div class="forgot">
            <Link rel="noopener noreferrer" to="/forgotpassword">
                Forgot Password ?
              </Link>
            </div>
          </div>
          
            <button class="sign" type="submit">Sign in</button>
          
        </form>

        <p class="signup">
          Don't have an account?
          <Link to="/usersignup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  </div>
  );

  return (
    <>
      {isSubmitted && loginType=="user"? (
        <div>
          {window.location.href="/dashboard"}
        </div>
      ) : (
        <div className="app">{renderForm}</div>
      )}
    </>
  );
}

export default Login;
