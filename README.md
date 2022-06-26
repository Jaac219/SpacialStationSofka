# Spacial Station Sofka

<p align="right">
  <img height="200" src="./craft.gif" />
</p>


## Objetivos del Proyecto

- Construir una App utlizando la arquitectura cliente servidor.
- Implementar el paradigma de programación orientado a objetos y sus pilares.
- Implementar (Abstracción, Herencia, Polimorfismo y Encapsulamiento).
- Construir una aplicación que permita crear, listar, buscar y filtrar naves espaciales Usando POO
- Construir e implementar base de datos para que los datos persistan.
- Desplegar la aplicación en la web para que sea accesible desde cualquier dispositivo.
***

## Implementación
### Diagrama de clases:

<p align="left">
  <img height="350" src="./clases.jpg" />
</p>

### Diagrama Entidad Relación:

<p align="left">
  <img height="350" src="./modelo.jpg" />
</p>

***

## Comenzando

 1. Descargar o clonar el proyecto.
 2. Crear la base de datos en postgres
 3. En `server` crear un archivo llamado: `.env` que tenga la siguiente información:
 ```
 DB_USER=usuariodepostgres
 DB_PASSWORD=passwordDePostgres
 DB_HOST=localhost
 DB_NAME =nombreDeLaBaseDeDatos
 ```
 4. Pararse en la carpeta `servidor` e instalar las depencencias
    - cd server
    - npm install
 5. Levantar el servidor para poder hacerle peticiones
    - npm start
 6. En `client` crear un archivo llamado: `.env` que tenga la siguiente información:
  ```
  BASE_URL=http://localhost:3001/spaceCraft 
  ```
 7. Pararse en la carpeta `client` e instalar las depencencias
    - cd client
    - npm install
 8. Ejecutar el archivo index.html: Usar live-server o abrir el archivo directamente con el navegador

 ***

## Despliegue

Se desplego el backend utilizando `heroku` y el front usando `netlify`.<br>
Puede hacer uso de la aplicación directamente desde la web ingresando al siguiente enlace [Spacial Station Sofka](https://62b81b368a18c31bcbbbe167--papaya-marshmallow-03fd36.netlify.app/)

***