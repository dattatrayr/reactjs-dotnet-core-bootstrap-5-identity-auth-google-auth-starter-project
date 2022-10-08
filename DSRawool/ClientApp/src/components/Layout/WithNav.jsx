import React from "react";
import { Outlet } from "react-router-dom";
import { NavMenu } from "./TopBar/NavMenu";
import { Container } from "reactstrap";
import Footer from "./Footer/Footer";

function WithNav() {
  return (
    <>
      <NavMenu />
      <Container>
        <Outlet />
      </Container>
      <Footer></Footer>
    </>
  );
}

export default WithNav;
