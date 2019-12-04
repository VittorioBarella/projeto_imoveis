import React, { Component } from "react";
import {} from "../css/styles";
import "../css/pure-min.css";
import "../css/side-menu.css";
import "../css/mostraTabelaClientes.css";

import MostraClientes from "./MostraClientes.jsx";

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
        <MostraClientes arrayClientes={this.state.db}></MostraClientes>
      </div>
    );
  }
}

export default visualizaClientes;
