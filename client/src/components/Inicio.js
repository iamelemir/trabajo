import React, { Component } from "react";
import BarraNavegacion from "./nvar";
import Post from "./Post";
import RegisterSchool from "./RegisterSchool";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
/* aplicar aquí el renderizado condicinal dependiendo el User logeado (Estudiante, Admin) */
class Inicio extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav className="nvar">
            <Link to="/home">Home</Link>
            <br />
            <Link to="/post"> Post's</Link>
            <br />
            <Link to="/registerSchool"> Registrar Escuela</Link>
            <br />
            <Link to="inicio"> Inicio</Link>
          </nav>

          <Route path="/post" component={Post}></Route>
          <Route path="/home" component={BarraNavegacion}></Route>
          <Route path="/registerSchool" component={RegisterSchool}></Route>
          <Route path="/inicio" component={Inicio}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default Inicio;
