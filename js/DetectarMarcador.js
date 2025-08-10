// Detección marcadores / apertura de menú
import {marcadoresData} from './marcadoresData.js';
import {menuCerrado} from './openclose-menu.js';
import {setMarcadorActivo } from './MarcadorActual.js';
import {mostrar_contenido} from './mostrarContenido.js';
export const DetectarMarcador = () => {
const getNombre = document.getElementById("nombre-persona");
const toggle = document.getElementById("toggle");
[0, 1, 2].forEach(idx => {
const marcador = document.querySelector(`[mindar-image-target="targetIndex: ${idx}"]`);
if (marcador) {
marcador.addEventListener("targetFound", () => {
setMarcadorActivo(idx);
getNombre.innerHTML = `<p>${marcadoresData[idx].nombre}</p>`;
menuCerrado("Menu");
});
marcador.addEventListener("targetLost", () => {
});}});
document.querySelectorAll(".nav-item").forEach(boton => {
boton.addEventListener("click", async () => {
const opcion = boton.textContent.trim();
mostrar_contenido(opcion, boton);
});});
};