import React, { Component } from "react";
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

export default class Login extends Component {
  render() {
    let validate = false;
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
            password: Yup.string().required("Se necesita una contraseña"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const timeOut = setTimeout(() => {
              console.log("Datos del Login", values);
              setSubmitting(false);
              clearTimeout(timeOut);
            }, 1000);           
            axios
              .post("http://localhost:9000/login", values)
              .then(() => console.log("Login Exitoso", validate))
              .catch((err) => {
                console.error(err);
              });
              validate=true;
            //resetForm({ values: "" });
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
          }) => {
            return (
              <Navbar bg="light" expand="lg">
                <Navbar.Brand>PEV</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto"></Nav>
                  <Form inline method="post" onSubmit={handleSubmit}>
                    <div>
                      {/*  <select as="select" class="form-control input-sm mr-sm-3" custom name='rol'>
                <option selected disabled > Rol </option>
                <option value='colegio'>Escuela</option>
                <option value='estudiante'>Estudiante</option>
              </select> */}
                      <Field
                        class="form-control mr-sm-3"
                        type="text"
                        name="rol"
                        placeholder="Rol"
                      />
                      {errors.rol && touched.rol && <p>{errors.rol}</p>}
                    </div>
                    <div>
                      <Field
                        class="form-control mr-sm-3"
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
          <Route path="/admin" component={Admin}></Route>
          <Route path="/estudiante" component={Student}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
