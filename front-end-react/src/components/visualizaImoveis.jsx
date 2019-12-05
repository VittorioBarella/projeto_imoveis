import React, { Component } from "react";
import {} from "../css/styles";

import "../css/pure-min.css";
import "../css/side-menu.css";
import "../css/mostraTabelaImoveis.css";

import MontaTabelaImoveis from "./MontaTabelaImoveis.jsx";

class visualizaImoveis extends Component {
  constructor() {
    super();
    this.state = {
      lista: []
    };
  }
  componentDidMount() {
    fetch("http://localhost/projeto_imoveis/api/adm/imoveis")
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
        <h1 className="titulo-mostra-tabela"> Seus Imóveis: </h1>
        <MontaTabelaImoveis arrayImoveis={this.state.db}></MontaTabelaImoveis>
      </div>
    );
  }
}
export default visualizaImoveis;
