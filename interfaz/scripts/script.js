// Variables globales para almacenar los números y la operación actual
var n1 = null;
var n2 = null;
var operacionActual = "";

// Función para mostrar el número presionado en el display
function digitarNumero(num) {
  var texto = document.getElementById("display").textContent;
  texto += num;
  document.getElementById("display").innerHTML = texto;
  document.getElementById("operacion").innerHTML = "";
}

// Función para borrar el último caracter del display
function borrar() {
  if (operacionActual != "igual") {
    var texto = document.getElementById("display").textContent;
    document.getElementById("display").innerHTML = texto.slice(0, -1);
  }
}

// Función para borrar todos los valores y operaciones realizadas
function borrarTodo() {
  n1 = null;
  n2 = null;
  operacionActual = "";
  document.getElementById("operacion").innerHTML = "";
  document.getElementById("display").innerHTML = "";
  document.getElementById("texto_arriba").innerHTML = "";
}

// Funciones para realizar operaciones matemáticas
function sumar() {
  realizarOperacion("suma", "+");
}

function restar() {
  realizarOperacion("resta", "-");
}

function multiplicar() {
  realizarOperacion("multiplicacion", "x");
}

function dividir() {
  realizarOperacion("division", "/");
}

// Función para obtener el resultado de la operación
function obtenerResultado() {
  n2 = Number(document.getElementById("display").textContent);
  document.getElementById("texto_arriba").innerHTML =
    document.getElementById("texto_arriba").innerHTML + n2;
  realizarOperacion(operacionActual, "");
}

// Función para realizar una operación llamando a las APIs correspondientes
function realizarOperacion(operacion, simbolo) {
  if (n1 != null && n2 != null) {
    var url = "http://localhost:3030/api/" + operacion;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        n1: n1,
        n2: n2,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        n1 = data;
        modificarDisplay(simbolo);
      })
      .catch((e) => {
        console.error(e);
        document.getElementById("display").innerHTML = "Error en la Operacion";
      });
  }
}

// Función para modificar el display después de realizar una operación
function modificarDisplay(simbolo) {
  if (operacionActual == "igual") {
    document.getElementById("operacion").innerHTML = "";
    document.getElementById("display").innerHTML = n1;
  } else {
    document.getElementById("texto_arriba").innerHTML =
      document.getElementById("display").innerHTML + " " + simbolo + " ";
    document.getElementById("operacion").innerHTML = simbolo;
    document.getElementById("display").innerHTML = "";
  }
}
