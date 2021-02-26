import React, { Component} from 'react';
import "../assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Carrusel from "./Carrusel"
import Footer from "./Footer"
import RegisterSchool from "./RegisterSchool" 
import Login from './Login'

import LoginDate from './LoginDate'

class Home extends Component {

  render() {

    return (
      <div>
        <Login/>
        <div className="container">
          <RegisterSchool/>
          <Carrusel/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;
