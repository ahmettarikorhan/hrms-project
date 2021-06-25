import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { Container, Button, Table } from "react-bootstrap";
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
                <td>{employer.companyName}</td>
                <td>{employer.email}</td>
                <td><Link to={`/employers/${employer.id}`}><Button size="sm" variant="info">Inspect</Button></Link></td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
}
