/*Pedir dos números y mostrar el resultado */
function ejercicio1(){
    var numero1 = parseInt(prompt('Escribe el primer número'));
    var numero2 = parseInt(prompt('Escribe el segundo número'));
    console.log(numero1+numero2);
}


/* Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.*/
function ejercicio2(){
   while ((numero = parseInt(prompt('Introduce un número'))) > 0 ) {
    var cuadrado = numero * numero;
    console.log('El cuadrado de ' + numero + 'es ' + cuadrado);
   }
}

/* 
function ejercicio2(){

    while ((numero = parseInt(prompt("Introduce un número:"))) > 0 ) {

        var cuadrado = numero * numero; // Se calcula el cuadrado del número ingresado y se guarda en la variable "cuadrado".

        document.write("El cuadrado de " + numero + " es " + cuadrado + "<br>"); // Se muestra en pantalla el mensaje con el número ingresado y su cuadrado.

      }

}
*/

/*Pedir números hasta que se teclee uno negativo, y mostrar cuántos números se han introducido.*/
function ejercicio3(){
    
}
 

/*Pedir números hasta que se introduzca uno negativo, y calcular la media.*/
function ejercicio4(){
    
}
 

/*Pedir un número N, y mostrar todos los números del 1 al N. */
function ejercicio5(){
    var N = parseInt(prompt('Introduce un número: '));
    for (var i = 1; i <= N; i++) {
        console.log(i);
    }

}


/*Escribir todos los números del 100 al 0 de 7 en 7.*/
function ejercicio6(){
    for (i = 100; i >= 0; i -= 7) {
        console.log(i)
    }
    
}
 

/*Diseñar un programa que muestre el producto de los 10 primeros números impares.*/
function ejercicio7(){
    let producto = 1;
    let contador = 0;
    for (let i = 1; contador < 10; i += 2) {
        producto *= i;
        contador++;
    }
    console.log("El producto de los 10 primeros números impares es: " + producto);    
}
 

/*Pedir un número y calcular su factorial.*/
function ejercicio8(){
    
}
 

/*Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros.*/
function ejercicio9(){
    
}
 

/*Pedir 10 sueldos. Mostrar su suma y cuantos hay mayores de 1000€.*/
function ejercicio10(){
    
}


/*Ejercicios extra: */

/* 1- Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media, la cantidad de alumnos mayores de 18 años, y la cantidad de alumnos que miden más de 1.75.*/
function ejercicioExtra1(){
    
}


/* 2- Pedir un número y mostrar si es primo o no.*/
function ejercicioExtra2(){
    
}


/* 3- Pedir un número y mostrar todos los números pares desde 1 hasta ese número.*/
function ejercicioExtra3(){
    
}


/*Pedir un número y mostrar su tabla de multiplicar del 1 al 10.*/
function ejercicio14(){
    var numero = parseInt(prompt("Introduce un número"));
    for (var i = 1; i <= 10; i++){
        var resultado = numero * i;
        document.write("La tabla de multiplicar del " + numero + " en la posición " + i + " tiene como resutado: " + resultado + "<br>");
    
    }
}

/*
    // Solicitar al usuario un número
    var numero = parseInt(prompt("Ingrese un número:"));

    // Verificar si se ingresó un número válido
    if (isNaN(numero)) {
      alert("Debe ingresar un número válido.");
    } else {
      // Mostrar la tabla de multiplicar del número ingresado
      for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        document.write(numero + " x " + i + " = " + resultado + "<br>"); }
    }
*/

/* Calcular la suma de los dígitos de un número entero */
function ejercicio15(){
    var numero = parseInt(prompt("Introduce un número:"));
    var array = numero.toString().split("");
    var sumaDigitos = 0;
    for(i = 1; i <= array.length; i++) {
        suma += parseInt(num[i]);
    }
    console.log("a suma de los dígitos de " + num + " es: " + suma);
}


/* Calcular la letra del DNI */
function ejercicio16(){
    var dni = prompt("Introduce el número de DNI:");

    // Validar que el número de DNI tenga 8 dígitos
    if (dni.length !== 8) {
      alert("El número de DNI debe tener 8 dígitos."); // Si el número de DNI no tiene 8 dígitos, se muestra una alerta
    } else {

      // Obtener la letra del DNI según el algoritmo
      var letras = "TRWAGMYFPDXBNJZSQVHLCKE"; // Cadena de caracteres que contiene las letras correspondientes a los dígitos del DNI
      var indice = parseInt(dni) % 23; // Cálculo del índice correspondiente al número de DNI
      var letra = letras.charAt(indice); // Obtención de la letra correspondiente al índice

      document.write("La letra del DNI es: " + letra); // Se muestra en pantalla la letra del DNI
    }
}


/* Solicitar al usuario el total de la cuenta y el porcentaje de propina deseado,
despues mostrar por pantalla la propina en euros y el total (propina incluida)*/
function ejercicio17(){

}

