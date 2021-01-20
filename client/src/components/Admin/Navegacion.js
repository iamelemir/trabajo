import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";


export default class Navegacion extends Component {
  render() {
    return (
      <div>
      <div>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Nav className="mr-auto"></Nav>
            <Navbar.Brand >PEV - Escuela</Navbar.Brand>
            <Form inline>
              <Button variant="outline-light">Salir</Button>
            </Form>
          </Navbar>
      </div>
          
      </div>
    );
  }
}
