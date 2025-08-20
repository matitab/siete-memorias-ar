// Detección marcadores / apertura de menú
import {marcadoresData} from './marcadoresData.js';
import {setMarcadorActivo } from './MarcadorActual.js';
import {mostrar_contenido} from './mostrarContenido.js';
export const DetectarMarcador = () => {
const getNombre = document.getElementById("nombre-persona");
[0, 1, 2].forEach(indice => {
const marcador = document.querySelector(`[mindar-image-target="targetIndex: ${indice}"]`);
if (marcador) {
marcador.addEventListener("targetFound", async() => {
setMarcadorActivo(indice);
getNombre.innerHTML = `<p>${marcadoresData[indice].nombre}</p>`;
});
marcador.addEventListener("targetLost", () => {
});}});
document.querySelectorAll(".nav-item").forEach(boton => {
boton.addEventListener("click", async () => {
const opcion = boton.textContent.trim();
mostrar_contenido(opcion, boton);
});});};