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
  <iframe class="short" loading="lazy"
  src="${data.video2}"
  title="YouTube"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
  </iframe>
  <p>${data.bio2}</p> 
   <iframe class="short" loading="lazy"
  src="${data.video7}"
  title="YouTube"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
  </iframe>
  <p>${data.bio3}</p>
  <iframe class="short" loading="lazy"
  src="${data.video1}"
  title="YouTube"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
  </iframe>
  <p>${data.bio4}</p>
  <iframe class="short" loading="lazy"
  src="${data.video6}"
  title="YouTube"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
  </iframe>
  <p></p>
  <a href="${data.img2}" data-lightbox="galeria1" data-title="${data.descripcion2}">
    <img src="${data.img2}" style="width: 100%; height: auto; border-radius: .2em; display: block;">
  </a>
  <p>${data.bio5}</p>
    <iframe class="short" loading="lazy"
  src="${data.video8}"
  title="YouTube"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
  </iframe>
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



