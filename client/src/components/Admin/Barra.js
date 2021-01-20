import React, { Component } from "react";
import Navegacion from "./Navegacion";
import Inicio from "./Inicio";
import Perfil from "./Perfil";
import Buscar from "./Buscar";
import Cursos from "./Cursos";
import Notas from "./Notas";

import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  EyeIcon,
  PersonIcon,
  HomeFillIcon,
  PlusIcon,
} from "@primer/octicons-react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

export default class Barra extends Component {
  render() {
    return (
        <div >
            <Navegacion />
        <div >
          <BrowserRouter>
            <div>
              <Navbar bg="dark" expand="md" variant="dark">
                
                  <Form inline>
                    <Nav.Link className="Link">
                      <Link
                        to="escuela"
                        variant="outline-primary"
                        style={{
                          textDecoration: "none",
                          
                        }}
                      >
                        {" "}
                        <HomeFillIcon size={40} /> Inicio
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to="perfil"
                        variant="outline-primary"
                        style={{
                          textDecoration: "none",
                          
                        }}
                      >
                        {" "}
                        <PersonIcon size={40} /> Perfíl
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to="buscar"
                        variant="outline-primary"
                        style={{
                          textDecoration: "none",
                          
                        }}
                      >
                        {" "}
                        <EyeIcon size={40} /> Buscar
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to="agregar"
                        variant="outline-primary"
                        style={{
                          textDecoration: "none",
                          
                        }}
                      >
                        <PlusIcon size={40} /> Cursos
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to="notas"
                        variant="outline-primary"
                        style={{
                          textDecoration: "none",
                          
                        }}
                      >
                        <PlusIcon size={40} /> Notas
                      </Link>
                    </Nav.Link>
                  </Form>
                
              </Navbar>
            </div>
            <div class="navbar bg-light">
              <Route path="/escuela" component={Inicio}></Route>
              <Route path="/perfil" component={Perfil}></Route>
              <Route path="/buscar" component={Buscar}></Route>
              <Route path="/agregar" component={Cursos}></Route>
              <Route path="/notas" component={Notas}></Route>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
