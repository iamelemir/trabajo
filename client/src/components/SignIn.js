import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Formik, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
 

const SignIn = ({handleSubmit}) => {
/* 
import React, { useState } from "react";
import SignIn from "./SignIn";
import Logout from "./Logout";
import Home from "./Home"

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <div>
     <SignIn handleSubmit={setIsLoggedIn} />
    <Home/>
  </div>
  }else{
    return <Logout handleSubmit={setIsLoggedIn} />;
  }
};

export default Login;

*/
  return <div>
   <Formik
          initialValues={{
            rol: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            rol: Yup.string()
              .required("Seleccione su Rol"),
            email: Yup.string()
              .email("Proporcione un Email válido")
              .required("Por favor, ingrese su Email!"),
            password: Yup.string()
              .required("Se necesita una contraseña"),
          })}
          onSubmit={(values,{ setSubmitting, resetForm}) => {
        
              const timeOut = setTimeout(() => {
              setSubmitting(false);
              clearTimeout(timeOut);
            }, 1000);            

            axios
              .post("http://localhost:9000/login", values)
              .then((response) => {
                console.log(response)
                })
              .catch((err) => {
                console.error(err);
              });
                    
            resetForm({ values: "" });
            
          }}
          
          onClick={e => handleSubmit(true)}
        >
          {({values,errors,touched,userLogin,isSubmitting,validating,valid,handleChange,handleBlur,handleSubmit}) => {
            return (
                
              <Navbar bg="light" expand="lg">
                <Navbar.Brand>PEV</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto"></Nav>
                  
                  <Form inline method="post" >
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
                    {errors.rol && touched.rol && <div className="input-feedback"> {errors.rol}
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
                      {errors.password && touched.password && (<p>{errors.password}</p>)}
                    </div>
                   
                    <Button 
                    onClick={e => handleSubmit(true)} 

                    >Iniciar Sesion</Button> 
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            );
           
          }}
           
        </Formik>
  </div>
   
};

export default SignIn;