/* Hacer un juego de adivinanza. Generar un numero entre 0 y 100 y pedir al usuario
 que intente adivinarlo. Si lo acierta mostrar un mensaje de felicidades y sino indicar 
 si el numero es mayor o menor comparándolo con el introducido por el usuario.*/
 function ejercicio18(){
    
 }


 /* Eliminar una palabra:
        ◦ Pedir al usuario que ingrese una frase y una palabra a eliminar.
        ◦ Eliminar todas las apariciones de la palabra en la frase utilizando el método split, join y indexOf.
        ◦ Mostrar la frase resultante sin la palabra eliminada. */
        function ejercicio18(){
            var frase = prompt("Ingrese una frase:");
            var palabraEliminar = prompt("Ingrese la palabra a eliminar:");

    // Utilizamos el método split para convertir la frase en un array de palabras
    var palabras = frase.split(" ");

    // Utilizamos el método indexOf para encontrar las apariciones de la palabra a eliminar
    var indice = palabras.indexOf(palabraEliminar);
    while (indice !== -1) {
      // Eliminamos la palabra del array utilizando el método splice
      palabras.splice(indice, 1);
      indice = palabras.indexOf(palabraEliminar);
    }

    // Utilizamos el método join para unir las palabras del array en una frase nuevamente
    var fraseResultante = palabras.join(" ");

    // Mostramos la frase resultante sin la palabra eliminada
    document.write("Frase resultante: " + fraseResultante);
    alert("Frase resultante: " + fraseResultante);
}

/* Pedir al usuario que ingrese una lista de elementos separados por comas. Devolver una lista sin elementos duplicados */
function ejercicio20(){

}



var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var palabras = ['Hola', 'Mundo', 'JavaScript', 'Introducción', 'Programación'];
var frase = 'Este es un ejemplo de una frase larga.';
var estudiantes = ['Ana', 'Juan', 'María', 'Pedro', 'Luis'];

// Ejercicio 1: Extraer los primeros 3 números del array 'numeros'

// Ejercicio 2: Extraer las palabras en las posiciones 2 y 3 del array 'palabras'


// Ejercicio 3: Extraer una parte de la frase desde el índice 5 hasta el 15


// Ejercicio 4: Extraer los dos últimos elementos del array 'estudiantes'


// Ejercicio 5: Extraer una porción del array 'numeros' desde el índice 3 hasta el final


// Pedirle una frase al usuario y devolver mitad en minuscula y mitad en mayuscula
function ejercicio22(){
    let frase = prompt("Intrduce una frase: ")
    let arrayFrase = frase.split(" ");

    
}



/* Escribe un programa en JavaScript que solicite al usuario ingresar una oración. A partir de la oración ingresada, el programa deberá realizar los siguientes pasos:
    1. Contar la cantidad de palabras en la oración.
    2. Solicitar al usuario ingresar una palabra específica para buscar en la oración.
    3. Contar la cantidad de ocurrencias de la palabra ingresada en la oración.
    4. Solicitar al usuario ingresar una nueva palabra para reemplazar todas las ocurrencias de la palabra ingresada en la oración.
    5. Reemplazar todas las ocurrencias de la palabra ingresada por la nueva palabra.
    6. Mostrar la oración resultante después de realizar el reemplazo. */

    function ejercicio23(){
        // Paso 1: Solicitar al usuario ingresar una oración
    var oracion = prompt("Ingresa una oración:");

    // Paso 2: Contar la cantidad de palabras en la oración
    var palabras = oracion.split(" ");
    var cantidadPalabras = palabras.length;
    document.write("La oración contiene " + cantidadPalabras + " palabras." + "<br>");

    // Paso 3: Solicitar al usuario ingresar una palabra a buscar
    var palabraBuscada = prompt("Ingresa una palabra a buscar:");

    // Paso 4: Contar la cantidad de ocurrencias de la palabra en la oración
    var cantidadOcurrencias = 0;
    for (var i = 0; i < palabras.length; i++) {
      if (palabras[i].toLowerCase() === palabraBuscada.toLowerCase()) {
        cantidadOcurrencias++;
      }
    }
    document.write('La palabra "' + palabraBuscada + '" se repite ' + cantidadOcurrencias + ' veces en la oración.' + "<br>");

    // Paso 5: Solicitar al usuario ingresar una nueva palabra para reemplazar
    var nuevaPalabra = prompt("Ingresa una nueva palabra para reemplazar:");

    // Paso 6: Reemplazar todas las ocurrencias de la palabra en la oración
    var oracionResultante = oracion.replaceAll(palabraBuscada, nuevaPalabra);
    document.write("La oración resultante es: " + oracionResultante + "<br>");
        
    }




