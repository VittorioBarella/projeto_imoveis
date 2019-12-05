import React, { Component } from "react";
import Card from "./CardUI";

import img1 from "../assets/clientes.jpeg";
import img2 from "../assets/casa.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-6 ">
            <Card
              imgsrc={img1}
              title="Clientes"
              subtitle="Clique aqui para ver a sua lista de clientes cadastrados."
              btn={{
                label: "Visualizar Clientes",
                to: "/visualizaClientes"
              }}
            />
          </div>
          <div className="col-md-6 ">
            <Card
              imgsrc={img2}
              title="Imóveis"
              subtitle="Clique aqui para ver a sua lista de imóveis cadastrados."
              btn={{
                label: "Visualizar Imóveis",
                to: "/visualizaImoveis"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
