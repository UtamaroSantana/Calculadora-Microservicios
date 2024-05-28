from flask import Flask, jsonify, request
from flask_cors import CORS

# Inicialización de la aplicación Flask
app = Flask(__name__)

# Configuración de CORS (Cross-Origin Resource Sharing) para permitir peticiones desde otros dominios
cors = CORS(app)

# Definición de una ruta '/api/suma' que acepta peticiones POST
@app.route('/api/suma', methods=['POST'])
def suma():
    """
    Función que realiza la suma de dos números enviados como datos JSON en una solicitud POST.

    Returns:
        str: La suma de los dos números como una cadena de texto.
    """
    # Extracción de los números enviados en formato JSON desde la solicitud POST
    n1 = int(request.get_json()['n1'])
    n2 = int(request.get_json()['n2'])
    
    # Realización de la suma
    result = n1 + n2
    
    # Devolución del resultado como una cadena de texto
    return str(result)

# Inicio de la aplicación Flask si este script es ejecutado directamente
if __name__ == '__main__':
    # Se ejecuta la aplicación en el host '0.0.0.0' (aceptando conexiones desde cualquier dirección IP)
    # y en el puerto '3030'
    app.run(host='0.0.0.0', port='3030')