/* Ejercicio 1: Eliminar elementos de un array
Enunciado: Dado el siguiente array de números: [10, 20, 30, 40, 50], elimina los elementos en las posiciones 1 y 3.

Ejercicio 2: Reemplazar elementos en un array
Enunciado: Dado el siguiente array de letras: ['a', 'b', 'c', 'd', 'e'], reemplaza los elementos en las posiciones 0 y 4 por los valores 'x' y 'y' respectivamente.
 
Ejercicio 3: Insertar elementos en un array
Enunciado: Dado el siguiente array de palabras: ['hello', 'world', 'JavaScript'], inserta los elementos 'goodbye' y 'code' en la posición 2 sin eliminar ningún elemento existente.
 
Ejercicio 4: Extraer una porción de elementos de un array
Enunciado: Dado el siguiente array de números: [5, 10, 15, 20, 25], extrae los elementos desde la posición 2 hasta la posición 4 y muestra tanto el array resultante como los elementos extraídos.
 
Ejercicio 5: Dividir un array en dos partes
Enunciado: Dado el siguiente array de frutas: ['manzana', 'banana', 'pera', 'uva', 'kiwi'], divide el array en dos partes en la posición 3 y muestra tanto la primera parte como la segunda parte resultantes. */

// Ejercicio 1: Eliminar elementos de un array
var numeros = [10, 20, 30, 40, 50];
numeros.splice(1, 1); // Elimina el elemento en el índice 1
numeros.splice(2, 1); // Elimina el elemento en el índice 2
document.write("Ejercicio 1 - Números: " + numeros + "<br>");

// Ejercicio 2: Reemplazar elementos en un array
var letras = ['a', 'b', 'c', 'd', 'e'];

letras.splice(0, 1, 'x'); // Reemplaza el elemento en el índice 0 por 'x'
letras.splice(4, 1, 'y'); // Reemplaza el elemento en el índice 4 por 'y'
document.write("Ejercicio 2 - Letras: " + letras + "<br>");

// Ejercicio 3: Insertar elementos en un array
var palabras = ['hello', 'world', 'JavaScript'];
palabras.splice(2, 0, 'goodbye', 'code'); // Inserta 'goodbye' y 'code' en el índice 2
document.write("Ejercicio 3 - Palabras: " + palabras + "<br>");

// Ejercicio 4: Extraer una porción de elementos de un array
var numerosExtract = [5, 10, 15, 20, 25];
var elementosExtraidos = numerosExtract.splice(2, 3); // Extrae 3 elementos a partir del índice 2
document.write("Ejercicio 4 - Números Extraídos: " + elementosExtraidos + "<br>");
document.write("Ejercicio 4 - Números Restantes: " + numerosExtract + "<br>");

// Ejercicio 5: Dividir un array en dos partes
var frutas = ['manzana', 'banana', 'pera', 'uva', 'kiwi'];
var primeraParte = frutas.splice(0, 3); // Extrae los primeros 3 elementos
var segundaParte = frutas; // La segunda parte es el resto del array original
document.write("Ejercicio 5 - Primera Parte: " + primeraParte + "<br>");
document.write("Ejercicio 5 - Segunda Parte: " + segundaParte + "<br>");




/* Ejercicio 1: Filtrar números pares
Filtrar los números pares del array numeros y mostrarlos en el documento.
 
Ejercicio 2: Filtrar palabras que empiecen con la letra "b"
Filtrar las palabras del array palabras que empiezan con la letra "b" y mostrarlas en el documento.
 
Ejercicio 3: Filtrar números mayores que 50
Filtrar los números del array numeros que son mayores que 50 y mostrarlos en el documento.
 
Ejercicio 4: Filtrar personas mayores de 30 años
Filtrar las personas en el array de objetos personas cuya edad sea mayor o igual a 30 y mostrarlas en el documento.
 
Ejercicio 5: Filtrar palabras que contengan la subcadena "an"
Filtrar las palabras del array palabras que contienen la subcadena "an" y mostrarlas en el documento. */

/* 1.var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
2. var palabras = ["manzana", "banana", "pera", "kiwi", "sandía"];
3.var numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
4. var personas = [
      { nombre: "Juan", edad: 25 },
      { nombre: "María", edad: 30 },
      { nombre: "Pedro", edad: 35 },
      { nombre: "Ana", edad: 40 },
    ];
5. var palabras = ["manzana", "banana", "pera", "kiwi", "sandía"]; */

