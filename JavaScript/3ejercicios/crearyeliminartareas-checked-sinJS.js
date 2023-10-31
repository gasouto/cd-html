function agregarTarea(){
    let lista = document.getElementById("lista-pendientes");
    var tarea = document.createElement("li"); //crea un elemento de HTML
    var inputTarea = document.getElementById("tarea");
    tarea.appendChild(document.createTextNode(inputTarea.value));
    lista.appendChild(tarea);
  }