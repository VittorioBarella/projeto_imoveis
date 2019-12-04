<?php
class imovelDAO
{
    // FUNÇÃO LISTAR - OK
    public function listar()
    {
        $query = "SELECT * FROM imoveis";
        $pdo = PDOFactory::getConexao();
        $comando = $pdo->prepare($query);
        $comando->execute();
        $imovel = array();
        while ($row = $comando->fetch(PDO::FETCH_OBJ)) {
            $imovel[] = new imoveis(
                $row->idImoveis,
                $row->nomeImovel,
                $row->dataCadastramentoImovel,
                $row->statusImovel,
                $row->cep,
                $row->rua,
                $row->bairro,
                $row->cidade,
                $row->estado,
                $row->fotoImovel,
                $row->descricaoImovel
            );
        }
        return $imovel;
    }
    // FUNÇÃO LISTAR - OK

    // FUNÇÃO BURCAR POR ID - OK
    public function buscarPorId($id)
    {
        $query = "SELECT * FROM imoveis WHERE idImoveis=:idImoveis";
        $pdo = PDOFactory::getConexao();
        $comando = $pdo->prepare($query);
        $comando->bindParam("idImoveis", $id);
        $comando->execute();
        $resultado = $comando->FETCH(PDO::FETCH_OBJ);
        return new imoveis(
            $resultado->idImoveis,
            $resultado->nomeImovel,
            $resultado->dataCadastramentoImovel,
            $resultado->statusImovel,
            $resultado->cep,
            $resultado->rua,
            $resultado->bairro,
            $resultado->cidade,
            $resultado->estado,
            $resultado->fotoImovel,
            $resultado->descricaoImovel
        );
    }
    // FUNÇÃO BURCAR POR ID - OK

    // FUNÇÃO INSERIR - OK
    public function inserir(Imoveis $imovel)
    {
        $query = "INSERT INTO imoveis (idImoveis,nomeImovel,dataCadastramentoImovel,statusImovel,cep,rua,bairro,cidade,estado,fotoImovel,descricaoImovel) 
                  VALUES (:idImoveis,:nomeImovel,:dataCadastramentoImovel,:statusImovel,:cep,:rua,:bairro,:cidade,:estado,:fotoImovel,:descricaoImovel)";
        $pdo = PDOFactory::getConexao();
        $comando = $pdo->prepare($query);
        $comando->bindParam(":idImoveis", $imovel->idImoveis);
        $comando->bindParam(":nomeImovel", $imovel->nomeImovel);
        $comando->bindParam(":dataCadastramentoImovel", $imovel->dataCadastramentoImovel);
        $comando->bindParam(":statusImovel", $imovel->statusImovel);
        $comando->bindParam(":cep", $imovel->cep);
        $comando->bindParam(":rua", $imovel->rua);
        $comando->bindParam(":bairro", $imovel->bairro);
        $comando->bindParam(":cidade", $imovel->cidade);
        $comando->bindParam(":estado", $imovel->estado);
        $comando->bindParam(":fotoImovel", $imovel->fotoImovel);
        $comando->bindParam(":descricaoImovel", $imovel->descricaoImovel);
        $comando->execute();
        $imovel->idImoveis = $pdo->lastInsertId();
        return $imovel;
    }
    // FUNÇÃO INSERIR - OK

    // FUNÇÃO ATUALIZAR - OK
    public function atualizar(Imoveis $imovel)
    {
        $query = "UPDATE imoveis SET nomeImovel=:nomeImovel,
                                     dataCadastramentoImovel=:dataCadastramentoImovel,
                                     statusImovel=:statusImovel,
                                     cep=:cep,
                                     rua=:rua,
                                     bairro=:bairro,
                                     cidade=:cidade,
                                     estado=:estado,
                                     fotoImovel=:fotoImovel,
                                     descricaoImovel=:descricaoImovel

                                     WHERE idImoveis =:idImoveis";
        $pdo = PDOFactory::getConexao();
        $comando = $pdo->prepare($query);
        $comando->bindParam(":idImoveis", $imovel->idImoveis);
        $comando->bindParam(":nomeImovel", $imovel->nomeImovel);
        $comando->bindParam(":dataCadastramentoImovel", $imovel->dataCadastramentoImovel);
        $comando->bindParam(":statusImovel", $imovel->statusImovel);
        $comando->bindParam(":cep", $imovel->cep);
        $comando->bindParam(":rua", $imovel->rua);
        $comando->bindParam(":bairro", $imovel->bairro);
        $comando->bindParam(":cidade", $imovel->cidade);
        $comando->bindParam(":estado", $imovel->estado);
        $comando->bindParam(":fotoImovel", $imovel->fotoImovel);
        $comando->bindParam(":descricaoImovel", $imovel->descricaoImovel);
        $comando->execute();
    }
    // FUNÇÃO ATUALIZAR - OK

    // FUNÇÃO DELETAR - OK
    public function deletar($id)
    {
        $query = "DELETE FROM imoveis WHERE idImoveis=:idImoveis";
        $pdo = PDOFactory::getConexao();
        $comando = $pdo->prepare($query);
        $comando->bindParam(":idImoveis", $id);
        $comando->execute();
    }
}
