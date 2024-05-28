from flask import Flask, jsonify, request
from flask_cors import CORS

# Inicialización de la aplicación Flask
app = Flask(__name__)

# Configuración de CORS (Cross-Origin Resource Sharing) para permitir peticiones desde otros dominios
cors = CORS(app)

# Definición de una ruta '/api/division' que acepta peticiones POST
@app.route('/api/division', methods=['POST'])
def division():    
    
    # Extracción de los números enviados en formato JSON desde la solicitud POST
    n1 = int(request.get_json()['n1'])
    n2 = int(request.get_json()['n2'])    
    
    # Verificación para evitar división por cero
    if (n2 == 0):
        return 'Error'
    else:
         # Realización de la división
        result = n1/n2
        # Devolución del resultado como una cadena de texto
        return str(result)

# Inicio de la aplicación Flask si este script es ejecutado directamente
if __name__ == '__main__':
    # Se ejecuta la aplicación en el host '0.0.0.0' (aceptando conexiones desde cualquier dirección IP)
    # y en el puerto '6060'
    app.run(host='0.0.0.0', port='6060')