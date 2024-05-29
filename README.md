# Calculadora-Microservicios

estructura del proyecto

microservicios_calculadora/
├── division/
│   ├── division.py
│   └── Dockerfile
│   └── requirements
│
│
├── interfaz/
│	└── scripts/
│		└── script.js
│	└── styles/
│		└── estilos.css
│   ├── Dockerfile
│   └── index.html
│
│
├── multiplicacion/
│	└── Dockerfile
│	└── multiplicación.py
│	└── requirements
│
│
├── resta/
│	└── Dockerfile
│	└── requirements
│	└── resta.py
│
│
│├── suma/
│	  └── Dockerfile
│	  └── requirements
│	  └── suma.py
│
└── docker-compose.yml

enlace del proyecto: https://github.com/UtamaroSantana/Calculadora-Microservicios

Una vez descargado o clonado el proyecto de este repositorio se debe cumplir con los siguietes requisitos.

Requisitos:
-Instalar Python en su version 3. 
-Instalar Flask a la maquina
-Instalar Flask Cors a la maquina
-Instalar Docker en la maquina.


Montar Contenedor
Para montar la aplicacion se debe seguir los siquientes comandos.

$ docker-compose build
Este instala las dependencias necesarias para la construccion de cada contenedor y asi correr todos los microservisios.
$ docker-compose up
Este comando activa cada contenedor y esta listo para uso en este caso en el puerto 8080

Ahora se debe entrar a la url http://localhost:8080/ desde un navegador de preferencia.