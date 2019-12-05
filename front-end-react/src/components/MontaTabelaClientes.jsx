//MOSTRA CLIENTES MONTA A TABELA.
import React from "react";
export default class MontaTabelaClientes extends React.Component {
  render() {
    return (
      <div>
        <table className="tabelaClientes table-bordered">
          <thead>
            <tr>
              <td>#</td>
              <td>id</td>
              <td>Nome</td>
              <td>Telefone</td>
              <td>Email</td>
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
                <button type="button" class="btn btn-danger btn-clientes">
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
MontaTabelaClientes.defaultProps = {
  arrayClientes: []
};
