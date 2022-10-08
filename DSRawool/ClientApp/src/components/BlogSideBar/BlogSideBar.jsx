import React from "react";

function BlogSideBar() {
  return (
    <div>
      {/* <!-- Search widget--> */}
      <div className="card mb-4">
        <div className="card-header">Search</div>
        <div className="card-body">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter search term..."
              aria-label="Enter search term..."
              aria-describedby="button-search"
            />
            <button
              className="btn btn-primary"
              id="button-search"
              type="button"
            >
              Go!
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Categories widget--> */}
      <div className="card mb-4">
        <div className="card-header">Categories</div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Technology</a>
                </li>
                <li>
                  <a href="#!">Business</a>
                </li>
                <li>
                  <a href="#!">Travel</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Culture</a>
                </li>
                <li>
                  <a href="#!">Health</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Side widget--> */}
      <div className="card mb-4">
        <div className="card-header">Side Widget</div>
        <div className="card-body">
          You can put anything you want inside of these side widgets. They are
          easy to use, and feature the Bootstrap 5 card component!
        </div>
      </div>
      <div className="card  mb-4">
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
  );
}

export default BlogSideBar;
