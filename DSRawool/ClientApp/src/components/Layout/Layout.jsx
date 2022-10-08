import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Container } from "reactstrap";
import { NavMenu } from "./TopBar/NavMenu";
import Footer from "./Footer/Footer";
import Toaster from "../Toaster/Toaster";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container>{this.props.children}</Container>
        <Footer></Footer>
      </div>
    );
  }
}
