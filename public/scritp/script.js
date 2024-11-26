function mostrarFormulario() {
    // Muestra el overlay cuando se hace clic en el botón
    document.getElementById('overlay').style.display = 'flex'; 
}

function closePopup() {
    // Oculta el overlay cuando se hace clic en "Cancelar" o en el botón de cierre
    document.getElementById('overlay').style.display = 'none'; 
}

function registerTask(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();

    let title = document.getElementById('task-title').value;
    let dataTime = document.getElementById('task-datatime').value;
    let content = document.getElementById('task-description').value;

    // Convertir dataTime a formato adecuado para MySQL
    if (dataTime) {
        // Convertir de formato "YYYY-MM-DDTHH:MM" a "YYYY-MM-DD HH:MM:SS"
        dataTime = dataTime.replace('T', ' ') + ':00';  // Agregar segundos como '00'
    }

    if (title && dataTime && content) {
        fetch('../../backend/registerTask.php', {
            method: 'POST',
            body: new URLSearchParams({
                'title': title,
                'dataTime': dataTime,
                'content': content
            })
        })
        .then(response => response.json())  // Esperar respuesta en formato JSON
        .then(data => {
            alert(data.message);  // Muestra el mensaje del servidor
            closePopup();  // Cierra el formulario flotante
        })
        .catch(error => {
            console.error('Error al registrar la tarea:', error); // Mostrar si ocurre un error
            alert('Hubo un error al registrar la tarea.');
        });
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

