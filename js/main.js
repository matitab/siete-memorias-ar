/* Motor del programa */
import {ContadorMarcadores} from './contador.js';
import {DetectarMarcador} from './DetectarMarcador.js';
import {arranque} from './arranque.js';
import {mostrarContenido} from './mostrarContenido.js';
import { fullscreen } from './fullscreen.js';
fullscreen();
arranque();
ContadorMarcadores();
document.querySelectorAll(".nav-item").forEach(boton => {
boton.addEventListener("click", () => {
const opcion = boton.textContent.trim();
mostrarContenido(opcion, boton);
});});
DetectarMarcador();
