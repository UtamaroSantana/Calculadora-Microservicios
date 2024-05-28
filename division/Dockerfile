# Define la imagen base que se utilizará para construir la imagen Docker.
FROM python:3.6

# Expone el puerto 6060 del contenedor para permitir conexiones entrantes.
EXPOSE 6060

# Establece el directorio de trabajo dentro del contenedor.
WORKDIR /app

# Copia el archivo de requisitos (requirements.txt) al directorio de trabajo del contenedor.
COPY requirements.txt /app

# Instala las dependencias especificadas en el archivo de requisitos dentro del contenedor.
RUN pip install -r requirements.txt

# Copia el archivo Python (division.py) al directorio de trabajo del contenedor.
COPY division.py /app

# Define el comando predeterminado que se ejecutará cuando se inicie el contenedor.
CMD python division.py
