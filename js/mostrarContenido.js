/* Contenido que se mostrará en pantalla */
import {getMarcadorActivo} from './MarcadorActual.js';
import {marcadoresData} from './marcadoresData.js';
export function mostrar_contenido(opc, element) {
const marcadorActivo = getMarcadorActivo();
const contenido = document.getElementById(`menu-content${marcadorActivo}`);
const menuActivo = document.getElementById(`Menu${marcadorActivo}`);
if (menuActivo) menuActivo.querySelectorAll(".nav-item").forEach(boton => boton.classList.remove("cliqueado"));
if (element) element.classList.add("cliqueado");
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
contenido_mostrado = `<video src="${data.video}" controls style="width: 100%; height: auto; border-radius: .2em; display: block;"></video>`;
break;
default:
contenido_mostrado = "<p>Selecciona una opción del menú</p>";
}
contenido.innerHTML = contenido_mostrado;
}