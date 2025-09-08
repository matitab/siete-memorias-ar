/* Contenido que se mostrará en pantalla */
import {getMarcadorActivo} from './MarcadorActual.js';
import {marcadoresData} from './marcadoresData.js';
export function mostrar_contenido(opc) {
const marcadorActivo = getMarcadorActivo();
const contenido = document.getElementById(`menu-content${marcadorActivo}`);
const data = marcadoresData[marcadorActivo];
let contenido_mostrado = "";
switch (opc) {
case "botón temporal":
contenido_mostrado = `
  <p>${data.info}</p> <p>${data.historia}</p>
  <a href="${data.imagen}" data-lightbox="galeria${marcadorActivo}" data-title="${data.titulo}">
    <img src="${data.imagen}" style="width: 100%; height: auto; border-radius: .2em; display: block;">
  </a>
  <p> Video de prueba </p>
  <video src="${data.video}" controls style="width: 100%; height: auto; border-radius: .2em; display: block;"></video>
  `;
break;
}
contenido.innerHTML = contenido_mostrado;
}
