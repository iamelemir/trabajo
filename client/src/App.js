import React, {useState} from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./components/Home"
class App extends React.Component {

  render() {
   return (
     <div>
        <Home/>
     </div>
   );
 
  }
}

export default App;