function ejercicio26(){
    // Ejercicio 1: Filtrar números pares
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Filtrar los números pares utilizando el método filter y una función de callback
    var numerosPares = numeros.filter(function (numero) {
      return numero % 2 === 0; // Devuelve true si el número es par, false en caso contrario
    });
    // Mostrar los números pares en el documento
    document.write("Números pares: " + numerosPares + "<br>");

    // Ejercicio 2: Filtrar palabras que empiecen con una letra específica
    var palabras = ["manzana", "banana", "pera", "kiwi", "sandía"];
    var letraInicial = "b";
    // Filtrar las palabras que empiezan con la letra inicial utilizando el método filter y una función de callback
    var palabrasFiltradas = palabras.filter(function (palabra) {
      return palabra.charAt(0).toLowerCase() === letraInicial.toLowerCase(); // Compara la primera letra de cada palabra con la letra inicial
    });
    // Mostrar las palabras filtradas en el documento
    document.write("Palabras filtradas: " + palabrasFiltradas + "<br>");

    // Ejercicio 3: Filtrar números mayores que un valor dado
    var numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    var valorMinimo = 50;
    // Filtrar los números mayores que el valor mínimo utilizando el método filter y una función de callback
    var numerosFiltrados = numeros.filter(function (numero) {
      return numero > valorMinimo; // Devuelve true si el número es mayor que el valor mínimo, false en caso contrario
    });
    // Mostrar los números filtrados en el documento
    document.write("Números filtrados: " + numerosFiltrados + "<br>");

    // Ejercicio 4: Filtrar elementos de un array de objetos basado en una propiedad
    var personas = [
      { nombre: "Juan", edad: 25 },
      { nombre: "María", edad: 30 },
      { nombre: "Pedro", edad: 35 },
      { nombre: "Ana", edad: 40 },
    ];
    var edadMinima = 30;
    // Filtrar las personas cuya edad sea mayor o igual a la edad mínima utilizando el método filter y una función de callback
    var personasFiltradas = personas.filter(function (persona) {
      return persona.edad >= edadMinima; // Devuelve true si la edad de la persona es mayor o igual a la edad mínima, false en caso contrario
    });
    // Mostrar las personas filtradas en el documento
    document.write("Personas filtradas: " + JSON.stringify(personasFiltradas) + "<br>");

    // Ejercicio 5: Filtrar strings que contengan una subcadena específica
    var palabras = ["manzana", "banana", "pera", "kiwi", "sandía"];
    var subcadena = "an";
    // Filtrar las palabras que contengan la subcadena utilizando el método filter y una función de callback
    var palabrasFiltradas = palabras.filter(function (palabra) {
      return palabra.includes(subcadena); // Devuelve true si la palabra contiene la subcadena, false en caso contrario
    });
    // Mostrar las palabras filtradas en el documento
    document.write("Palabras filtradas: " + palabrasFiltradas + "<br>");
}






/* Ejercicio 1: Filtrar objetos con un valor específico en una propiedad
Dado un array de objetos personas, debes filtrar y obtener los objetos cuya propiedad nombre coincida exactamente con un valor específico. Almacena los objetos filtrados en la variable personasFiltradas.

Ejercicio 2: Filtrar objetos basado en una propiedad numérica
Dado un array de objetos productos, debes filtrar y obtener los objetos cuya propiedad precio sea menor o igual a un valor máximo dado. Almacena los objetos filtrados en la variable productosFiltrados.

Ejercicio 3: Filtrar objetos basado en una propiedad de tipo booleano
Dado un array de objetos tareas, debes filtrar y obtener los objetos cuya propiedad completada sea true. Almacena los objetos filtrados en la variable tareasCompletadas.

Ejercicio 4: Filtrar objetos basado en múltiples condiciones
Dado un array de objetos empleados, debes filtrar y obtener los objetos que cumplan con dos condiciones: que la propiedad departamento sea igual a un valor específico y que la propiedad edad sea mayor o igual a un valor mínimo dado. Almacena los objetos filtrados en la variable empleadosFiltrados.

Ejercicio 5: Filtrar objetos basado en una propiedad que contiene una subcadena
Dado un array de objetos libros, debes filtrar y obtener los objetos cuya propiedad titulo contenga una subcadena específica, sin importar mayúsculas o minúsculas. Almacena los objetos filtrados en la variable librosFiltrados. */

