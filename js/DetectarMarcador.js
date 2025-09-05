// Detección marcadores / apertura de menú
import {marcadoresData} from './marcadoresData.js';
import {setMarcadorActivo } from './MarcadorActual.js';
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
});}});};