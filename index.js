
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
    let div4= document.getElementById("resultado");
    div4.style.display = "none";
}

//id=explicacion
function volverInicio(){

    let div = document.getElementById("presentacion");
    div.style.display = "block";
    let div2 = document.getElementById("explicacion");
    div2.style.display = "none";
    let div3 = document.getElementById("cifrado");
    div3.style.display = "none";
    let div4= document.getElementById("resultado");
    div4.style.display = "none";

}

//id=cifrado
function comenzarApp(){
    let div = document.getElementById("presentacion");
    div.style.display = "none";
    let div2 = document.getElementById("explicacion");
    div2.style.display = "none";
    let div3 = document.getElementById("cifrado");
    div3.style.display = "block";  
    let div4= document.getElementById("resultado");
    div4.style.display = "block";
}

//id=resultado
function resultado (){
    let div = document.getElementById("presentacion");
    div.style.display = "none";
    let div2 = document.getElementById("explicacion");
    div2.style.display = "none";
    let div3 = document.getElementById("cifrado");
    div3.style.display = "block";  
    let div4= document.getElementById("resultado");
    div4.style.display = "block";
}


function cifrar() {
    let password=document.getElementById("pass").value;
    let offset=document.getElementById("day").value;
    let result =window.cipher.encode(offset,password);
    document.getElementById("box").value = result;

}

function descifrar() {
    let password=document.getElementById("pass").value;
    let offset=document.getElementById("day").value;
    let result =window.cipher.decode(offset,password);
    document.getElementById("box").value = result;
}


