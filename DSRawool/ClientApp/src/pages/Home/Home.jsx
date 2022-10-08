import React, { Component } from "react";
import Post from "../../components/BlogPosts/Posts/Post";

export class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8">
                <div className="text-center my-5">
                  <h1 className="display-5 fw-bolder mb-2">
                    Hey, I am Dattatray Rawool!
                  </h1>
                  <p className="lead mb-4">
                    I am a programmer and write a blog sometimes. Blogs are
                    usually technical and about mixed topics in general.
                  </p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                    <a
                      className="btn btn-primary btn-lg px-4 me-sm-3"
                      href="#features"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container px-4 py-5" id="features">
          <h2 className="pb-2 border-bottom">Popular Articles</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <Post></Post>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <Post></Post>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <Post></Post>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-5">
          <div className="card col-md-6 offset-md-1 mb-3">
            <div className="card-body">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label className="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
