import React, { Component } from "react";
import Card from "./CardUI";

import img1 from "../assets/clientes.jpeg";
import img2 from "../assets/casa.jpg";
import img3 from "../assets/apartamento.jpeg";
import img4 from "../assets/studio.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-2 ">
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
          <div className="col-md-2 ">
            <Card
              imgsrc={img2}
              title="Casas"
              subtitle="Clique aqui para ver a sua lista de casas cadastradas."
              btn={{
                label: "Visualizar Casas",
                to: "/visualizaCasas"
              }}
            />
          </div>
          <div className="col-md-4 ">
            <Card
              imgsrc={img3}
              title="Apartamentos"
              subtitle="Clique aqui para ver a sua lista de apartamentos cadastrados."
              btn={{
                label: "Visualizar Apartamentos",
                to: "/visualizaApartamentos"
              }}
            />
          </div>
          <div className="col-md-4 ">
            <Card
              imgsrc={img4}
              title="Studios"
              subtitle="Clique aqui para ver a sua lista de studios cadastrados."
              btn={{
                label: "Visualizar Studios",
                to: "/visualizaStudios"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
