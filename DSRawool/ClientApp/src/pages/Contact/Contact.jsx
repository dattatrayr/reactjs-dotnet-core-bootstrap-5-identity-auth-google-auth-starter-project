import React, { Component } from "react";
import BlogSideBar from "../../components/BlogSideBar/BlogSideBar";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("A name was submitted: " + this.state.name);
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-lg-8">
            <h5>Get In Touch With Us</h5>

            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <div className="col">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="col">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    value={this.state.phone}
                    onChange={this.onPhoneChange}
                  />
                  <div className="form-text">
                    We'll never share your Phone number with anyone else.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
                <div className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={this.state.message}
                  onChange={this.onMessageChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-4">
            <BlogSideBar></BlogSideBar>
          </div>
        </div>
      </div>
    );
  }
}
