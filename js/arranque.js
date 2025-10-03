/* Carga la escena AR*/
export function arranque() {
const boton = document.getElementById("boton-comenzar");
const pantalla = document.getElementById("pantalla-carga");
const escena = document.getElementById("escena");
escena.style.display = "none";
const info = `<a-scene mindar-image="imageTargetSrc: targets.mind; maxTrack: 3; uiLoading:no; uiScanning:no" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
  <!-- Cámara-->
  <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="objects: .cliqueable; far: 10000"></a-camera>
  <!-- Marcador 0 -->
  <a-entity mindar-image-target="targetIndex: 0" interactivo data-index="0">
    <a-box position="0 0.3 0.1" color="#ffbb6e" depth="0.1" height="0.1" width=".6"></a-box>
      <a-text value="¿Quien fue?" color="black" align="center" position="0 0.3 0.16" width="1.5" font="https://cdn.aframe.io/fonts/Aileron-Semibold.fnt"> </a-text>
    <a-cylinder class="cliqueable" position="0 0 0.20" rotation="90 0 0"  color="#ffbb6e" height=".05" radius=".15"></a-cylinder>
      <a-image class="cliqueable" src="assets/TOGGLE-YG.png" position="0 0 0.26" width="0.2" height="0.2"></a-image>
  </a-entity>
  <!-- Marcador 1 -->
  <a-entity mindar-image-target="targetIndex: 1" interactivo data-index="1">
    <a-box position="0 0.3 0.1" color="#ffbb6e" depth="0.1" height="0.1" width=".6"></a-box>
      <a-text value="¿Como murio?" color="black" align="center" position="0 0.3 0.16" width="1.5" font="https://cdn.aframe.io/fonts/Aileron-Semibold.fnt"> </a-text>
    <a-cylinder class="cliqueable" position="0 0 0.20" rotation="90 0 0"  color="#ffbb6e" height=".05" radius=".15"></a-cylinder>
      <a-image class="cliqueable" src="assets/TOGGLE-YG.png" position="0 0 0.26" width="0.2" height="0.2"></a-image>
  </a-entity>
  <!-- Marcador 2 -->
  <a-entity mindar-image-target="targetIndex: 2" interactivo data-index="2">
    <a-box position="0 0.3 0.1" color="#ffbb6e" depth="0.1" height="0.1" width="1"></a-box>
      <a-text value="Presencia actual / Memoria" color="black" align="center" position="0 0.3 0.16" width="1.5" font="https://cdn.aframe.io/fonts/Aileron-Semibold.fnt"> </a-text>
    <a-cylinder class="cliqueable" position="0 0 0.20" rotation="90 0 0"  color="#ffbb6e" height=".05" radius=".15"></a-cylinder>
      <a-image class="cliqueable" src="assets/TOGGLE-YG.png" position="0 0 0.26" width="0.2" height="0.2"></a-image>
  </a-entity>
</a-scene>
`;
const videoRafaga = document.getElementById("video-rafaga");
videoRafaga.style.display = "none"; 
// Botón "Empezar recorrido" aparece recién al cargar la escena AR
boton.classList.add("fade-in");
boton.style.pointerEvents = "auto";
pantalla.classList.remove("fade-out");
// Al clickearlo, activa MindAR y oculta la pantalla de carga
boton.addEventListener('click', async() => {
boton.style.display = "none"; //para que no sea clickeable de nuevo
pantalla.classList.add('fade-out');
pantalla.addEventListener('transitionend', async () => {
videoRafaga.style.display = "block"; 
videoRafaga.addEventListener('click', () => {
videoRafaga.classList.add('fade-out');
escena.style.display = "block";
escena.innerHTML = info;
}, { once: true });
videoRafaga.addEventListener('ended', () => {
videoRafaga.classList.add('fade-out');
escena.innerHTML = info;
}, { once: true });
const {toggle_menu} = await import('./openclose-menu.js');    
toggle_menu();
}, { once: true });
});}
