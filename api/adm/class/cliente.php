<?php
class cliente
{
    public $id;
    public $nome;
    public $telefone;
    public $email;

    function __construct($id, $nome, $telefone, $email)
    {
        $this->id = $id;
        $this->nome = $nome;
        $this->telefone = $telefone;
        $this->email = $email;
    }
}
