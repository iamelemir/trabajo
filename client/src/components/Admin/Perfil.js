import React, { Component } from "react";
import axios from 'axios'



export default class Panel extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        schools:[],
        id:1,
    }
  }
  
  componentDidMount(){
    axios.get(`http://localhost:9000/colegio/${this.state.id}`)
    .then(response => {
   
      this.setState({schools: response.data})
    })
    .catch(error => {
       console.log(error)
       
    })
  }

  render() {
    const {schools} = this.state;
    return (
      <div>
      <h1>DATOS DEL COLEGIO</h1>
       {
       <div key={schools.id}> 
       <h2>NOMBRE: {schools.nombre} </h2> 
       <h2>NIT: {schools.nit} </h2>
       <h2>DIRECCION: {schools.direccion} </h2>
       <h2>TELEFONO: {schools.telefono} </h2>
       <h2>NOMBRE DEL DIRECTOR: {schools.director} </h2>
       <h2>CORREO ELECTRONICO: {schools.email} </h2>
            
       </div>
       }          
      </div>
    );  
  }
}
