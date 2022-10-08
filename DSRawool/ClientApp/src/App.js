import React, { Component } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { BlogHome } from "./pages/Blog/BlogHome";
import { Contact } from "./pages/Contact/Contact";
import About from "./pages/About/About";
import SampleMicroservicesWithIdentityService from "./pages/Blog/Blogs/SampleMicroservicesWithIdentityService";
import SampleTest from "./pages/Blog/Blogs/SampleTest";
import SignIn from "./components/Authentication/SignIn/SignIn";
import { Container } from "reactstrap";
import { NavMenu } from "./components/Layout/TopBar/NavMenu";
import Footer from "./components/Layout/Footer/Footer";
import WithoutNav from "./components/Layout/WithoutNav";
import WithNav from "./components/Layout/WithNav";
import Register from "./components/Authentication/Register/Register";
import ForgotPassword from "./components/Authentication/ForgotPassword/ForgotPassword";
import EmailConfirmation from "./components/Authentication/EmailConfirmation/EmailConfirmation";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Routes>
        <Route element={<WithoutNav />}></Route>
        <Route element={<WithNav />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-confirmation" element={<EmailConfirmation />} />

          <Route path="/" element={<Home></Home>} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/blog" element={<BlogHome></BlogHome>}></Route>
          <Route
            path="blog/sample-microservices-with-identity-server"
            element={
              <SampleMicroservicesWithIdentityService></SampleMicroservicesWithIdentityService>
            }
          />
          <Route path="/sample-test" element={<SampleTest></SampleTest>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/about" element={<About></About>} />
        </Route>
      </Routes>
    );
  }
}
