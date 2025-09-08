/* Carga la escena AR*/
export function arranque() {
const loader = document.getElementById("mi-loader");
const boton = document.getElementById("boton-comenzar");
const pantalla = document.getElementById("pantalla-carga");
const background = document.getElementById("img-fondo");
const escena = document.querySelector("a-scene");
escena.addEventListener("renderstart", async() => {
loader.classList.add("fade-out-loader");
loader.addEventListener("transitionend", () => {
loader.style.display = "none";
}, { once: true });
// Botón "Empezar recorrido" aparece recién al cargar la escena AR
boton.classList.add("fade-in");
boton.style.pointerEvents = "auto";
pantalla.classList.remove("fade-out");
});
// Al clickearlo, activa MindAR y oculta la pantalla de carga
boton.addEventListener('click', async() => {
boton.style.display = "none"; //para que no sea clickeable de nuevo
pantalla.classList.add('fade-out');
background.classList.add('fade-out');
pantalla.addEventListener('transitionend', async () => {
const {ContadorMarcadores} = await import('./contador.js');
const {toggle_menu} = await import('./openclose-menu.js');    
ContadorMarcadores();
toggle_menu();
escena.components['mindar-image'].start();
}, { once: true });
});}
