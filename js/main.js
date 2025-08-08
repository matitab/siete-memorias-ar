/* Motor del programa */
import {arranque} from './arranque.js';
import { fullscreen } from './fullscreen.js';
fullscreen();
arranque();
document.querySelectorAll(".nav-item").forEach(boton => {
boton.addEventListener("click", async () => {
const opcion = boton.textContent.trim();
const {mostrarContenido} = await import('./mostrarContenido.js');
mostrarContenido(opcion, boton);
});});

