import {marcadoresData} from './marcadoresData.js';
/* Abre menú */
export function menuAbierto(menuId) {
const menu = document.getElementById(menuId);
const nav = menu.querySelector('.nav');
const dummyContent = menu.querySelector(`#menu-content${menuId.slice(-1)}`);
const nombre = menu.querySelector(`#nombre-persona${menuId.slice(-1)}`); 
const data = marcadoresData[menuId.slice(-1)];
const toggle = document.getElementById(`toggle${menuId.slice(-1)}`);
if (menu && nav && dummyContent && nombre) {
menu.classList.add("menu-abierto");
menu.classList.remove("menu-cerrado");
nav.classList.add("nav-abierto");
nav.classList.remove("nav-cerrado");
nombre.classList.add("nombre-abierto");
nombre.innerHTML = `<p>${data.nombre}</p>`;
if (toggle) toggle.checked = true;}}
/* Cierra menú */
export function menuCerrado(menuId) {
const menu = document.getElementById(menuId);
const nav = menu.querySelector('.nav');
const dummyContent = menu.querySelector(`#menu-content${menuId.slice(-1)}`);
const nombre = menu.querySelector(`#nombre-persona${menuId.slice(-1)}`);
  const toggle = document.getElementById(`toggle${menuId.slice(-1)}`);
if (menu && nav && dummyContent && nombre) {
menu.classList.remove("menu-abierto");
menu.classList.add("menu-cerrado");
nav.classList.add("nav-cerrado");
nav.classList.remove("nav-abierto");
nombre.classList.remove("nombre-abierto");
dummyContent.innerHTML = "Selecciona una opción del menú";
if (toggle) toggle.checked = false;
// Descliquea los botones del menú
menu.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("cliqueado"));}}
// Alterna el estado del menú
export function toggle_marcador(menuIndex) {
const toggle = document.getElementById(`toggle${menuIndex}`);
const menuId = `Menu${menuIndex}`;
if (toggle) {
if (toggle.checked) menuAbierto(menuId);
else menuCerrado(menuId);}}
export function toggle_menu() {
[0, 1, 2].forEach(indice => {
const toggleButton = document.querySelector(`#Menu${indice} .button-toggle`);
const toggle = document.getElementById(`toggle${indice}`);
toggleButton.addEventListener("click", () => {
toggle.checked = !toggle.checked;
if (toggle.checked) menuAbierto(`Menu${indice}`);
else menuCerrado(`Menu${indice}`);});
const menu = document.getElementById(`Menu${indice}`);
const items = menu.querySelectorAll('.nav-item');
items.forEach(boton => {
boton.addEventListener("click", async () => {
const opcion = boton.textContent.trim();
const {setMarcadorActivo} = await import('./MarcadorActual.js');
const {mostrar_contenido} = await import('./mostrarContenido.js');
setMarcadorActivo(indice);
mostrar_contenido(opcion, boton);
});});});}
