<?php

header('Content-Type: application/json');

// Verificar qué datos se están recibiendo
var_dump($_POST); // Ver las variables que se están recibiendo

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

?>