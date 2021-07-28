<?php
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/..');
$dotenv->load();

$connect = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_DATABASE'], $_ENV['DB_PORT']);

if($connect->connect_error){
    die("Connection failed".$connect->connect_error);
}

$connect -> set_charset("utf-8");
?>