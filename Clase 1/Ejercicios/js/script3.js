//Almaceno en variables los elementos del documentos 
var parrafo = document.querySelector("p");
var button = document.querySelector("button");
// Le indico que cuando escuche un evento llame a una función.
button.addEventListener("click", cambiarParrafo);
//Function cambiarParrafo(){todos los cambios del párrafo}
function cambiarParrafo(){
    parrafo.innerText = "Muy bien!!";
    parrafo.classList.toggle("texto");
}