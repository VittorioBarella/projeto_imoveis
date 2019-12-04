<?php
class clienteDAO
{
    // FUNÇÃO LISTAR - OK 
    public function listar()
    {
        $query = "SELECT * FROM cliente";
        $pdo = PDOFactory::getConexao();
        $comando = $pdo->prepare($query);
        $comando->execute();
        $cliente = array();
        while ($row = $comando->fetch(PDO::FETCH_OBJ)) {
            $cliente[] = new cliente($row->idCliente, $row->nomeCliente, $row->telefoneCliente, $row->emailCliente);
        }
        return $cliente;
    }
    // FUNÇÃO LISTAR - OK

    // FUNÇÃO BUSCAR POR ID - OK 
    public function buscarPorId($id)
    {
        $query = "SELECT * FROM cliente WHERE idCliente=:idCliente";
        $pdo = PDOFactory::getConexao();
        $comando = $pdo->prepare($query);
        $comando->bindParam("idCliente", $id);
        $comando->execute();
        $resultado = $comando->FETCH(PDO::FETCH_OBJ);
        return new cliente($resultado->idCliente, $resultado->nomeCliente, $resultado->telefoneCliente, $resultado->emailCliente);
    }
    // FUNÇÃO BUSCAR POR ID - OK 

    // FUNÇÃO INSERIR - OK
    public function inserir(Cliente $cliente)
    {
        $query = "INSERT INTO cliente(nomeCliente,telefoneCliente,emailCliente) VALUES (:nomeCliente,:telefoneCliente,:emailCliente)";
        $pdo = PDOFactory::getConexao();
        $comando = $pdo->prepare($query);
        $comando->bindParam(":nomeCliente", $cliente->nome);
        $comando->bindParam(":telefoneCliente", $cliente->telefone);
        $comando->bindParam(":emailCliente", $cliente->email);
        $comando->execute();
        $cliente->id = $pdo->lastInsertId();
        return $cliente;
    }
    // FUNÇÃO INSERIR - OK

    // FUNÇÃO ATUALIZAR - OK 
    public function atualizar(Cliente $cliente)
    {
        $query = "UPDATE cliente SET nomeCliente=:nomeCliente,telefoneCliente=:telefoneCliente,emailCliente=:emailCliente WHERE idCliente =:idCliente";
        $pdo = PDOFactory::getConexao();
        $comando = $pdo->prepare($query);
        $comando->bindParam(":idCliente", $cliente->id);
        $comando->bindParam(":nomeCliente", $cliente->nome);
        $comando->bindParam(":telefoneCliente", $cliente->telefone);
        $comando->bindParam(":emailCliente", $cliente->email);
        $comando->execute();
    }
    // FUNÇÃO ATUALIZAR - OK 

    // FUNÇÃO DELETAR - OK
    public function deletar($id)
    {
        $query = "DELETE FROM cliente WHERE idCliente=:idCliente";
        $pdo = PDOFactory::getConexao();
        $comando = $pdo->prepare($query);
        $comando->bindParam(":idCliente", $id);
        $comando->execute();
    }
    // FUNÇÃO DELETAR - OK
}
