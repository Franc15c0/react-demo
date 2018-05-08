import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import RH from "./RH";
import ventas from "./ventas";
import clientes from "./clientes";
import incidencias from "./incidencias"; 

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Xideral XRM</h1>
          <ul className="header">
            <li><NavLink exact to="/">Inicio</NavLink></li>
            <li><NavLink to="/RH">Recursos Humanos</NavLink></li>
            <li><NavLink to="/ventas">Ventas</NavLink></li>
            <li><NavLink to="/clientes">Clientes</NavLink></li>
            <li><NavLink to="/incidencias">Incidencias</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/RH" component={RH}/>
            <Route path="/ventas" component={ventas}/>
            <Route path="/clientes" component={clientes}/>
            <Route path="/incidencias" component={incidencias}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
