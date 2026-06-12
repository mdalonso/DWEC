<?php

require_once "connection.php";

// Recuperamos el cuerpo de la solicitud POST que contiene el JSON
$inputData = file_get_contents('php://input');

// Decodificamos el JSON recibido
$data = json_decode($inputData, true);

// Inicializamos el array de respuesta
$response = array();

if (isset($data['chip']) && isset($data['nombre']) && isset($data['raza']) && isset($data['fechaNac'])) {
    // Extraemos los datos del JSON
    $chip = htmlspecialchars($data['chip']);
    $nombre = htmlspecialchars($data['nombre']);
    $raza = htmlspecialchars($data['raza']);
    $fechaNac = htmlspecialchars($data['fechaNac']);

    // Preparamos la consulta SQL para insertar el nuevo perro
    $sql = "INSERT INTO Perros (chip, nombre, raza, fechaNac) VALUES (?, ?, ?, ?)";

    try {
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$chip, $nombre, $raza, $fechaNac]);

        // Si la inserción fue exitosa, enviamos un mensaje de éxito
        $response["mensaje"] = "Registro insertado correctamente";
        $response["data"] = array(
            "chip" => $chip,
            "nombre" => $nombre,
            "raza" => $raza,
            "fechaNac" => $fechaNac
        );
    } catch (PDOException $e) {
        // Si ocurre un error, lo capturamos y lo mostramos
        $response["mensaje"] = "Error al insertar el registro: " . $e->getMessage();
    }
} else {
    $response["mensaje"] = "Faltan datos necesarios para insertar el registro";
}

// Configuramos la respuesta como JSON
header('Content-type: application/json; charset=utf-8');
echo json_encode($response);

// Cerramos la conexión
$pdo = null;

exit();
