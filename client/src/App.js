import React  from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login"


class App extends React.Component {

  render() {
   return (
     <div>
        <Login/>
     </div>
   );
 
  }
}

export default App;