function ejercicio27(){
    var personas = [
        { nombre: "Juan", edad: 25 },
        { nombre: "María", edad: 30 },
        { nombre: "Pedro", edad: 35 },
        { nombre: "Ana", edad: 40 },
      ];
      var nombreBuscado = "María";
      // Filtrar las personas cuyo nombre coincide con el nombre buscado utilizando el método filter y una función de callback
      var personasFiltradas = personas.filter(function (persona) {
        return persona.nombre == nombreBuscado; // Devuelve true si el nombre coincide, false en caso contrario
      });
  
      // Mostrar las personas filtradas en el documento
      document.write("Personas filtradas: " + JSON.stringify(personasFiltradas) + "<br>");
  
  
      var productos = [
        { nombre: "Camisa", precio: 20 },
        { nombre: "Pantalón", precio: 30 },
        { nombre: "Zapatos", precio: 50 },
        { nombre: "Sombrero", precio: 15 },
      ];
      var precioMaximo = 40;
      // Filtrar los productos cuyo precio es menor o igual al precio máximo utilizando el método filter y una función de callback
      var productosFiltrados = productos.filter(function (producto) {
        return producto.precio <= precioMaximo; // Devuelve true si el precio es menor o igual, false en caso contrario
      });
  
      // Mostrar los productos filtrados en el documento
      document.write("Productos filtrados: " + JSON.stringify(productosFiltrados) + "<br>");
  
      var tareas = [
        { nombre: "Comprar leche", completada: true },
        { nombre: "Pagar facturas", completada: false },
        { nombre: "Hacer ejercicio", completada: true },
        { nombre: "Llamar al médico", completada: false },
      ];
      // Filtrar las tareas completadas utilizando el método filter y una función de callback
      var tareasCompletas = tareas.filter(function (tarea) {
        return tarea.completada; // Devuelve true si la tarea está completada, false en caso contrario
      });
  
      // Mostrar las tareas completadas en el documento
      document.write("Tareas completadas: " + JSON.stringify(tareasCompletas) + "<br>");
  
      var empleados = [
        { nombre: "Juan", edad: 25, departamento: "Ventas" },
        { nombre: "María", edad: 30, departamento: "Marketing" },
        { nombre: "Pedro", edad: 35, departamento: "Ventas" },
        { nombre: "Ana", edad: 40, departamento: "Recursos Humanos" },
      ];
      var departamentoBuscado = "Ventas";
      var edadMinima = 30;
      // Filtrar los empleados cuyo departamento coincide con el departamento buscado y tienen una edad mayor o igual a la edad mínima utilizando el método filter y una función de callback
      var empleadosFiltrados = empleados.filter(function (empleado) {
        return empleado.departamento == departamentoBuscado && empleado.edad >= edadMinima; // Devuelve true si el empleado cumple ambas condiciones, false en caso contrario
      });
  
      // Mostrar los empleados filtrados en el documento
      document.write("Empleados filtrados: " + JSON.stringify(empleadosFiltrados) + "<br>");
  
  
      var libros = [
        { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald" },
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
        { titulo: "1984", autor: "George Orwell" },
        { titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
      ];
      var subcadenaBuscada = "soledad";
      // Filtrar los libros cuyo título contiene la subcadena buscada (sin tener en cuenta mayúsculas o minúsculas) utilizando el método filter y una función de callback
      var librosFiltrados = libros.filter(function (libro) {
        return libro.titulo.toLowerCase().includes(subcadenaBuscada.toLowerCase()); // Devuelve true si el título contiene la subcadena, false en caso contrario
      });
  
      // Mostrar los libros filtrados en el documento
      document.write("Libros filtrados: " + JSON.stringify(librosFiltrados));
    }




/*  1. Recorre el array words = ['hello', 'world', 'javascript'] de strings e imprime cada palabra en mayúsculas.
    2. Dado el array numbers = [2, 4, 6, 8, 10] de números, crea un nuevo array que contenga el cuadrado de cada número.
    3. Verifica si todos los elementos del array names = ['John', 'Jane', 'Mark', 'Emily'] de strings tienen una longitud mayor a 3 caracteres.
    4. Verifica si al menos un elemento del array numbers = [8, 12, 7, 25, 16] de números es divisible por 5.
    5. Ordena de forma ascendente el array numbers = [5, 1, 3, 2, 4] de objetos numéricos.
    6. Recorre el array names = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor'] de nombres e imprime solo aquellos que contengan la letra 'a'.
    7. Dado el array celsiusTemperatures = [25, 30, 15, 20, 10] de temperaturas en grados Celsius, conviértelo a grados Fahrenheit.
    8. Verifica si todos los elementos del array numbers = [2, -4, 6, -8, 10] de números son positivos.
    9. Verifica si al menos un elemento del array phrases = ['I love JavaScript', 'JavaScript is fun', 'Coding with JavaScript'] de strings contiene la palabra "JavaScript".
    10. Ordena alfabéticamente por el nombre el array users = [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 35 }, { name: 'David', age: 28 }] de objetos. */

    function ejercicio28(){
         // Ejercicio 1: Imprimir cada palabra en mayúsculas

    var words = ['hello', 'world', 'javascript'];

    // Utilizando un bucle for
    for (var i = 0; i < words.length; i++) {
      var uppercaseWord = words[i].toUpperCase(); // Convierte la palabra actual a mayúsculas
      document.write(uppercaseWord + "<br>"); // Imprime la palabra en mayúsculas seguida de una etiqueta <br> para un salto de línea
    }

    // Utilizando forEach
    words.forEach(function (word) {
      var uppercaseWord = word.toUpperCase(); // Convierte la palabra actual a mayúsculas
      document.write(uppercaseWord + "<br>"); // Imprime la palabra en mayúsculas seguida de una etiqueta <br> para un salto de línea
    });

    // Utilizando map
    var uppercaseWords = words.map(function (word) {
      return word.toUpperCase(); // Convierte cada palabra a mayúsculas y las devuelve en un nuevo array
    });

    uppercaseWords.forEach(function (word) {
      document.write(word + "<br>"); // Imprime cada palabra en mayúsculas seguida de una etiqueta <br> para un salto de línea
    });

    // Utilizando for...of
    for (var word of words) {
      var uppercaseWord = word.toUpperCase(); // Convierte la palabra actual a mayúsculas
      document.write(uppercaseWord + "<br>"); // Imprime la palabra en mayúsculas seguida de una etiqueta <br> para un salto de línea
    }

    // Ejercicio 2: Crear un nuevo array con el cuadrado de cada número

    var numbers = [2, 4, 6, 8, 10];

    // Utilizando un bucle for
    var squaredNumbersFor = [];
    for (var i = 0; i < numbers.length; i++) {
      squaredNumbersFor.push(numbers[i] ** 2); // Agrega el cuadrado del número actual al nuevo array
    }
    document.write(squaredNumbersFor + "<br>"); // Imprime el nuevo array con los números al cuadrado

    // Utilizando map
    var squaredNumbersMap = numbers.map(function (number) {
      return number ** 2; // Retorna el cuadrado de cada número y los devuelve en un nuevo array
    });
    document.write(squaredNumbersMap + "<br>"); // Imprime el nuevo array con los números al cuadrado

    // Utilizando for...of
    var squaredNumbersForOf = [];
    for (var number of numbers) {
      squaredNumbersForOf.push(number ** 2); // Agrega el cuadrado del número actual al nuevo array
    }
    document.write(squaredNumbersForOf + "<br>"); // Imprime el nuevo array con los números al cuadrado

    // Ejercicio 3: Verificar si todos los elementos de un array tienen una longitud mayor a 3 caracteres

    var names = ['John', 'Jane', 'Mark', 'Emily'];

    // Utilizando un bucle for
    var allNamesLongerThan3For = true;
    for (var i = 0; i < names.length; i++) {
      if (names[i].length <= 3) {
        allNamesLongerThan3For = false; // Si encuentra un nombre con longitud menor o igual a 3, establece la variable en false
        break; // Sale del bucle
      }
    }
    document.write(allNamesLongerThan3For + "<br>"); // Imprime true si todos los nombres tienen una longitud mayor a 3, de lo contrario imprime false

    // Utilizando every
    var allNamesLongerThan3Every = names.every(function (name) {
      return name.length > 3; // Retorna true si todos los nombres tienen una longitud mayor a 3, de lo contrario retorna false
    });
    document.write(allNamesLongerThan3Every + "<br>"); // Imprime true si todos los nombres tienen una longitud mayor a 3, de lo contrario imprime false

    // Utilizando for...of
    var allNamesLongerThan3ForOf = true;
    for (var name of names) {
      if (name.length <= 3) {
        allNamesLongerThan3ForOf = false; // Si encuentra un nombre con longitud menor o igual a 3, establece la variable en false
        break; // Sale del bucle
      }
    }
    document.write(allNamesLongerThan3ForOf + "<br>"); // Imprime true si todos los nombres tienen una longitud mayor a 3, de lo contrario imprime false

    // Ejercicio 4: Verificar si al menos un elemento de un array es divisible por 5

    var numbers = [8, 12, 7, 25, 16];

    // Utilizando un bucle for
    var someNumberDivisibleBy5For = false;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 5 === 0) {
        someNumberDivisibleBy5For = true; // Si encuentra un número divisible por 5, establece la variable en true
        break; // Sale del bucle
      }
    }
    document.write(someNumberDivisibleBy5For + "<br>"); // Imprime true si al menos un número es divisible por 5, de lo contrario imprime false

    // Utilizando some
    var someNumberDivisibleBy5Some = numbers.some(function (number) {
      return number % 5 === 0; // Retorna true si al menos un número es divisible por 5, de lo contrario retorna false
    });
    document.write(someNumberDivisibleBy5Some + "<br>"); // Imprime true si al menos un número es divisible por 5, de lo contrario imprime false

    // Utilizando for...of
    var someNumberDivisibleBy5ForOf = false;
    for (var number of numbers) {
      if (number % 5 === 0) {
        someNumberDivisibleBy5ForOf = true; // Si encuentra un número divisible por 5, establece la variable en true
        break; // Sale del bucle
      }
    }
    document.write(someNumberDivisibleBy5ForOf + "<br>"); // Imprime true si al menos un número es divisible por 5, de lo contrario imprime false

    // Ejercicio 5: Ordenar un array de números de forma ascendente

    var numbers = [5, 1, 3, 2, 4];

    // Utilizando sort
    var sortedNumbersSort = numbers.sort(function (a, b) {
      return a - b; // Compara los números y los ordena de forma ascendente
    });
    document.write(sortedNumbersSort + "<br>"); // Imprime el array de números ordenados de forma ascendente

    // Ejercicio 6: Imprimir solo los nombres que contienen la letra 'a'

    var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor'];

    // Utilizando un bucle for
    for (var i = 0; i < names.length; i++) {
      if (names[i].toLowerCase().includes('a')) { // Convierte el nombre a minúsculas y verifica si contiene la letra 'a'
        document.write(names[i] + "<br>"); // Imprime el nombre si contiene la letra 'a'
      }
    }

    // Utilizando forEach
    names.forEach(function (name) {
      if (name.toLowerCase().includes('a')) { // Convierte el nombre a minúsculas y verifica si contiene la letra 'a'
        document.write(name + "<br>"); // Imprime el nombre si contiene la letra 'a'
      }
    });

    // Utilizando filter y forEach
    names.filter(function (name) {
      return name.toLowerCase().includes('a'); // Filtra los nombres que contienen la letra 'a'
    }).forEach(function (name) {
      document.write(name + "<br>"); // Imprime los nombres que contienen la letra 'a'
    });

    // Utilizando for...of
    for (var name of names) {
      if (name.toLowerCase().includes('a')) { // Convierte el nombre a minúsculas y verifica si contiene la letra 'a'
        document.write(name + "<br>"); // Imprime el nombre si contiene la letra 'a'
      }
    }

    // Ejercicio 7: Convertir temperaturas de Celsius a Fahrenheit

    var celsiusTemperatures = [25, 30, 15, 20, 10];

    // Utilizando un bucle for
    var fahrenheitTemperaturesFor = [];
    for (var i = 0; i < celsiusTemperatures.length; i++) {
      var fahrenheit = (celsiusTemperatures[i] * 9 / 5) + 32; // Convierte la temperatura de Celsius a Fahrenheit
      fahrenheitTemperaturesFor.push(fahrenheit); // Agrega la temperatura convertida al nuevo array
    }
    document.write(fahrenheitTemperaturesFor + "<br>"); // Imprime el nuevo array con las temperaturas convertidas

    // Utilizando map
    var fahrenheitTemperaturesMap = celsiusTemperatures.map(function (celsius) {
      return (celsius * 9 / 5) + 32; // Convierte la temperatura de Celsius a Fahrenheit y retorna el resultado
    });
    document.write(fahrenheitTemperaturesMap + "<br>"); // Imprime el nuevo array con las temperaturas convertidas

    // Utilizando for...of
    var fahrenheitTemperaturesForOf = [];
    for (var celsius of celsiusTemperatures) {
      var fahrenheit = (celsius * 9 / 5) + 32; // Convierte la temperatura de Celsius a Fahrenheit
      fahrenheitTemperaturesForOf.push(fahrenheit); // Agrega la temperatura convertida al nuevo array
    }
    document.write(fahrenheitTemperaturesForOf + "<br>"); // Imprime el nuevo array con las temperaturas convertidas


    // Ejercicio 8: Verificar si todos los números de un array son positivos

    var numbers = [2, -4, 6, -8, 10];

    // Utilizando un bucle for
    var allNumbersPositiveFor = true;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] <= 0) { // Verifica si el número actual es menor o igual a 0
        allNumbersPositiveFor = false; // Si se encuentra un número no positivo, se establece la bandera en false
        break; // Se detiene el bucle
      }
    }
    document.write(allNumbersPositiveFor + "<br>"); // Imprime el resultado de la verificación

    // Utilizando every
    var allNumbersPositiveEvery = numbers.every(function (number) {
      return number > 0; // Verifica si todos los números son mayores a 0 utilizando el método every
    });
    document.write(allNumbersPositiveEvery + "<br>"); // Imprime el resultado de la verificación

    // Utilizando for...of
    var allNumbersPositiveForOf = true;
    for (var number of numbers) {
      if (number <= 0) { // Verifica si el número actual es menor o igual a 0
        allNumbersPositiveForOf = false; // Si se encuentra un número no positivo, se establece la bandera en false
        break; // Se detiene el bucle
      }
    }
    document.write(allNumbersPositiveForOf + "<br>"); // Imprime el resultado de la verificación

    // Ejercicio 9: Verificar si al menos un elemento de un array contiene la palabra "JavaScript"

    var phrases = ['I love JavaScript', 'JavaScript is fun', 'Coding with JavaScript'];

    // Utilizando un bucle for
    var somePhraseContainsJavaScriptFor = false;
    for (var i = 0; i < phrases.length; i++) {
      if (phrases[i].includes('JavaScript')) { // Verifica si la frase actual contiene la palabra "JavaScript"
        somePhraseContainsJavaScriptFor = true; // Si se encuentra una frase que contiene "JavaScript", se establece la bandera en true
        break; // Se detiene el bucle
      }
    }
    document.write(somePhraseContainsJavaScriptFor + "<br>"); // Imprime el resultado de la verificación

    // Utilizando some
    var somePhraseContainsJavaScriptSome = phrases.some(function (phrase) {
      return phrase.includes('JavaScript'); // Verifica si al menos una frase contiene la palabra "JavaScript" utilizando el método some
    });
    document.write(somePhraseContainsJavaScriptSome + "<br>"); // Imprime el resultado de la verificación

    // Utilizando for...of
    var somePhraseContainsJavaScriptForOf = false;
    for (var phrase of phrases) {
      if (phrase.includes('JavaScript')) { // Verifica si la frase actual contiene la palabra "JavaScript"
        somePhraseContainsJavaScriptForOf = true; // Si se encuentra una frase que contiene "JavaScript", se establece la bandera en true
        break; // Se detiene el bucle
      }
    }
    document.write(somePhraseContainsJavaScriptForOf + "<br>"); // Imprime el resultado de la verificación

    // Ejercicio 10: Ordenar un array de objetos alfabéticamente por el nombre

    var users = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 },
      { name: 'David', age: 28 },
    ];

    // Utilizando sort
    var sortedUsersSort = users.sort(function (a, b) {
      return a.name.localeCompare(b.name); // Ordena los objetos alfabéticamente por el nombre utilizando el método sort y la función de comparación
    });
    document.write(JSON.stringify(sortedUsersSort) + "<br>"); // Imprime el resultado de la ordenación en formato JSON
    }


