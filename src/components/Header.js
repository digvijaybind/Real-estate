import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/Header.css";

// type Props = {};

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-9 nav-wrap">
            <Navbar expand="lg">
              <Navbar.Brand href="#home">Blits Estates</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Properties</Nav.Link>
                  <Nav.Link href="#link">Tocken</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                  <Nav.Link href="#link">Invest</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Nav.Link href="#link" className="log-btn">
              Buy Blits coins
            </Nav.Link>
          </div>
          <div className="col-xl-3 col-lg-3 nav-login">
            <Nav.Link href="#link" className="reg-r-btn">
              Register
            </Nav.Link>
            <Nav.Link href="#link" className="log-btn-txt">
              Login
            </Nav.Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
