import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import "./ForgotPassword.css";
import { Collapse } from "bootstrap";
import AuthService from "../../../services/AuthService";

function ForgotPassword() {
  const [User, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log(response);
    console.log(jwtDecode(response.credential));
    setUser(jwtDecode(response.credential));
    requestExternalLogin({
      Provider: "google",
      IdToken: response.credential,
    });
  }

  async function requestExternalLogin(loginRequest) {
    const data = await AuthService.externalLogin(loginRequest);
    console.log(data);
  }

  useEffect(() => {}, []);
  return (
    <div className="body-new text-center">
      <main className="form-signin w-100 m-auto">
        <div className="card mb-4">
          <div className="card-header">Forgot Password</div>
          <div className="card-body">
            <form>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter your email address"
                />
                <label>Email Address</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default ForgotPassword;
