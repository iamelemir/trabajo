import React, { Component } from "react";
import axios from "axios";


export default class Buscar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
      value: ''  
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .get(`http://localhost:9000/estudiante/${this.state.value}`)
      .then((response) => {
        this.setState({ student: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
      const {student} = this.state;
    return (
      <div>
        <div>
          <h3>BUSCAR ESTUDIANTE</h3>
          <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            <input 
            type="text" 
            placeholder='Numero de Identificación' 
            value={this.state.value} 
            onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            <button type="submit" value="Submit">Buscar </button>
          </label>
          </form>
          {
            <div key={student.id}>
            <h2>NOMBRE: {student.nombre} </h2> 
            <h2>APELLIDO: {student.apellido} </h2>
            <h2>IDENTIFICACION: {student.identificacion} </h2>
            <h2>EMAIL: {student.email} </h2>
            </div>
          }
        </div>
      </div>
    );
  }
}