/* Crea un juego de piedra, papel o tijera donde el jugador pueda competir contra el ordenador. El juego debe tener las siguientes características:
    • El jugador podrá ingresar su jugada (piedra, papel o tijera) utilizando el método prompt.
    • El ordenador elegirá su jugada de forma aleatoria.
    • Se compararán las jugadas del jugador y el ordenador para determinar el resultado:
        ◦ Si ambos jugadores eligen la misma opción, se mostrará un mensaje de empate.
        ◦ Si el jugador elige piedra y el ordenador elige papel, se mostrará un mensaje indicando que el ordenador gana y se incrementará el contador de partidas perdidas.
        ◦ Si el jugador elige piedra y el ordenador elige tijera, se mostrará un mensaje indicando que el jugador gana y se incrementará el contador de partidas ganadas.
        ◦ Si el jugador elige papel y el ordenador elige piedra, se mostrará un mensaje indicando que el jugador gana y se incrementará el contador de partidas ganadas.
        ◦ Si el jugador elige papel y el ordenador elige tijera, se mostrará un mensaje indicando que el ordenador gana y se incrementará el contador de partidas perdidas.
        ◦ Si el jugador elige tijera y el ordenador elige piedra, se mostrará un mensaje indicando que el ordenador gana y se incrementará el contador de partidas perdidas.
        ◦ Si el jugador elige tijera y el ordenador elige papel, se mostrará un mensaje indicando que el jugador gana y se incrementará el contador de partidas ganadas.
    • Después de cada partida, se mostrará un mensaje preguntando al jugador si desea jugar de nuevo. Si el jugador responde afirmativamente, se repetirá el proceso. De lo contrario, se mostrará un resumen de las partidas jugadas, partidas ganadas, partidas perdidas y partidas empatadas utilizando el método document.write.
¡Disfruta del juego de piedra, papel o tijera contra el ordenador! */

