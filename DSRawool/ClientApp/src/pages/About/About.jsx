import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogSideBar from "../../components/BlogSideBar/BlogSideBar";

function About() {
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <h3>About me</h3>
            <hr />
            <div className="col-lg-12">
              <p className="lead">
                Hey, it's Dattatray. I am a software engineer, currently working
                in Mumbai, India. Thank you for reading my blog and checking out
                more about me as a person.
              </p>
              <p className="fw-bold">
                This blog and its contents are all opinions of my own.
              </p>
              <p>
                If you want to drop a mail, feel free to sent it to
                <strong> dattatrayrawool2@gmail.com</strong>.
              </p>
              <p>
                You can connect Dattatray on:
                <br />
                <br />
                GitHub:{" "}
                <a href="https://github.com/dattatrayr" target="_blanksss">
                  https://github.com/dattatrayr
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <BlogSideBar></BlogSideBar>
        </div>
      </div>
    </div>
  );
}

export default About;
