
//window onload =() =>{
//carga primero todo el DOM 
/* Acá va tu código 
DOM JS interactúa directamente con el html
Document Object Model*/

//window.cipher;
//let password = document.getElementById("cajaInput").value;
// document.getElementById es para llamar a la caja del html
// mientras que el .value toma el valor que el usuario le da en html y se ocupa en el JS
//let offset = document.getElementById("cajaOffset").value

//id=presentacion
document.getElementById("boton2").addEventListener("click", obtenerExplicacion);
document.getElementById("boton7").addEventListener("click", obtenerExplicacion);
document.getElementById("boton4").addEventListener("click", volverInicio);
document.getElementById("boton8").addEventListener("click", volverInicio);
document.getElementById("boton1").addEventListener("click", comenzarApp);
document.getElementById("boton3").addEventListener("click", comenzarApp);
document.getElementById("boton5").addEventListener("click", cifrar);
document.getElementById("boton6").addEventListener("click", descifrar);
document.getElementById("boton9").addEventListener("click", refrescarPagina);
document.getElementById("resultado").addEventListener("click", resultado);

let frase= document.getElementById("recordatorio1");

//explicacion
function obtenerExplicacion() {
    frase.style.display="none";
    let div = document.getElementById("presentacion");
    div.style.display = "none";
    let div2 = document.getElementById("explicacion");
    div2.style.display = "block";
    let div3 = document.getElementById("cifrado");
    div3.style.display = "none";
    let div4= document.getElementById("resultado");
    div4.style.display = "none";
}  


function volverInicio(){
    location.reload();
    //frase.style.display="none";
    //let div = document.getElementById("presentacion");
    //div.style.display = "block";
    //let div2 = document.getElementById("explicacion");
    //div2.style.display = "none";
    //let div3 = document.getElementById("cifrado");
    //div3.style.display = "none";
    //let div4= document.getElementById("resultado");
    //div4.style.display = "none";

}

//id=cifrado
function comenzarApp(){
    frase.style.display="block";
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

//Endode y Decode 
function cifrar() {
    let password=document.getElementById("pass").value;
    let offset=document.getElementById("day").value;
    let result =window.cipher.encode(password,offset);
    document.getElementById("box").value = result;

}

function descifrar() {
    let password=document.getElementById("pass").value;
    let offset=document.getElementById("day").value;
    let result =window.cipher.decode(password,offset);
    document.getElementById("box").value=result;
}

//Refrescar o Limpiar página
function refrescarPagina(){
    document.getElementById("pass").value = "";
    document.getElementById("box").value = "";
    document.getElementById("day").value = "";
}

