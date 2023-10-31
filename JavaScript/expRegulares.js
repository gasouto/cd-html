/*  1.Validación de Correo Electrónico:
Solicitar al usuario su correo electrónico
Validar correo electrónico
Mostrar si el correo electrónico es válido o no */
function regular1(){

}


/*  2.Validar número de teléfono
Solicitar al usuario su número de teléfono
Validar número de teléfono
Mostrar si el número de teléfono es válido o no */
function regular2() {
  var texto = "Mi número de teléfono es 123-456-7890 y otro número es 555-555-5555.";
  var telefonosEncontrados = texto.match(/\d{3}-\d{3}-\d{4}/g);
  if (telefonosEncontrados) {
    alert("Números de teléfono encontrados: " + telefonosEncontrados.join(", "));
  } else {
    alert("No se encontraron números de teléfono en el texto.");
  }



/*  3.A partir del siguiente texto, debes encontrar con una función los números de teléfono y mostrarlos por pantalla
“Mi número de teléfono es 123-456-7890 y otro número es 555-555-5555.”
Obtener los números de teléfono del texto
Mostrar los números de teléfono por pantalla */
function regular3(){

}


/* 4.A partir del siguiente texto debes reemplazar la palabra “gato”

Los niños tenían un gato en casa.
El gato era un gato travieso.
El gato solía subirse a los árboles.
Los niños amaban al gato.
El gato, el gato, el gato, siempre el gato.

-Crear una función que reemplace la palabra “gato” por la que se le mande por parámetro
-Mostrar el texto modificado */

function regular4(){

}