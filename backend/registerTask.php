<?php

header('Content-Type: application/json');

// Configuración de la base de datos
$host = 'localhost';
$user = 'root';
$password = '';
$db = 'ToDoAPP';

// Crear conexión
$conn = new mysqli($host, $user, $password, $db);

// Verifica la conexión
if ($conn->connect_error) {
    echo json_encode(['message' => 'Error de conexión a la base de datos: ' . $conn->connect_error]);
    exit;
}
ini_set('display_errors', 1);
error_reporting(E_ALL);


// Verificar los datos enviados
if (!isset($_POST['title']) || !isset($_POST['dataTime']) || !isset($_POST['content'])){
    echo json_encode(['message' => 'Datos Incompletos']);
    exit;
}

$title = $conn->real_escape_string($_POST['title']);
$dataTime = $conn->real_escape_string($_POST['dataTime']);
$content = $conn->real_escape_string($_POST['content']); 

// Inserta la tarea en la base de datos
$sql = "INSERT INTO task (title, dataTime, content) VALUES ('$title', '$dataTime', '$content')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(['message' => 'Tarea registrada con éxito']);
} else {
    echo json_encode(['message' => 'No se pudo registrar la tarea: ' . $conn->error]);
}

$conn->close();
?>
