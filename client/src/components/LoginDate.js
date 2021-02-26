import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

import Admin from "../components/Admin/Admin";
import Student from "../components/Student/Student";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { Formik, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

export default class LoginDate extends Component {

  constructor(props){
    super(props);
    this.state = {id:''}
    this.state = {rol: ''}
    this.state.validate = false
    
}
  render() {

    return (
      <div>
        <Formik
          initialValues={{
            rol: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            rol: Yup.string().required("Seleccione su Rol"),
            email: Yup.string()
              .email("Proporcione un Email válido")
              .required("Por favor, ingrese su Email!"),
            password: Yup.string()
              .required("Se necesita una contraseña"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
        
              const timeOut = setTimeout(() => {
              console.log("Datos del Login", values);
              console.log('mi rol es', this.state.rol)
              console.log('mi id es', this.state.id)
              console.log(this.state.validate)
              setSubmitting(false);
              clearTimeout(timeOut);
            }, 1000);            
            axios
              .post("http://localhost:9000/login", values)
              .then((response) => {
                console.log(response)
                const id = response.data.id
                if(id){
                    this.setState({rol : values.rol})
                }else{

                }
                this.setState({ id });
                console.log('@@@@@@@@@@@@@@@@', this.state.id)
                this.setState({validate : true})
               
              console.log('el estado de validacion',this.state.validate)
  
                 })
              .catch((err) => {
                console.error(err);
              });
                    
            resetForm({ values: "" });
            
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            userLogin,  
            isSubmitting,
            validating,
            valid,
            handleChange,
            handleBlur
          }) => {
            return (
                
              <Navbar bg="light" expand="lg">
                <Navbar.Brand>PEV</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto"></Nav>
                  
                  <Form inline method="post" onSubmit={handleSubmit}>
                    <div>

                    <select
                      class="form-control input-sm mr-sm-3"
                      name="rol"
                      value={values.color}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ display: 'block' }}
                    >
                      <option selected disabled value="" label="Seleccione un Rol" />
                      <option value="colegio" label="Colegio" />
                      <option value="estudiante" label="Estudiante" />
                    </select>
                    {errors.rol &&
                      touched.rol &&
                      <div className="input-feedback">
                        {errors.rol}
                      </div>}
                    </div>
                    <div>
                      <Field
                        className="form-control mr-sm-3"
                        type="text"
                        name="email"
                        placeholder="Correo Electronico"
                      />
                      {errors.email && touched.email && <p>{errors.email}</p>}
                    </div>
                    <div>
                      <Field
                        class="form-control mr-sm-3"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                      />
                      {errors.password && touched.password && (
                        <p>{errors.password}</p>
                      )}
                    </div>

                    <Button
                      name='aceptar'
                      type="submit"
                      variant="outline-success"
                      avilable={!valid || isSubmitting}
                          >
                      Iniciar Sesión
                    </Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            );
           
          }}
           
        </Formik>
        <BrowserRouter>
          <Link to="/admin"></Link>
          <Link to="/estudiante"></Link>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/estudiante" component={Student}></Route>
        </BrowserRouter>
      </div>
    );
        
  }
}
