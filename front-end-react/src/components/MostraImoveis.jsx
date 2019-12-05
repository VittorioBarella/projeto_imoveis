import React from "react";

export default class MostraImoveis extends React.Component {
  render() {
    return (
      <div>
        <table className="tabelaImoveis table-bordered">
          <thead>
            <tr>
              <td>#</td>
              <td>id</td>
              <td>Nome</td>
              <td>Data de Cadastramento</td>
              <td>Status</td>
              <td>CEP</td>
              <td>Rua</td>
              <td>Bairro</td>
              <td>Cidade</td>
              <td>Estado</td>
              <td>Foto</td>
              <td>Descrição</td>
              <td>Editar</td>
              <td>Apagar</td>
            </tr>
          </thead>
          <tbody>
            {this.props.arrayImoveis.map(row => (
              <tr key={row.id}>
                <td>
                  <input type="checkbox" className="checkthis" />
                </td>
                <td>{row.idImoveis}</td>
                <td>{row.nomeImovel}</td>
                <td>{row.dataCadastramentoImovel}</td>
                <td>{row.statusImovel}</td>
                <td>{row.cep}</td>
                <td>{row.rua}</td>
                <td>{row.bairro}</td>
                <td>{row.cidade}</td>
                <td>{row.estado}</td>
                <td>{row.fotoImovel}</td>
                <td>{row.descricaoImovel}</td>

                <td>
                  <button type="button" class="btn btn-primary">
                    Editar
                  </button>
                </td>
                <button type="button" class="btn btn-danger btn-imoveis">
                  Apagar
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
MostraImoveis.defaultProps = {
  arrayImoveis: []
};
