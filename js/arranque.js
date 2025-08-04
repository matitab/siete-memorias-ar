/* Carga la escena AR*/
export function arranque() {
const loader = document.getElementById("mi-loader");
const boton = document.getElementById("boton-comenzar");
const pantalla = document.getElementById("pantalla-carga");
const background = document.getElementById("img-fondo");
const escena = document.querySelector("a-scene");
escena.addEventListener("renderstart", () => {
pantalla.style.display = "flex";
background.style.display = "block";
loader.classList.add("fade-out-loader");
boton.classList.add("fade-in");
boton.addEventListener("transitionend", () => {
boton.style.pointerEvents = "auto";
}, { once: true });
// Botón "Empezar recorrido" aparece recién al cargar la escena AR
loader.addEventListener("transitionend", () => {
loader.style.display = "none";
}, { once: true });
pantalla.classList.remove("fade-out");
});
// Al clickearlo, activa MindAR y oculta la pantalla de carga
boton.addEventListener('click', () => {
pantalla.classList.add('fade-out');
background.classList.add('fade-out');
pantalla.addEventListener('transitionend', () => {
pantalla.style.display = 'none';
background.style.display = 'none';
escena.components['mindar-image'].start();
}, { once: true });});}
