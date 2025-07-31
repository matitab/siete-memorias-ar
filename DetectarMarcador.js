// Detección marcadores / apertura de menú
let marcadorActivo = 0; 
import {menuAbierto, menuCerrado} from './openclose-menu.js';

export function DetectarMarcador() {
const menuGeneral = document.getElementById("Menu");
const contenido = document.getElementById("menu-content");
const getNombre = document.getElementById("nombre-persona");
const toggle = document.getElementById("toggle");
const toggleButtonMenu = document.querySelector("#Menu .button-toggle");
[0, 1, 2].forEach(idx => {
const marcador = document.querySelector(`[mindar-image-target="targetIndex: ${idx}"]`);
if (marcador) {
marcador.addEventListener("targetFound", () => {
marcadorActivo = idx;
getNombre.innerHTML = `<p>${marcadoresData[idx].nombre}</p>`;
menuGeneral.style.display = "block";
contenido.style.display = "block";
menuAbierto("Menu");
toggle.checked = true;
});
marcador.addEventListener("targetLost", () => {
});}});
toggleButtonMenu.addEventListener("click", () => {
toggle.checked = !toggle.checked;
if (toggle.checked) {
menuGeneral.style.display = "block";
contenido.style.display = "block";
menuAbierto("Menu");
} else {
menuCerrado("Menu");
contenido.style.display = "none";
}})
}