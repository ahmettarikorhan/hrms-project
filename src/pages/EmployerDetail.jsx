import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card } from "react-bootstrap";
import EmployerService from "../services/employerService";

export default function EmployerDetail() {

    let { id } = useParams();

  const [employer, setEmployer] = useState({});

  useEffect(()=>{
    let employerService = new EmployerService();
    employerService.getById(id).then(result=>setEmployer(result.data.data))
  },[])
  return (
    <div>
      <Card className="text-center">
        <Card.Header>{employer.companyName}</Card.Header>
        <Card.Body>
          <Card.Title>{employer.email}</Card.Title>
          <Card.Title>{employer.phoneNumber}</Card.Title>
          <Card.Text>
            {employer.website}
          </Card.Text>
          <div>Bu iş için uygun musun? Öyleyse hemen başvur!</div>
          <Button variant="primary">Başvur</Button>
        </Card.Body>
        <Card.Footer >{employer?.jobAdverts?.salaryMin}</Card.Footer>
      </Card>
    </div>
  );
}
