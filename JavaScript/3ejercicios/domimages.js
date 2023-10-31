function cambiarImagen(){
    var imagen = document.getElementById("miImagen");
    if (imagen.getAttribute("src") == "img1.jpg"){
        imagen.setAttribute("src", "img2.jpg");
    }
    else{
        imagen.setAttribute("src", "img1.jpg");
    }
}
