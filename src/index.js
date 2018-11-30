
//window onload carga primero todo el DOM 
/* Acá va tu código 
DOM JS interactúa directamente con el html
Document Object Model*/

//window.cipher;
//let password = document.getElementById("cajaInput").value;
// document.getElementById es para llamar a la caja del html
// mientras que el .value toma el valor que el usuario le da en html y se ocupa en el JS
//let offset = document.getElementById("cajaOffset").value

//id=presentacion
function obtenerExplicacion() {
    
    let div = document.getElementById("presentacion");
    div.style.display = "none";
    let div2 = document.getElementById("explicacion");
    div2.style.display = "block";
    let div3 = document.getElementById("cifrado");
    div3.style.display = "none";
}

//id=explicacion
function volverInicio(){

    let div = document.getElementById("presentacion");
    div.style.display = "block";
    let div2 = document.getElementById("explicacion");
    div2.style.display = "none";
    let div3 = document.getElementById("cifrado");
    div3.style.display = "none";

}

//id=cifrado
function comenzarApp(){
    let div = document.getElementById("presentacion");
    div.style.display = "none";
    let div2 = document.getElementById("explicacion");
    div2.style.display = "none";
    let div3 = document.getElementById("cifrado");
    div3.style.display = "block";  
}



function cifrar() {
    let contraseña=document.getElementById("pass").value;
    let desplazamiento=document.getElementById("desp").value;
    cipher.encode(desplazamiento,contraseña);
}

function descifrar() {
    let contraseña=document.getElementById("pass").value;
    let desplazamiento=document.getElementById("desp").value;
    cipher.decode(desplazamiento,contraseña);
}
