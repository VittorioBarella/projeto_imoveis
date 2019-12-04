import React from "react";
import "../css/pure-min.css";
import "../css/side-menu.css";
import { Link } from "react-router-dom";

function sidebar() {
  return (
    <>
      <div className="layout">
        <Link to="#" className="menuLink">
          <span></span>
        </Link>

        <div id="menu">
          <div className="pure-menu">
            <Link to="/" className="pure-menu-heading">
              Imóveis
            </Link>

            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <Link to="/" className="pure-menu-link">
                  Página Inicial
                </Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/cadastrarClientes" className="pure-menu-link">
                  Cadastrar Clientes
                </Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/cadastrarImoveis" className="pure-menu-link">
                  Cadastrar Imóveis
                </Link>
              </li>

              <li className="pure-menu-item menu-item-divided">
                <Link to="/visualizaClientes" className="pure-menu-link">
                  Clientes
                </Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/visualizaCasas" className="pure-menu-link">
                  Casas
                </Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/visualizaApartamentos" className="pure-menu-link">
                  Apartamentos
                </Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/visualizaStudios" className="pure-menu-link">
                  Studios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default sidebar;
