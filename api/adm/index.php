<?php
require "vendor/autoload.php";
require_once "db/PDOFactory.php";

require_once "class/cliente.php";
require_once "class/imoveis.php";

require_once "dao/clienteDAO.php";
require_once "dao/imovelDAO.php";

require_once "controllers/clienteController.php";
require_once "controllers/imovelController.php";
header("Access-Control-Allow-Origin: *");


$config = [
    'settings' => [
        'displayErrorDetails' => true,
        'addContentLengthHeader' => false,
    ]
];
$app = new \Slim\App($config);
$app->group(
    "/clientes",
    function () {
        $this->get("", "clienteController:listar");
        $this->get("/{id:[0-9]+}", "clienteController:buscarPorId");
        $this->post("", "clienteController:inserir");
        $this->put("/{id:[0-9]+}", "clienteController:atualizar");
        $this->delete("/{id:[0-9]+}", "clienteController:deletar");
    }
);

$app->group(
    "/imoveis",
    function () {
        $this->get("", "imovelController:listar");
        $this->get("/{id:[0-9]+}", "imovelController:buscarPorId");
        $this->post("", "imovelController:inserir");
        $this->put("/{id:[0-9]+}", "imovelController:atualizar");
        $this->delete("/{id:[0-9]+}", "imovelController:deletar");
    }
);
$app->run();
