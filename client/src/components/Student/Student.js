import React, { Component } from "react";
import Navegacion from "./Navegacion";
import Inicio from "./Inicio";
import Perfil from "./Perfil";
import Test from "./Test";
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import {ClippyIcon, PersonIcon,  HomeFillIcon} from "@primer/octicons-react";

export default class Student extends Component {

  render() {
    return (
      <div>
      <BrowserRouter>
      <Navegacion/>
        <div class="navbar bg-light" id="lateral">
          <div id="central">
            <div id="box">
              <label for="">
               <Link to="estudiante" variant="outline-primary" style={{ textDecoration: 'none' }}> <HomeFillIcon size={32}/> Inicio</Link>
              </label>
            </div>

            <div id="box">
              <label for="">
                <Link to="perfil" variant="outline-primary" style={{ textDecoration: 'none' }}> <PersonIcon size={32}/> Perfíl</Link>
              </label>
            </div>

            <div id="box">
              <label for="">
                <Link to="test" variant="outline-primary" style={{ textDecoration: 'none' }}> <ClippyIcon size={32}/> Test</Link>
              </label>
            </div>
          </div>
        </div>
      <div class="navbar bg-light" id="panel">
          <Route path="/estudiante" component={Inicio}></Route>
          <Route path="/perfil" component={Perfil}></Route>
          <Route path="/test" component={Test}></Route>
          
      </div> 

      </BrowserRouter>
      </div>
    );
  }
}
