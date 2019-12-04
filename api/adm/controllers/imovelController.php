<?php
class imovelController
{
    // FUNÇÃO LISTAR - OK
    public function listar($request, $response, $args)
    {
        $dao = new imovelDAO();
        $lista = $dao->listar();
        $response = $response->withJson($lista);
        $response = $response->withHeader('Content-type', 'application/json');
        return $response;
    }
    // FUNÇÃO LISTAR - OK

    // FUNÇÃO BURCAR POR ID - OK
    public function buscarPorId($request, $response, $args)
    {
        $id = (int) $args['id'];
        echo "===>" . $id;
        $dao = new imovelDAO();
        $imoveis = $dao->buscarPorId($id);
        $response = $response->withJson($imoveis);
        $response = $response->withHeader('Content-type', 'application/json');
        return $response;
    }
    // FUNÇÃO BURCAR POR ID - OK

    // FUNÇÃO INSERIR - OK
    public function inserir($request, $response, $args)
    {
        $var = $request->getParsedBody();
        $imoveis = new imoveis(
            0,
            $var['nomeImovel'],
            $var['dataCadastramentoImovel'],
            $var['statusImovel'],
            $var['cep'],
            $var['rua'],
            $var['bairro'],
            $var['cidade'],
            $var['estado'],
            $var['fotoImovel'],
            $var['descricaoImovel']
        );

        $dao = new imovelDAO();
        $imoveis = $dao->inserir($imoveis);
        $response = $response->withJson($imoveis);
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
        $imoveis = new imoveis(
            $var['idImoveis'],
            $var['nomeImovel'],
            $var['dataCadastramentoImovel'],
            $var['statusImovel'],
            $var['cep'],
            $var['rua'],
            $var['bairro'],
            $var['cidade'],
            $var['estado'],
            $var['fotoImovel'],
            $var['descricaoImovel']
        );
        $dao = new imovelDAO;
        $dao->atualizar($imoveis);
        $response = $response->withJson($imoveis);
        $response = $response->withHeader('Content-type', 'application/json');
        return $response;
    }
    // FUNÇÃO ATUALIZAR - OK

    // FUNÇÃO DELETAR - OK
    public function deletar($request, $response, $args)
    {
        $id = (int) $args['id'];
        $dao = new imovelDAO();
        $Imovel = $dao->buscarPorId($id);
        $dao->deletar($id);
        $response = $response->withJson($Imovel);
        $response = $response->withHeader('Content-type', 'application/json');
        return $response;
    }
    // FUNÇÃO DELETAR - OK
}
