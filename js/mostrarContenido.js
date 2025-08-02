/* Contenido que se mostrará en pantalla */
import {marcadoresData} from './marcadoresData.js';
let marcadorActivo = 0; //Marcador por defecto
export function mostrarContenido(opc, element) {
const contenido = document.getElementById("menu-content");
document.querySelectorAll(".nav-item").forEach(boton => boton.classList.remove("cliqueado"));
if (element) element.classList.add("cliqueado");
if (!contenido) return;
const data = marcadoresData[marcadorActivo];
let contenido_mostrado = "";
switch (opc) {
case "Info":
contenido_mostrado = `<p>${data.info}</p>`;
break;
case "Historia":
contenido_mostrado = `<p>${data.historia}</p>`;
break;
case "Imágenes":
contenido_mostrado = `<img src="${data.imagen}" style="width: 100%; height: auto; border-radius: .2em; display: block;">`;
break;
case "Video":
contenido_mostrado = `<video src="${data.video}" controls style="width: 100%; max-width: auto; height: auto; border-radius: .2em;"></video>`;
break;
default:
contenido_mostrado = "<p>Selecciona una opción del menú</p>";
}
contenido.innerHTML = contenido_mostrado;
}
