<?php

require_once "connection.php";

// Inicializamos el array de respuesta
$response = array();

// Comprobamos que los datos llegan vía FormData
if (
    isset($_POST['chip']) &&
    isset($_POST['nombre']) &&
    isset($_POST['raza']) &&
    isset($_POST['fechaNac'])
) {
    // Extraemos y saneamos los datos
    $chip = htmlspecialchars($_POST['chip']);
    $nombre = htmlspecialchars($_POST['nombre']);
    $raza = htmlspecialchars($_POST['raza']);
    $fechaNac = htmlspecialchars($_POST['fechaNac']);

    // Consulta SQL
    $sql = "INSERT INTO Perros (chip, nombre, raza, fechaNac) VALUES (?, ?, ?, ?)";

    try {
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$chip, $nombre, $raza, $fechaNac]);

        // Respuesta de éxito
        $response["mensaje"] = "Registro insertado correctamente";
        $response["data"] = array(
            "chip" => $chip,
            "nombre" => $nombre,
            "raza" => $raza,
            "fechaNac" => $fechaNac
        );
    } catch (PDOException $e) {
        $response["mensaje"] = "Error al insertar el registro: " . $e->getMessage();
    }

} else {
    $response["mensaje"] = "Faltan datos necesarios para insertar el registro";
}

// Devolvemos JSON
header('Content-type: application/json; charset=utf-8');
echo json_encode($response);

// Cerramos conexión
$pdo = null;
exit();
