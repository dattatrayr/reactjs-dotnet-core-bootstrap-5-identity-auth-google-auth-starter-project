import React, { Component } from "react";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import BlogPosts from "../../components/BlogPosts/BlogPosts";
import BlogSideBar from "../../components/BlogSideBar/BlogSideBar";

export class BlogHome extends Component {
  static displayName = BlogHome.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BlogHeader></BlogHeader>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogPosts></BlogPosts>
            </div>
            <div className="col-lg-4">
              <BlogSideBar></BlogSideBar>
            </div>
          </div>
          {/* <Outlet /> */}
        </div>
      </div>
    );
  }
}
