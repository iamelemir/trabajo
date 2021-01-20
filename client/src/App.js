import React from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Admin from "./components/Admin/Admin";
/* import Student from "./components/Student/Student";
import RegisterSchool from "./components/RegisterSchool";
import Carrusel from "./components/Carrusel";
import Login from "./components/Login";
import Footer from "./components/Footer";  */

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Admin/>
        </div>
          
     {/*    <Student/>  */}
     {/*  <Login></Login>
        <div className="container">
          <RegisterSchool />

          <Carrusel />
        </div>
        <Footer />  */}
      </div>
    );
  }
}

export default App;
