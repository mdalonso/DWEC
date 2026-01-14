<?php

// Comprobamos el método HTTP
$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo === 'POST') {
    // Leemos y decodificamos el JSON del body
    $datos = json_decode(file_get_contents("php://input"), true);

    if ($datos === null) {
        http_response_code(400);
        echo "JSON no válido";
        exit;
    }

    // Accedemos a los datos del body
    $valor  = $datos['valor']  ?? '';
    $nombre = $datos['nombre'] ?? '';

    if ($valor === "POST") {
        echo "Hola $nombre has pulsado el botón POST";
    } else {
        echo "Valor POST no reconocido";
    }

} elseif ($metodo === 'GET') {
    // Leemos los parámetros de la URL
    $valor  = $_GET['valor']  ?? '';
    $nombre = $_GET['nombre'] ?? '';

    if ($valor === "GET") {
        echo "Hola $nombre has pulsado el botón GET";
    } else {
        echo "Valor GET no reconocido";
    }

} else {
    // Método no permitido
    http_response_code(405);
    echo "Método no permitido";
}
