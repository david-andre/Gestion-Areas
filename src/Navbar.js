import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cuadrado from "./Cuadrado";
import Rectangulo from "./Rectangulo";
import Triangulo from "./Triangulo";

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link class="navbar-brand" to="">
              Cálculo de Areas
            </Link>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/cuadrado">
                  Cuadrado
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/rectangulo">
                  Rectángulo
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/triangulo">
                  Triángulo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/cuadrado">
            <Cuadrado />
          </Route>
          <Route path="/triangulo">
            <Triangulo />
          </Route>
          <Route path="/rectangulo">
            <Rectangulo />
          </Route>
        </Switch>
      </Router>
    );
  }
}
