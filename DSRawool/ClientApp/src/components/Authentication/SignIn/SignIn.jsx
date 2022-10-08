import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import "./SignIn.css";
import { Collapse } from "bootstrap";
import AuthService from "../../../services/AuthService";
import Toaster from "../../Toaster/Toaster";
import * as bootstrap from "bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function SignIn(props) {
  let navigate = useNavigate();
  let location = useLocation();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [ClientURI, setClientURI] = useState(
    "https://localhost:44488/forgot-password"
  );

  let alertPlaceholder = document.getElementById("liveAlertPlaceholder");

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

  function handleCallbackResponse(response) {
    requestExternalLogin({
      Provider: "google",
      IdToken: response.credential,
    });
  }

  async function requestExternalLogin(loginRequest) {
    alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const data = await AuthService.externalLogin(loginRequest);
    console.log(data.statusCode);

    if (data.statusCode === 200) {
      window.localStorage.setItem("appToken", data.data.token);
      alert("Login successful! Redirecting...", "success");
      console.log(location.state);
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/home");
      }
    } else if (data.statusCode === 401) {
      alert(data.data.errorMessage, "danger");
    } else {
      alert("Login failure.", "danger");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await AuthService.login({
      Email: Email,
      Password: Password,
      ClientURI: ClientURI,
    });

    console.log(data.statusCode);

    if (data.statusCode === 200) {
      window.localStorage.setItem("appToken", data.data.token);
      alert("Login successful! Redirecting...", "success");
      console.log(location.state);
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/home");
      }
    } else if (data.statusCode === 401) {
      alert(data.data.errorMessage, "danger");
    } else {
      alert("Login failure.", "danger");
    }
  };

  const handleChangeUserName = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  const alert = (message, type) => {
    const test = document.getElementById("elementID");
    if (test != null || test != undefined) test.remove();
    const wrapper = document.createElement(`div`);
    wrapper.setAttribute("id", "elementID");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <div id="liveAlertPlaceholder"></div>
      </div>

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
            <h6 className="mb-3 fw-normal">Welcome back!</h6>
            <h1 className="h3 mb-3 fw-normal">Login to your account</h1>

            <div className="text-center">
              <div className="form-floating">
                <input
                  onChange={(e) => handleChangeUserName(e.target.value)}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label>Email address</label>
              </div>
              <div className="form-floating">
                <input
                  onChange={(e) => handleChangePassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label>Password</label>
              </div>

              <div className="row">
                <div className="col row text-left">
                  <div className="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                </div>
                <div className="col row text-right">
                  <a href="/forgot-password" className="link-primary">
                    Forgot Password ?
                  </a>
                </div>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
              <div className="mt-2" id="GoogleSignInButton"></div>
              <p className="mt-3">
                Don't have an account yet?{" "}
                <a href="/sign-up" className="link-primary">
                  Sign up
                </a>
              </p>
              <p className="mt-5 mb-3 text-muted">
                &copy; 2022, www.dsrawool.com
              </p>
            </div>
          </form>
        </main>
        <Toaster
          isError={true}
          messageTime="5 minutes"
          message="myfirstmessage"
        />
      </div>
    </div>
  );
}
export default SignIn;
