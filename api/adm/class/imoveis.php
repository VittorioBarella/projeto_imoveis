<?php
class imoveis
{
    public $idImoveis;
    public $nomeImovel;
    public $dataCadastramentoImovel;
    public $statusImovel;
    public $cep;
    public $rua;
    public $bairro;
    public $cidade;
    public $estado;
    public $fotoImovel;
    public $descricaoImovel;

    function __construct($idImoveis, $nomeImovel, $dataCadastramentoImovel, $statusImovel, $cep, $rua, $bairro, $cidade, $estado, $fotoImovel, $descricaoImovel)
    {
        $this->idImoveis = $idImoveis;
        $this->nomeImovel = $nomeImovel;
        $this->dataCadastramentoImovel = $dataCadastramentoImovel;
        $this->statusImovel = $statusImovel;
        $this->cep = $cep;
        $this->rua = $rua;
        $this->bairro = $bairro;
        $this->cidade = $cidade;
        $this->estado = $estado;
        $this->fotoImovel = $fotoImovel;
        $this->descricaoImovel = $descricaoImovel;
    }
}
