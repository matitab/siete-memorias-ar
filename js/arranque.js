/* Carga la escena AR*/
export function arranque() {
const loader = document.getElementById("mi-loader");
const boton = document.getElementById("boton-comenzar");
const pantalla = document.getElementById("pantalla-carga");
const background = document.getElementById("img-fondo");
const escena = document.querySelector("a-scene");
escena.addEventListener("renderstart", () => {
loader.classList.add("fade-out-loader");
loader.addEventListener("transitionend", () => {
}, { once: true });
pantalla.classList.remove("fade-out");});
// Botón "Empezar recorrido" activa MindAR y oculta la pantalla de carga
boton.addEventListener('click', () => {
pantalla.classList.add('fade-out');
background.classList.add('fade-out');
pantalla.addEventListener('transitionend', () => {
}, {once: true});
escena.components['mindar-image'].start();});}
