/* Contenido que se mostrará en pantalla */
import {getMarcadorActivo} from './MarcadorActual.js';
import {marcadoresData} from './marcadoresData.js';
export function mostrar_contenido(opc) {
const marcadorActivo = getMarcadorActivo();
const contenido = document.getElementById(`menu-content${marcadorActivo}`);
const data = marcadoresData[marcadorActivo];
let contenido_mostrado = "";
switch (opc) {
case 0:
contenido_mostrado = `
  <a href="${data.img1}" data-lightbox="galeria1" data-title="${data.descripcion1}">
    <img src="${data.img1}" style="width: 100%; height: auto; border-radius: .2em; display: block;">
  </a>
  <p>${data.bio1}</p> 
  <video src="${data.video2}" controls style="width: 100%; height: auto; border-radius: .2em; display: block;"></video>
  <p>${data.bio2}</p> 
  <video src="${data.video7}" controls style="width: 100%; height: auto; border-radius: .2em; display: block;"></video>
  <p>${data.bio3}</p>
  <video src="${data.video1}" controls style="width: 100%; height: auto; border-radius: .2em; display: block;"></video>
  <p>${data.bio4}</p>
  <video src="${data.video6}" controls style="width: 100%; height: auto; border-radius: .2em; display: block;"></video>
  <p></p>
  <a href="${data.img2}" data-lightbox="galeria1" data-title="${data.descripcion2}">
    <img src="${data.img2}" style="width: 100%; height: auto; border-radius: .2em; display: block;">
  </a>
  <p>${data.bio5}</p>
  <video src="${data.video8}" controls style="width: 100%; height: auto; border-radius: .2em; display: block;"></video>
  <p>${data.bio6}</p>
  <a href="${data.img3}" data-lightbox="galeria1" data-title="${data.descripcion3}">
    <img src="${data.img3}" style="width: 100%; height: auto; border-radius: .2em; display: block;">
  </a>
  `;
break;
case 1:
  contenido_mostrado = `
  '''
  completar
  '''
`;
break;
case 2:
  contenido_mostrado = `
  '''
  completar
  '''
`;
break;
}
contenido.innerHTML = contenido_mostrado;
}



