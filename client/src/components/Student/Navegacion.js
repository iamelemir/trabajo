import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
/* import Nav from "react-bootstrap/Nav"; */
import Form from "react-bootstrap/Form";

export default class Navegacion extends Component {
  render() {
    return (
      <div>
        <>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand> PEV - Estudiante</Navbar.Brand>
            <Form inline>
              <Button variant="outline-light">Salir</Button>
            </Form>
          </Navbar>
        </>
      </div>
    );
  }
}
