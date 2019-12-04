import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeCadastraClientesTitle } from "../actions";

import {Form , Label , Input , Button } from "../css/styles";
import "../css/pure-min.css";
import "../css/side-menu.css";
class cadastrarClientes extends Component {
  state = {
    titleValue: ""
  };

  changeCadastraClientesTitle = event => {
    this.setState({
      titleValue: event.target.value
    });
  };

  render() {
    const { changeCadastraClientesTitle, newValue } = this.props;
    return (
      <div className="page-cadastraClientes">
        <Form className="formularioClientes">
          <div className="header-title">
            <header
              onChange={this.changeCadastraClientesTitle}
              value={this.state.titleValue}
            >
              <h1
                onChange={() =>
                  changeCadastraClientesTitle(
                    this.state.changeCadastraClientesTitle
                  )
                }
              >
                {newValue}
              </h1>
            </header>
          </div>
          <div className="nome-Cliente">
            <Label>Digite o nome do cliente:</Label>
            <Input type="text" className="nomeCliente" />
          </div>

          <div className="telefone-Cliente">
            <Label>Telefone:</Label>
            <Input
              type="text"
              className="telefone-Cliente"
              maxlength="13"
              placeholder="(xxx) xxxxxxx-xx"
              OnKeyPress="formatar('## #####-####', this)"
              pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$"
            />
          </div>

          <div className="email-Cliente">
            <Label>Email:</Label>
            <Input
              type="text"
              className="emailCliente"
              placeholder="email.@email.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </div>

          <div className="botao-Cadastrar">
            <Button 
            type="button"
            className="btn btn-primary"> Cadastrar </Button>
          </div>
        </Form>
      </div>
    );
  }
}

/* 
O MÉTODO MAPSTATETOPROPS TRANSFORMA UM TRECHO DO ESTADO DA STORE EM 
UMA PROP UTILIZÁVEL PELO COMPONENTE, COM O NOME NEWVALUE.
*/ 

const mapStateToProps = store => ({
  newValue: store.titleClientes.newValue
});


/*
CRIEI O MÉTODO MAPDISPATCHTOPROPS PARA CONVERTER A ACTION CREATOR
changeCadastraClientesTitle NO ARQUIVO SRC/ACTIONS/INDEX.JS EM UMA PROP
PARA O COMPONENTE.
*/
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeCadastraClientesTitle }, dispatch);


/*
POR FIM, SE PASSA O MÉTODO MAPDISPATCHTOPROPS COMO 
SEGUNDO PARÂMETRO DO MÉTODO CONNECT.
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cadastrarClientes);
