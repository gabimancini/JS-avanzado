 // El navegador lee las funciones sin tener
 // en cuenta el evento
 var btn = document.querySelector("button");
 //btn.onclick = alert("hola");

 // addEventListener nos permite llevar un registro
 //de repuestas del mismo evento.
 btn.addEventListener("click", hola);
 function hola(){
     alert("hola");
     document.body.style.backgroundColor = "orange";
 }
 var a = document.querySelector("a");
 a.addEventListener("click",function(e){
     e.preventDefault();
    console.log("Hola, Mundo"); 
 });
 // Múltiples elementos
 var p = document.querySelectorAll("p");
 p/addEventListener("click", function(e){
e.target.style.color = "100px";
 })
 btn.addEventListener("click", hola);
 p.addEventListener("click", hola)