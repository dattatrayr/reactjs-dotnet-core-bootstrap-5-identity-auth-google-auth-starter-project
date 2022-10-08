import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import "./Register.css";
import { Collapse } from "bootstrap";
import AuthService from "../../../services/AuthService";
function Register() {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [ClientURI, setClientURI] = useState(
    "https://localhost:44488/email-confirmation"
  );
  function handleCallbackResponse(response) {
    requestExternalLogin({
      Provider: "google",
      IdToken: response.credential,
    });
  }

  async function requestExternalLogin(loginRequest) {
    const data = await AuthService.externalLogin(loginRequest);
    console.log(data);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_PROVIDER_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("GoogleSignInButton"),
      {
        type: "standard",
        text: "continue_with",
        theme: "filled_blue",
        size: "large",
        width: document.getElementById("GoogleSignInButton").offsetWidth,
        height: document.getElementById("GoogleSignInButton").offsetHeight,
      }
    );
    google.accounts.id.prompt();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await AuthService.registerUser({
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Password: Password,
      ConfirmPassword: ConfirmPassword,
      ClientURI: ClientURI,
    });

    console.log(data);
    alert("submitted!");
  };

  const handleChangeFirstName = (value) => {
    setFirstName(value);
  };

  const handleChangeLastName = (value) => {
    setLastName(value);
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  const handleChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  return (
    <div className="body-new">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <svg
            className="mb-4"
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="57"
            fill="currentColor"
            className="bi bi-bullseye"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg> */}
          <h6 className="mb-3 fw-normal">Welcome!</h6>
          <h1 className="h3 mb-3 fw-normal">Create your account</h1>
          <div className="text-center">
            <div className="form-floating mt-2">
              <input
                onChange={(e) => handleChangeFirstName(e.target.value)}
                type="text"
                className="form-control"
                id="floatingFirstName"
                placeholder="First Name"
              />
              <label>First Name</label>
            </div>
            <div className="form-floating mt-2">
              <input
                onChange={(e) => handleChangeLastName(e.target.value)}
                type="text"
                className="form-control"
                id="floatingLastName"
                placeholder="Last Name"
              />
              <label>Last Name</label>
            </div>
            <div className="form-floating mt-2">
              <input
                onChange={(e) => handleChangeEmail(e.target.value)}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label>Email address</label>
            </div>
            <div className="form-floating mt-2">
              <input
                onChange={(e) => handleChangePassword(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label>Password</label>
            </div>

            <div className="form-floating mt-2">
              <input
                onChange={(e) => handleChangeConfirmPassword(e.target.value)}
                type="confirmPassword"
                className="form-control"
                id="floatingConfirmPassword"
                placeholder="Confirm Password"
              />
              <label>Confirm Password</label>
            </div>

            <div className="checkbox mt-2 mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Subscribe{" "}
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign Up
            </button>
            <div className="mt-2" id="GoogleSignInButton"></div>
            <p className="mt-3">
              Already have an account?{" "}
              <a href="/sign-in" className="link-primary">
                Sign in
              </a>
            </p>
            <p className="mt-5 mb-3 text-muted">
              &copy; 2022, www.dsrawool.com
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
export default Register;
