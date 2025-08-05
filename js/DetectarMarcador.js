// Detección marcadores / apertura de menú
import {menuAbierto, menuCerrado} from './openclose-menu.js';
import {marcadoresData} from './marcadores-data.js';
export function DetectarMarcador() {
let marcadorActivo = 0;
const getNombre = document.getElementById("nombre-persona");
const toggle = document.getElementById("toggle");
const toggleButtonMenu = document.querySelector("#Menu .button-toggle");
[0, 1, 2].forEach(idx => {
const marcador = document.querySelector(`[mindar-image-target="targetIndex: ${idx}"]`);
if (marcador) {
marcador.addEventListener("targetFound", () => {
marcadorActivo = idx;
getNombre.innerHTML = `<p>${marcadoresData[idx].nombre}</p>`;
menuAbierto("Menu");
toggle.checked = true;
});
marcador.addEventListener("targetLost", () => {
});}});
toggleButtonMenu.addEventListener("click", () => {
toggle.checked = !toggle.checked;
if (toggle.checked) {
menuAbierto("Menu");
} else {
menuCerrado("Menu");
}})};
