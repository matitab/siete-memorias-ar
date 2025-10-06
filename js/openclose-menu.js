import { marcadoresData } from './marcadoresData.js';
import { mostrar_contenido } from './mostrarContenido.js';
const marcador = [0, 1, 2]; //cantidad de marcadores (por ahora 3)
/*Obtiene el índice del menú*/
function getINDICE(menuId) {
return parseInt(menuId.replace("Menu", "")); //reemplaza la palabra Menu por texto vacío y la convierte a entero para obtener el Id
}
/*Sube la posición del menú para que no se superpongan los clicks*/
function elevarZDe(indice) {
marcador.forEach(i => {
const menu = document.getElementById(`Menu${i}`);
if (i === indice) menu.style.zIndex = '1000'; //deja el menú actual arriba
else menu.style.zIndex = '1';  //baja los demás
});}
/* Abre menú */
export function menuAbierto(menuId) {
// Cierra los otros menú
marcador.forEach(i => {
const otro = `Menu${i}`;
if (otro !== menuId) menuCerrado(otro);});
const menu = document.getElementById(menuId);
const idx = getINDICE(menuId);
const nav = menu.querySelector('.nav');
const nombre = menu.querySelector(`#nombre-persona${idx}`);
const toggle = document.getElementById(`toggle${idx}`);
const data = marcadoresData[idx];
menu.classList.add("menu-abierto");
menu.classList.remove("menu-cerrado");
nav.classList.add("nav-abierto");
nav.classList.remove("nav-cerrado");
mostrar_contenido(idx); 
if (nombre && data) nombre.innerHTML = `<p>${data.nombre}</p>`;
if (toggle) toggle.checked = true;
elevarZDe(idx);
}
/* Cierra menú */
export function menuCerrado(menuId) {
const menu = document.getElementById(menuId);
const idx = getINDICE(menuId);
const nav = menu.querySelector('.nav');
const toggle = document.getElementById(`toggle${idx}`);
menu.classList.remove("menu-abierto");
menu.classList.add("menu-cerrado");
nav.classList.add("nav-cerrado");
nav.classList.remove("nav-abierto");
const video = menu.querySelector("video");
if (video) video.pause();
if (toggle) toggle.checked = false;
}
/* maneja click toggle flotante (pill) */
export function toggle_marcador(menuIndex) {
const menuId = `Menu${menuIndex}`;
const toggle = document.getElementById(`toggle${menuIndex}`);
if (toggle.checked) menuAbierto(menuId);
else menuCerrado(menuId);
}
/* Configura los botones toggle propios de los menú*/
export function toggle_menu() {
marcador.forEach(indice => {
const toggleButton = document.querySelector(`#Menu${indice} .button-toggle`);
toggleButton.addEventListener("click", () => {
const toggle = document.getElementById(`toggle${indice}`);
const menuId = `Menu${indice}`;
toggle.checked = !toggle.checked;
if (toggle.checked) menuAbierto(menuId);
else menuCerrado(menuId);
});});}