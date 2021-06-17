import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card } from "react-bootstrap";
import EmployeeService from "../services/employeeService";

export default function EmployeeDetail() {

    let { id } = useParams();

  const [employee, setEmployee] = useState({});

  useEffect(()=>{
    let employeeService = new EmployeeService();
    employeeService.getById(id).then(result=>setEmployee(result.data.data))
  },[])
  return (
    <div>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>{employee.firstName} {employee.lastName}</Card.Title>
          <Card.Title>{employee.email}</Card.Title>
          <div>Bu eleman senin için uygun mu?</div>
          <Button variant="primary">Başvur</Button>
        </Card.Body>
        <Card.Footer ></Card.Footer>
      </Card>
    </div>
  );
}
