//MOSTRA CLIENTES MONTA A TABELA.
import React from "react";
export default class MostraClientes extends React.Component {
  render() {
    return (
      <div>
        <table className="tabelaClientes">
          <thead>
            <tr>
              <td>#</td>
              <td>id do Cliente</td>
              <td>Nome do Cliente</td>
              <td>Telefone do Cliente</td>
              <td>Email do Cliente</td>
              <td>Editar</td>
              <td>Apagar</td>
            </tr>
          </thead>
          <tbody>
            {this.props.arrayClientes.map(row => (
              <tr key={row.id}>
                <td>
                  <input type="checkbox" className="checkthis" />
                </td>
                <td>{row.id}</td>
                <td>{row.nome}</td>
                <td>{row.telefone}</td>
                <td>{row.email}</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    Editar
                  </button>
                </td>
                <button type="button" class="btn btn-danger">
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
MostraClientes.defaultProps = {
  arrayClientes: []
};
