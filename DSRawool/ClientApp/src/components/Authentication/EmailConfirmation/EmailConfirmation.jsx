import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import "./EmailConfirmation.css";
import { Collapse } from "bootstrap";
import AuthService from "../../../services/AuthService";
import { useLocation, useNavigate } from "react-router-dom";
import * as bootstrap from "bootstrap";

function EmailConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [EmailConfirmed, setEmailConfirmed] = useState(false);

  useEffect(() => {
    const search = location.search;
    const token = new URLSearchParams(search).get("token");
    const email = new URLSearchParams(search).get("email");

    (async () => {
      const response = await AuthService.confirmEmail(
        `email=${email}&token=${token}`
      );
      console.log(response);
      if (response.status === 200) setEmailConfirmed(true);
      else setEmailConfirmed(false);
    })();

    var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
    myModal.show();
  }, []);

  const getConfirmation = async (token, email) => {
    const response = await AuthService.confirmEmail(
      `email=${email}&token=${token}`
    );
    console.log(response);
    if (response.status === 200) setEmailConfirmed(true);
    else setEmailConfirmed(false);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {EmailConfirmed && (
                <h5 className="modal-title" id="exampleModalLabel">
                  Email Verified!
                </h5>
              )}
              {!EmailConfirmed && (
                <h5 className="modal-title" id="exampleModalLabel">
                  Email Verification Failed!
                </h5>
              )}
            </div>
            <div className="modal-body">
              {EmailConfirmed && (
                <div className="alert alert-success" role="alert">
                  <p className="mt-3">
                    Your email has been successfully confirmed. Please{" "}
                    <a href="/sign-up" className="link-primary">
                      click here to login.
                    </a>
                  </p>
                </div>
              )}
              {!EmailConfirmed && (
                <div className="alert alert-danger" role="alert">
                  <p className="mt-3">
                    Invalid Email Confirmation Request. Please try again!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmailConfirmation;
