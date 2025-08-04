/* Abre menú */
export function menuAbierto(menuId) {
const menu = document.getElementById(menuId);
const nav = document.querySelector(`#${menuId} .nav`);
const dummyContent = document.querySelector(`#${menuId} .dummy-content`);
const nombre = document.getElementById("nombre-persona");
if (menu && nav && dummyContent) {
menu.classList.add("menu-abierto");
menu.classList.remove("menu-cerrado");
nav.style.opacity = "1";
nav.style.transform = "translateY(0)";
nav.style.pointerEvents = "auto";
nav.style.visibility = "visible";
dummyContent.style.opacity = "1";
dummyContent.style.transform = "translateY(0)";
dummyContent.style.pointerEvents = "auto";
dummyContent.style.visibility = "visible";
nombre.style.visibility = "visible";
}}
/* Cierra menú */
export function menuCerrado(menuId) {
const menu = document.getElementById(menuId);
const nav = document.querySelector(`#${menuId} .nav`);
const dummyContent = document.querySelector(`#${menuId} .dummy-content`);
const nombre = document.getElementById("nombre-persona");
if (menu && nav && dummyContent) {
menu.classList.remove("menu-abierto");    
menu.classList.add("menu-cerrado");
nombre.style.visibility = "hidden";
}}
