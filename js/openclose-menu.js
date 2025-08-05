/* Abre menú */
export function menuAbierto(menuId) {
const menu = document.getElementById(menuId);
const nav = document.querySelector(`#${menuId} .nav`);
const dummyContent = document.querySelector(`#${menuId} #menu-content`);
const nombre = document.getElementById("nombre-persona");
if (menu && nav && dummyContent) {
menu.classList.add("menu-abierto");
menu.classList.remove("menu-cerrado");
nav.classList.add("nav-abierto");
nombre.classList.add("nombre-abierto")
}}
/* Cierra menú */
export function menuCerrado(menuId) {
const menu = document.getElementById(menuId);
const nav = document.querySelector(`#${menuId} .nav`);
const dummyContent = document.querySelector(`#${menuId} #menu-content`);
const nombre = document.getElementById("nombre-persona");
if (menu && nav && dummyContent) {
menu.classList.remove("menu-abierto");    
menu.classList.add("menu-cerrado");
nav.classList.remove("nav-abierto");
nombre.classList.remove("nombre-abierto");
}}
