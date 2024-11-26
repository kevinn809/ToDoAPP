# ToDoAPP

ToDoAPP es una aplicación de lista de tareas simple que permite agregar, editar y eliminar tareas. Esta aplicación utiliza tecnologías web como HTML, CSS, JavaScript y PHP, y se conecta a una base de datos MySQL para almacenar las tareas.

## Características

- **Agregar tareas**: Permite agregar tareas con un título, una descripción y una fecha/hora.
- **Ver tareas**: Muestra todas las tareas registradas.
- **Editar tareas**: Puedes editar el título, la descripción y la fecha de una tarea.
- **Eliminar tareas**: Permite eliminar una tarea de la lista.

## Tecnologías utilizadas

- **Frontend**: 
  - HTML
  - CSS
  - JavaScript (con fetch API para hacer solicitudes AJAX)
- **Backend**:
  - PHP
  - MySQL (para la base de datos)
  
## Instalación

### Requisitos

- Tener un servidor local (como XAMPP, WAMP, o un servidor de producción) que soporte PHP y MySQL.
- Tener PHP y MySQL instalados y funcionando.

### Pasos para la instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/kevinn809/ToDoAPP.git
# ToDoAPP

ToDoAPP es una aplicación de lista de tareas simple que permite agregar, editar y eliminar tareas. Esta aplicación utiliza tecnologías web como HTML, CSS, JavaScript y PHP, y se conecta a una base de datos MySQL para almacenar las tareas.

## Características

- **Agregar tareas**: Permite agregar tareas con un título, una descripción y una fecha/hora.
- **Ver tareas**: Muestra todas las tareas registradas.
- **Editar tareas**: Puedes editar el título, la descripción y la fecha de una tarea.
- **Eliminar tareas**: Permite eliminar una tarea de la lista.

## Tecnologías utilizadas

- **Frontend**: 
  - HTML
  - CSS
  - JavaScript (con fetch API para hacer solicitudes AJAX)
- **Backend**:
  - PHP
  - MySQL (para la base de datos)
  
## Instalación

### Requisitos

- Tener un servidor local (como XAMPP, WAMP, o un servidor de producción) que soporte PHP y MySQL.
- Tener PHP y MySQL instalados y funcionando.

### Pasos para la instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/kevinn809/ToDoAPP.git
2. **Configurar la base de datos:**

- Abre tu consola de MySQL y crea una base de datos llamada ToDoAPP:
  ```bash
  CREATE DATABASE ToDoAPP;
- Luego, crea una tabla para almacenar las tareas. Aquí tienes el SQL necesario para crear la tabla task:
  ```bash
  CREATE TABLE task(
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  dataTime DATETIME NOT NULL,
  content TEXT NOT NULL
  );
3. **Configurar la conexión a la base de datos en PHP:**

    En el archivo registerTask.php, asegúrate de que los parámetros de la conexión a la base de datos estén configurados correctamente:

    ```bash
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $db = 'ToDoAPP';
4. **Iniciar el servidor:**

- Coloca los archivos del proyecto en la carpeta htdocs de tu servidor local (en caso de usar XAMPP o WAMP) o en la carpeta adecuada si usas otro servidor.
- Asegúrate de que el servidor Apache y MySQL estén funcionando.

5. **Acceder a la aplicación:**

    Abre un navegador web y ve a http://localhost/ToDoAPP/index.html.