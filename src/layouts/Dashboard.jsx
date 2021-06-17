import React from "react";
import EmployerList from "../pages/EmployerList";
import Categories from "./Categories";
import { Route  } from "react-router";
import { Row, Col, Container } from "react-bootstrap";
import EmployerDetail from "../pages/EmployerDetail";
import EmployeeList from "../pages/EmployeeList";
import EmployeeDetail from "../pages/EmployeeDetail";
import Welcome from "../pages/Welcome";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={3}>
            <Categories />
          </Col>
          <Col sm={9}>
              <Route exact path="/" component={Welcome}/>
              <Route exact path="/employers" component={EmployerList} />
              <Route path="/employers/:id" component={EmployerDetail} />
              <Route path="/cart" component={EmployerList} />

              <Route exact path="/employees" component={EmployeeList} />
              <Route path="/employees/:id" component={EmployeeDetail} />
              <Route path="/cart" component={EmployeeList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
