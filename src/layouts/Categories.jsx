import React from "react";
import {Nav }from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      <Nav variant="dark" className="flex-column table-hovered table-striped table-bordered" >
        <Nav.Item>
          <Nav.Link ><Link to={`/employers/`}>Employers</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link ><Link to={`/employees/`}>Employees</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >Tab 3</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
