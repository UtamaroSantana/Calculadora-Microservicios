# Calculadora-Microservicios

estructura del proyecto

microservicios_calculadora/

├── division/                   # Microservicio de división

│   ├── division.py             # Lógica para realizar la operación de división

│   └── Dockerfile              # Archivo para construir la imagen Docker del servicio de división

│   └── requirements            # Dependencias necesarias para el servicio de división

│

├── interfaz/                   # Interfaz de usuario

│   └── scripts/                # Archivos de scripts

│       └── script.js           # Lógica del lado del cliente (JavaScript)

│   └── styles/                 # Archivos de estilos

│       └── estilos.css         # Estilos (CSS)

│   ├── Dockerfile              # Archivo para construir la imagen Docker de la interfaz

│   └── index.html              # Página principal de la interfaz

│

├── multiplicacion/             # Microservicio de multiplicación

│   └── Dockerfile              # Archivo para construir la imagen Docker del servicio de multiplicación

│   └── multiplicacion.py       # Lógica para realizar la operación de multiplicación

│   └── requirements            # Dependencias necesarias para el servicio de multiplicación

│

├── resta/                      # Microservicio de resta

│   └── Dockerfile              # Archivo para construir la imagen Docker del servicio de resta

│   └── requirements            # Dependencias necesarias para el servicio de resta

│   └── resta.py                # Lógica para realizar la operación de resta

│

├── suma/                       # Microservicio de suma

│   └── Dockerfile              # Archivo para construir la imagen Docker del servicio de suma

│   └── requirements            # Dependencias necesarias para el servicio de suma

│   └── suma.py                 # Lógica para realizar la operación de suma

│

└── docker-compose.yml          # Archivo para orquestar todos los microservicios y la interfaz usando Docker Compose


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