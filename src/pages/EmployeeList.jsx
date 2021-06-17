import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { Container,Button, Table } from "react-bootstrap";
import EmployeeService from "../services/employeeService";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
  }, []);

  return (
    <div>
      <Container>
        <Table striped bordered hover variant="info">
          <thead>
            <tr>
              <th>#</th>
              <th>İşçi İsmin</th>
              <th>İşçi Soyismi</th>
              <th>İşçi Email</th>
              <th> </th>
            </tr>
          </thead>
          {employees.map((employee) => (
            <tbody key={employee.id}>
              <tr>
                <td>{employee?.id}</td>
                <td>{employee?.firstName}</td>
                <td>{employee?.lastName}</td>
                <td>{employee?.email}</td>
                <td><Link to={`/employees/${employee.id}`}><Button size="sm" variant="dark">Inspect</Button></Link></td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
}
