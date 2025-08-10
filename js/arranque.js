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
boton.style.pointerEvents = "auto";
// Botón "Empezar recorrido" aparece recién al cargar la escena AR
loader.addEventListener("transitionend", () => {
loader.style.display = "none";
}, { once: true });
pantalla.classList.remove("fade-out");
});
// Al clickearlo, activa MindAR y oculta la pantalla de carga
boton.addEventListener('click', async() => {
boton.style.display = "none"; //para que no sea clickeable de nuevo
const {DetectarMarcador} = await import('./DetectarMarcador.js');
DetectarMarcador();
pantalla.classList.add('fade-out');
background.classList.add('fade-out');
pantalla.addEventListener('transitionend', () => {
escena.components['mindar-image'].start();
}, { once: true });
const {menuAbierto, menuCerrado} = await import('./openclose-menu.js');
const toggleButtonMenu = document.querySelector("#Menu .button-toggle");
toggleButtonMenu.addEventListener("click", () => {
const toggle = document.getElementById("toggle");
toggle.checked = !toggle.checked;
if (toggle.checked) {
menuAbierto("Menu");
} else {
menuCerrado("Menu");
}});
}); 
}
