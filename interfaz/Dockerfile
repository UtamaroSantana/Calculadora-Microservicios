# Define la imagen base que se utilizará para construir la imagen Docker.
FROM node

# Crea un directorio dentro del contenedor para el código de la aplicación.
RUN mkdir -p /usr/src/app

# Instala el paquete npm 'live-server' globalmente en el contenedor.
RUN npm install -g live-server

# Establece el directorio de trabajo dentro del contenedor.
WORKDIR /usr/src/app

# Expone el puerto 8080 del contenedor para permitir conexiones entrantes.
EXPOSE 8080

# Define el comando predeterminado que se ejecutará cuando se inicie el contenedor.
CMD live-server --cors
