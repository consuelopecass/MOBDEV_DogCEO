/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./Contacto";
import Home from "./Home";

function Navbar() {
  return (
    <Router>
      <div className="container-fluid mx-0 px-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-info mx-0 px-0">
          <div className="nav-item">
            <Link to="/">
              <h1 className="nav-link text-decoration-none text-dark">
                DogCEO
              </h1>
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/contacto">
                  <h4>Contacto</h4>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
