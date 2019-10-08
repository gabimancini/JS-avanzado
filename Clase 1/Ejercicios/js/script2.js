 //MANIPULACION DE CONTENIDO Cambiar título por "titulo creadodesde JS "
 var titulo = document.querySelector("h1");
 /* MANIPULACION DE ESTRUCTURA */
 titulo.innerHTML="Título creado desde <a href='#'>JS</a>"; 
 //titulo.style.backgroundColor = "lightblue";
 //titulo.style.color = "white"; 
 titulo.classList.add("azul");
/* Cambiar la estetica mediante propiedades CSS  .style */
/* Cambiar la estetica mediante asignacion/remocion de clases */
/* Crear nuevo párrafo createElement() */
var parrafo = document.createElement("p");
parrafo.innerText = "Lorem  Ipsum";
//parrafo.style.color = "#ccc";
parrafo.classList.add("texto");
parrafo.id = "nuevo";
document.body.appendChild(parrafo);
 