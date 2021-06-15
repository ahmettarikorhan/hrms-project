import React from "react";
import EmployerList from "../pages/EmployerList";
import Categories from "./Categories";
import { Route, Router  } from "react-router";
import { Row, Col, Container } from "react-bootstrap";
import EmployerDetail from "../pages/EmployerDetail";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={3}>
            <Categories />
          </Col>
          <Col sm={9}>
              <Route exact path="/" component={EmployerList} />
              <Route exact path="/employers" component={EmployerList} />
              <Route path="/employers/:id" component={EmployerDetail} />
              <Route path="/cart" component={EmployerList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
