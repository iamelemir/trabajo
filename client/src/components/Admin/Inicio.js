import React, { Component } from "react";
/* import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form"; */


export default class Inicio extends Component {
  render() {
    return (
      <div >
      <h1>PLATAFORMA DE EDUCACION VOCACIONAL</h1>
      <p>
        La plataforma esta disenada para solucionar el problema de desercion estudiantil en las universidades, aqui se incorporan
        diferentes acciones para la recoleccion de informacion y asi lograr concluir de una manera certera el perfil que mas le compete 
        al estudiante escoger para su futuro profesional.
      </p>
      <h2>ADMINISTRADOR</h2>
      <p> El perfil administrador se encargara de manejar los procesos necesarios para ingresar, ver, modificar, eliminar la informacion pertinente 
      a un estudiante o al mismo administrador.
      </p>
      <h2>COMPETENCIAS</h2>
      <p>
        <ul>
          <li>REGISTRAR CURSOS</li>
          <li>MODIFICAR INFORMACION</li>
          <li>VER INFORMACION REGISTRADA</li>
        </ul>
      </p>
      </div> 
    );
  }
}