function ejercicio29(){
    var opciones = ["piedra", "papel", "tijera"];
    var jugador = prompt("Elige: piedra, papel o tijera");
    var maquina = opciones[Math.random() * 3];
    if (jugador === maquina) {
        alert("Empate");
    }
    else if (
        (jugador === "piedra" && maquina === "tijera") ||
        (jugador === "papel" && maquina === "piedra") ||
        (jugador === "tijera" && maquina === "papel") 
    ) {
        alert ("Ganaste");
    }
    else {
        alert("Perdiste");
    }
}



/*  1. Calcular la edad de una persona:
Solicitar al usuario su fecha de nacimiento.
Calcular la diferencia en años entre la fecha actual y la fecha de nacimiento.
Mostrar la edad resultante.
  2. Calcular el tiempo transcurrido desde una fecha específica:
Solicitar al usuario una fecha en el pasado.
Calcular la diferencia en días, horas, minutos y segundos entre la fecha actual y la fecha ingresada.
Mostrar el tiempo transcurrido.
  3. Obtener el día de la semana de una fecha específica:
Solicitar al usuario una fecha.
Obtener el día de la semana correspondiente a esa fecha.
Mostrar el día de la semana.
  4. Calcular la fecha de vencimiento de un plazo:
Solicitar al usuario una fecha de inicio y una duración en días.
Calcular la fecha de vencimiento sumando la duración a la fecha de inicio.
Mostrar la fecha de vencimiento.
  5. Verificar si una fecha es un día festivo:
Solicitar al usuario una fecha.
Comprobar si esa fecha corresponde a un día festivo predefinido.
Mostrar si la fecha es un día festivo o no.
  6. Calcular la diferencia de días entre dos fechas:
Solicitar al usuario dos fechas.
Calcular la diferencia en días entre las dos fechas.
Mostrar la diferencia de días.
  7. Obtener la fecha de inicio y fin de una semana específica:
Solicitar al usuario un número de semana y un año.
Calcular la fecha de inicio y fin de esa semana.
Mostrar la fecha de inicio y fin.
  8. Calcular el número de días hábiles entre dos fechas:
Solicitar al usuario una fecha de inicio y una fecha de fin.
Calcular el número de días hábiles (excluyendo fines de semana) entre las dos fechas.
Mostrar el número de días hábiles.
 9. Obtener la fecha actual en diferentes formatos:
Obtener la fecha actual.
Mostrar la fecha en formatos diferentes, como "DD/MM/AAAA", "AAAA-MM-DD", "Día de la semana, DD de Mes de AAAA", etc.
  10. Generar una secuencia de fechas:
Solicitar al usuario una fecha de inicio y una fecha de fin.
Generar una secuencia de fechas diarias entre las dos fechas.
Mostrar todas las fechas generadas. */

