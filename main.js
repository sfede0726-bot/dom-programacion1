

//crear una variable que identifique a mi div de ID "contenedor"
let contenedor = document.getElementById("contenedor");
contenedor.classList.add("contenedorinicial")


//creamos una etiqueta desde el js de tipo "h1"
let titulo = document.createElement("h1");

//le damos un contenido o texto
titulo.textContent = "Actividad 1 - DOM";

// .appenChild permite agregar el titulo dentro del contenedor
contenedor.appendChild(titulo);

let subtitulo = document.createElement("h2");
subtitulo.textContent = "Programacion I"

contenedor.appendChild(subtitulo);

//tabla
let tabla = document.createElement("tabla");
tabla.classList.add("tabla")

//encabezado
let header = document.createElement("thead");
//fila encabezado
let filaEncabezado = document.createElement("tr");
//columnas
let th1 = document.createElement("th"); //columa 1
th1.textContent = "titulo";

let th2 = document.createElement("th"); //columna 2
th2.textContent = "año";

filaEncabezado.appendChild(th1); //agregamos columna 1
filaEncabezado.appendChild(th2); //agregamos columna 2
header.appendChild(filaEncabezado);
tabla.appendChild(header);

//cuerpo
let body = document.createElement("tbody");

let filaBody1 = document.createElement("tr"); //

let td1 = document.createElement("td");
td1.textContent = "Harry potter";

let td2 = document.createElement("tr");
td2.textContent = "2001";

filaBody1.appendChild(td1);
filaBody1.appendChild(td2);
body.appendChild(filaBody1);

//2da fila del cuerpo de la tabla
let filaBody2 = document.createElement("tr");

let td3 = document.createElement("td");
td3.textContent = "Robots";

let td4 = document.createElement("td");
td4.textContent = "2005";

filaBody2.appendChild(td3);
filaBody2.append(td4);
body.appendChild(filaBody2);

//fin cuerpo
tabla.appendChild(body);

contenedor.appendChild(tabla);

