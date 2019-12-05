import React, { Component } from "react";
import {} from "../css/styles";

import "../css/pure-min.css";
import "../css/side-menu.css";
import "../css/mostraTabelaClientes.css";

import MontaTabelaClientes from "./MontaTabelaClientes.jsx";

class visualizaClientes extends Component {
  constructor() {
    super();
    this.state = {
      db: []
    };
  }
  componentDidMount() {
    fetch("http://localhost/projeto_imoveis/api/adm/clientes")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          db: responseJson
        });
        console.log(responseJson);
      });
  }

  render() {
    return (
      <div>
        <h1 className="titulo-mostra-tabela"> Seus Clientes: </h1>
        <MontaTabelaClientes
          arrayClientes={this.state.db}
        ></MontaTabelaClientes>
      </div>
    );
  }
}

export default visualizaClientes;
