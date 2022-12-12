import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Cards from "./components/Cards";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="justify-content-center">
        <Cards></Cards>
      </div>
    </Router>
  );
}

export default App;
