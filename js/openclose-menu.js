/* Abre menú */
export function menuAbierto(menuId) {
const menu = document.getElementById(menuId);
const nav = document.querySelector(`#${menuId} .nav`);
const dummyContent = document.querySelector(`#${menuId} .dummy-content`);
const nombre = document.getElementById("nombre-persona");
if (menu && nav && dummyContent) {
menu.style.display = "block";
menu.style.width = "18.75rem";
menu.style.height = "32.125rem";
menu.style.padding = "1.875rem";
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
menu.style.width = "2.5rem";
menu.style.height = "2.5rem";
menu.style.padding = "0.3rem";
nombre.style.visibility = "hidden";
}}
