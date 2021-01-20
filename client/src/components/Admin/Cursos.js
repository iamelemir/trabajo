import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default class Cursos extends Component {
  constructor(props) {
    super(props);
    this.course = {
      course: [],
      value: "",
    };
  }

  render() {
    return (
      <div>
        <h1>AGREGAR ESTUDIANTE  </h1>
        <Formik
          initialValues={{
            id_curso: "",
            identificacion: "",
            nombre: "",
            apellido: "",
            email: "",
          }}
          validationSchema={Yup.object().shape({
            id_curso: Yup.string()
              .min(1, "")
              .max(2, "")
              .matches(/^([0-9])*$/, "Invalido")
              .required("Por Favor, ingrese un ID-CURSO válido"),

            identificacion: Yup.string()
              .min(7,"Su IDENTIFICACION debe contener entre 7 y  10 dígitos (Todos Números)")
              .max(12, "")
              .matches(/^([0-9])*$/, "Invalido")
              .required("Por Favor, ingrese una IDENTIFICACION VALIDA válido"),

            nombre: Yup.string()
              .min(3, "Nombre Muy Corto")
              .max(50, "")
              .matches(/^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/, "Solo debe contener letras")
              .required("Se necesita un nombre"),
            apellido: Yup.string()
              .min(3, "Nombre Muy Corto")
              .max(50, "")
              .matches(/^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/,"Solo debe contener letras")
              .required("Se necesita un apellido"),
            email: Yup.string()
              .email("Proporcione un Email válido")
              .required("Por favor, ingrese un Email!"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const timeOut = setTimeout(() => {
              //console.log(values);
              setSubmitting(false);
              clearTimeout(timeOut);
              resetForm({values: "" });
            }, 1000);

            axios
              .post("http://localhost:9000/estudiante", values)
              .then(() => console.log("Estudiante Registrado Correctamente"))
              .catch((err) => {
                console.error(err);
              });

            //resetForm({values: "" });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            validating,
            valid,
          }) => {
            return (
              <Form name="contact" method="post" onSubmit={handleSubmit}>
                <div class="input-group">
                  <Field
                    class="form-control"
                    type="text"
                    name="id_curso"
                    autoComplete="name"
                    placeholder="ID CURSO"
                  />
                </div>
                {errors.id_curso && touched.id_curso && <p>{errors.id_curso}</p>}
                <div class="input-group">
                  <Field
                    class="form-control"
                    type="number"
                    placeholder="NUMERO DE IDENTIFICACION"
                    size="sm"
                    name="identificacion"
                  />
                </div>
                {errors.identificacion && touched.identificacion && <p>{errors.identificacion}</p>}
                <div class="input-group">
                  <Field
                    class="form-control"
                    size="sm"
                    type="text"
                    placeholder="NOMBRE"
                    name="nombre"
                  />
                </div>
                {errors.nombre && touched.nombre && <p>{errors.nombre}</p>}
                <div class="input-group">
                  <Field
                    class="form-control"
                    size="sm"
                    type="text"
                    placeholder="APELLIDO"
                    name="apellido"
                  />
                </div>
                {errors.apellido && touched.apellido && (
                  <p>{errors.apellido}</p>
                )}
                <div class="input-group">
                  <Field
                    class="form-control"
                    size="sm"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <ErrorMessage name="email">
                  {(msg) => <p>{msg}</p>}
                </ErrorMessage>
                <button
                  type="submit"
                  avilable={!valid || isSubmitting}
                  class="btn btn-primary btn-lg"
                >
                  {isSubmitting ? "Registrando Estudiante..." : "Registrar Estudiante"}
                </button>

                <br />
                <br />
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }
}
