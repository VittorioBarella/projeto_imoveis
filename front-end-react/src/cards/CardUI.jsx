import React from "react";
import { Link } from "react-router-dom";

import "./card-style.css";


const Card = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Casa" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.subtitle}</p>
        <Link to={props.btn.to} className="btn-visualizar">
          {props.btn.label}
        </Link>
      </div>
    </div>
  );
};

export default Card;
