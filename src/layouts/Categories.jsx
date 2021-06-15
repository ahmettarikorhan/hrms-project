import React from "react";
import { Container, Navbar, Nav, NavDropdown, Table , Dropdown} from "react-bootstrap";

export default function Categories() {
  return (
    <div>
      <Nav variant="dark" className="flex-column table-hovered table-striped table-bordered" >
        <Nav.Item>
          <Nav.Link >Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >Tab 3</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
