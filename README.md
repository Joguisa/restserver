# RestServer

Este proyecto es un servidor básico que proporciona ejemplos para comprender los conceptos básicos de RESTful API. El servidor puede procesar operaciones GET, POST, PUT y DELETE.

## Configuración

Asegúrate de tener Node.js y npm instalados en tu máquina antes de comenzar.

1. Clona el repositorio:

    ```bash
    git clone https://github.com/Joguisa/restserver.git
    cd restserver
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno según sea necesario. Puedes seguir el formato del archivo `.env.example` proporcionado.

## Comandos

- Para ejecutar el servidor en modo de desarrollo con nodemon:

    ```bash
    npm run dev
    ```

## Estructura del Proyecto

- **`/src`**: Contiene el código fuente de la aplicación.
- **`/routes`**: Define las rutas de la API.
- **`/controllers`**: Contiene los controladores que manejan la lógica de las rutas.
- **`/public`**: Carpeta para archivos estáticos (si es necesario).
- **`/tests`**: Carpeta para pruebas (si es necesario).

## Dependencias Principales

- [Express](https://expressjs.com/): Framework web para Node.js.
- [Cors](https://www.npmjs.com/package/cors): Middleware para habilitar CORS en Express.
- [Dotenv](https://www.npmjs.com/package/dotenv): Carga variables de entorno desde un archivo .env.

## Licencia

Este proyecto está bajo la Licencia [ISC](LICENSE).
