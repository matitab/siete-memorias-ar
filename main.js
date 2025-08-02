import {ContadorMarcadores} from './contador.js';
import {DetectarMarcador} from './DetectarMarcador.js';
import {arranque} from './arranque.js';
import {mostrarContenido} from './mostrarContenido.js';
document.addEventListener("DOMContentLoaded",()=>{
arranque();
ContadorMarcadores();
document.querySelectorAll(".nav-item").forEach(boton => {
boton.addEventListener("click", () => {
const opcion = boton.textContent.trim();
mostrarContenido(opcion, boton);
});});
DetectarMarcador();
});