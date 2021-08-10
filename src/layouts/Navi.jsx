import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  const [isAuthhenticated, setIsAuthhenticated] = useState(true);
  const history = useHistory();
  function handleSignOut() {
    setIsAuthhenticated(false);
    history.push("/")
  }
  function handleSignIn() {
    setIsAuthhenticated(true);
  }
  return (
    <div>
      <Navbar bg="info" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="font-weight-bolder">
            Human Resources Management System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto font-weight-lighter">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                className="font-weight-lighter"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" className="font-italic">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            {isAuthhenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
