<?php
class clienteController
{

    // FUNÇÃO LISTAR OK 
    public function listar($request, $response, $args)
    {
        $dao = new clienteDAO();
        $lista = $dao->listar();
        $response = $response->withJson($lista);
        $response = $response->withHeader('Content-type', 'application/json');
        return $response;
    }
    // FUNÇÃO LISTAR OK 

    // FUNÇÃO BUSCAR POR ID - OK 
    public function buscarPorId($request, $response, $args)
    {
        $id = (int) $args['id'];
        echo "===>" . $id;
        $dao = new clienteDAO();
        $cliente = $dao->buscarPorId($id);
        $response = $response->withJson($cliente);
        $response = $response->withHeader('Content-type', 'application/json');
        return $response;
    }
    // FUNÇÃO BUSCAR POR ID - OK 

    // FUNÇÃO INSERIR - OK
    public function inserir($request, $response, $args)
    {
        $var = $request->getParsedBody();
        $cliente = new cliente(0, $var['nome'], $var['telefone'], $var['email']);
        $dao = new clienteDAO();
        $cliente = $dao->inserir($cliente);
        $response = $response->withJson($cliente);
        $response = $response->withHeader('Content-type', 'application/json');
        $response = $response->withStatus(201);
        return $response;
    }
    // FUNÇÃO INSERIR - OK

    // FUNÇÃO ATUALIZAR - OK 
    public function atualizar($request, $response, $args)
    {
        $id = (int) $args['id'];
        $var = $request->getParsedBody();
        $cliente = new cliente($id, $var['nome'], $var['telefone'], $var['email']);
        $dao = new clienteDAO;
        $dao->atualizar($cliente);
        $response = $response->withJson($cliente);
        $response = $response->withHeader('Content-type', 'application/json');
        return $response;
    }
    // FUNÇÃO ATUALIZAR - OK 

    // FUNÇÃO DELETAR - OK
    public function deletar($request, $response, $args)
    {
        $id = (int) $args['id'];
        $dao = new clienteDAO();
        $cliente = $dao->buscarPorId($id);
        $dao->deletar($id);
        $response = $response->withJson($cliente);
        $response = $response->withHeader('Content-type', 'application/json');
        return $response;
    }
    // FUNÇÃO DELETAR - OK
}
