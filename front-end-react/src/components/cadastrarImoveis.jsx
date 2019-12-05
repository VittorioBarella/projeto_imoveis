import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeCadastraImoveisTitle } from "../actions";

import { Form, Label, Input, Button, Select } from "../css/styles";
import {} from "../css/styles";
import "../css/pure-min.css";
import "../css/side-menu.css";
import $ from "jquery";
class cadastrarImoveis extends Component {
  state = {
    titleValue: ""
  };

  changeCadastraImoveisTitle = event => {
    this.setState({
      titleValue: event.target.value
    });
  };
  render() {
    const { changeCadastraImoveisTitle, newValue } = this.props;
    return (
      <Form>
        <div className="header-title">
          <header
            onChange={this.changeCadastraImoveisTitle}
            value={this.state.titleValue}
          >
            <h1
              onChange={() =>
                changeCadastraImoveisTitle(
                  this.state.changeCadastraImoveisTitle
                )
              }
            >
              {newValue}
            </h1>
          </header>
        </div>
        <div className="nome-Empreendimento">
          <Label> Digite o nome do seu Imóvel: </Label>
          <Input type="text" className="nomeEmpreendimento" />
        </div>

        <div className="data-cadastro-Empreendimento">
          <Label> Data de cadastramento: </Label>
          <Input
            type="text"
            placeholder="DD/MM/AAAA"
            maxlength="10"
            OnKeyPress="formatar('##/##/####', this)"
          />
        </div>

        <div className="status-Empreendimento">
          <Label> Status: </Label>
          <div>
            <Select>
              <option value=""> </option>
              <option value="ativo"> Ativo</option>
              <option value="fechado"> Fechado</option>
              <option value="desativado"> Desativado</option>
            </Select>
          </div>
        </div>

        <div className="endereco-Empreendimento">
          <Label>
            {" "}
            <h4>Endereço:</h4>{" "}
          </Label>

          <div>
            <Label>CEP:</Label>
            <Input
              className="CEP"
              type="search"
              maxlength="8"
              pattern="[0-9]+$"
            />

            <div>
              <Button
                type="button"
                className="btn btn-primary"
                onclick="pesquisacep(cep.value)"
              >
                Pesquisar
              </Button>
            </div>
          </div>

          <div>
            <Label>Rua: </Label>
            <Input className="Rua" type="/text" />
          </div>

          <div>
            <Label>Nº:</Label>
            <Input className="nº" type="text" />
          </div>

          <div>
            <Label>Bairro: </Label>
            <Input className="bairro" type="text" />
          </div>

          <div>
            <Label>Cidade: </Label>
            <Input className="cidade" type="text" />
          </div>

          <div>
            <Label>Estado: </Label>
            <Input className="estado" type="text" />
          </div>
          <div className="botao-Cadastrar">
            <Button type="button" className="btn btn-primary">
              {" "}
              Cadastrar{" "}
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.titleImoveis.newValue
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeCadastraImoveisTitle }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(cadastrarImoveis);
