import React, { Component } from "react";
import axios from "axios";

export default class Notas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursoID: [],
      historial: [],
      indice: "",
      numeral: "",
      dates:{
        id:[],
        notas:[],
        materia:['Humanidades', 'Matematica', 'Ciencias Naturales', 'Ciencias Sociales', 'Educacion Fisica', 'Artistica', 'Etica y Valores','Psicología']
      }
    };
    this.captureGrade = this.captureGrade.bind(this);
    this.captureGrupo = this.captureGrupo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.historiales = this.historiales.bind(this)
  }
  /* 
obtener el id del curso por medio del indice del grado y numeral del grupo
*/

  captureGrade(event) {
    this.setState({ indice: event.target.value });
  }

  captureGrupo(event) {
    this.setState({ numeral: event.target.value });
  }

  /* const students = [...estudiantes.rows]
      console.log(students)
      res.json(students) */
/* 
elemir */
  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        `http://localhost:9000/curso/${this.state.indice}/${this.state.numeral}`
      )
      .then((response) => {
        const cursoID = response.data;
        this.setState({ cursoID });
        console.log(cursoID)
        this.state.historial.push([cursoID.map(x => x.id)])
      })
      .catch((error) => {
        console.log(error);
      });
  }
/* el estado no se actualiza hasta no presioinar el boton Agregar Notas */
/* se debe cambiar el ygit his.state.historial , pr el de cursoID, quien es el que trae ls datos ahora desde el servidor */
  historiales(){
    const numeros = [];
    numeros.push(this.state.historial)
    //this.state.historial = [];
    //console.log('estos son: ' + numeros.length)
      for (let i = 0; i < numeros.length; i++) {
        //const element = numeros[i]
          
          //for (let j = 0; j < element.length; j++) {
            
               axios
              .get(`http://localhost:9000/historial/${numeros.id}`)
              .then((response) => {
                const dates = response.data;
                this.setState({dates})
                
                console.log('este es el numeroa de historiales' + this.state.historial.map(x => x.id));
              })
              .catch((error) => {
                console.log(error);
              })
            
           
          //}
      }
  }

  render() {
    /* const { cursoID, dates, historial} = this.state; */

    const style = {
      width: 1300,
      height: 500
    };

    const estilo = {
      float: 'left',
      margin: 10
    }
/* Mota: del input
   id_hitorial captuira por el GET
   materia del select */
    return (
      <div style={style}>
        <div style={{ textAlign: "center" }}>
          <h1>AGREGAR NOTAS A CURSOS</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <form action="" onSubmit={this.handleSubmit}>
            <div style={estilo}>
              <select
                value={this.state.value}
                onChange={this.captureGrade}
                class="form-control"
              >
                <option disabled selected value="0">
                  Seleccionar Grado
                </option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
            </div>
            <div style={estilo}>
               <select
                value={this.state.value}
                onChange={this.captureGrupo}
                class="form-control"
              >
                <option disabled selected value="0">
                  Seleccionar Grupo
                </option>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
                <option value="e">e</option>
                <option value="f">f</option>
                <option value="g">g</option>
              </select>
            </div>
            <div style={estilo}>
              <button type="submit" class="btn btn-outline-primary">
                {" "}
                Buscar Curso
              </button>
              
            </div>
           </form>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <form action="">
            <div style={estilo}>
               <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">NOMBRE</th>
                    <th scope="col"> Humanidades </th>
                    <th scope="col"> Matematica </th>
                    <th scope="col"> Ciencias Naturales </th>
                    <th scope="col"> Ciencias Sociales </th>
                    <th scope="col"> Educacion Fisica </th>
                    <th scope="col"> Artistica </th>
                    <th scope="col"> Etica y Valores </th>
                    <th scope="col"> Psicología </th>                                  
                   </tr>
                 </thead>
                 {this.state.cursoID.map((student) => (
                <tbody >
                  <tr>
                    <td>{student.id + ' ' + student.nombre + " " + student.apellido}</td>
                    {/* <td> <div style={{ paddingRight: 120, margin: 5 }}></div> </td> */}
                    <td><input type="" class="form-control" style={{width: 100}} ></input></td>
                    <td><input type="" class="form-control" style={{width: 100}}></input></td>
                    <td><input type="" class="form-control" style={{width: 100}}></input></td>
                    <td><input type="" class="form-control" style={{width: 100}}></input></td>
                    <td><input type="" class="form-control" style={{width: 100}}></input></td>
                    <td><input type="" class="form-control" style={{width: 100}}></input></td>
                    <td><input type="" class="form-control" style={{width: 100}}></input></td>
                    <td><input type="" class="form-control" style={{width: 100}}></input></td>
                  </tr>
                </tbody>
              ))}
              </table> 
              <div>
              
              </div>
            </div>
          </form>
        </div>
            <div style={estilo}>
              <button type="submit"  class="btn btn-outline-primary" onClick={this.historiales}>
                Agregar Notas
              </button>           
            </div>
      </div>
    );
  }
}
