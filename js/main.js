/* Motor del programa */
import {ContadorMarcadores} from './contador.js';
import {DetectarMarcador} from './DetectarMarcador.js';
import {arranque} from './arranque.js';
import { fullscreen } from './fullscreen.js';
fullscreen();
arranque();
ContadorMarcadores();
document.querySelectorAll(".nav-item").forEach(boton => {
boton.addEventListener("click", async () => {
const opcion = boton.textContent.trim();
const {mostrarContenido} = await import('./mostrarContenido.js');
mostrarContenido(opcion, boton);
});});
DetectarMarcador();
