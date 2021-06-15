import React, { useState, useEffect } from "react";
import { Link , Router, BrowserRouter} from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Table } from "react-bootstrap";
import EmployerService from "../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Container>
        <Table striped bordered hover variant="info">
          <thead>
            <tr>
              <th>#</th>
              <th>İş Arayan Şirket</th>
              <th>İş Arayan İletşim Email </th>
            </tr>
          </thead>
          {employers.map((employer) => (
            <tbody key={employer.id}>
              <tr>
                <td>{employer.id}</td>
                <td><Link to={`/employers/${employer.id}`}>{employer.companyName}</Link></td>
                <td>{employer.email}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
}
