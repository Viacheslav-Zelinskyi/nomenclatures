<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: json/application; charset=utf-8');

require 'vendor/autoload.php';
require 'functions.php';
require 'db_connect.php';

$requestMethod = $_SERVER["REQUEST_METHOD"];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

switch($requestMethod){
    case "GET":
        switch($uri[1]){
            case "nomenclatures":
                getNomenclatures($connect);
                break;
            default:
                echo 'Not found';
                break;
        }
        break;
    default:
        echo "Not found";
        break;
}

$connect->close();
?>