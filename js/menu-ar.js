import {menuAbierto, menuCerrado, toggle_marcador} from './openclose-menu.js';
import {setMarcadorActivo} from './MarcadorActual.js';
export function toggle_flotante(){
AFRAME.registerComponent('interactivo', {
init: function () {
const entidad = this.el;
const indice = entidad.getAttribute('data-index');
const elementosInteractivos = entidad.querySelectorAll('.cliqueable');
elementosInteractivos.forEach(elemento => {
elemento.addEventListener('click', () => {setMarcadorActivo(indice);
const toggle = document.getElementById(`toggle${indice}`);
if (toggle) {const estado_menu = toggle.checked;
if (estado_menu) menuCerrado(`Menu${indice}`);
else menuAbierto(`Menu${indice}`);
toggle_marcador(`Menu${indice}`);
}});});}});}