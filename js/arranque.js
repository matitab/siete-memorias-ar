export function arranque() {
  const boton = document.getElementById("boton-comenzar");
  const pantalla = document.getElementById("pantalla-carga");
  const escena = document.getElementById("escena");
  const videoRafaga = document.getElementById("video-rafaga");
  const cerrar = document.getElementById("close-button");
  escena.style.display = "none";
  videoRafaga.style.display = "none";
  const info = `
    <a-scene mindar-image="imageTargetSrc: targets.mind; maxTrack: 3; uiLoading:no; uiScanning:no" 
             color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" 
             vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" 
                raycaster="objects: .cliqueable; far: 10000"></a-camera>
      <a-entity mindar-image-target="targetIndex: 0" interactivo data-index="0">
        <a-image src="assets/quién fue. marcador 1.svg" position="0 0.3 0.2" width="0.6" height="0.2"></a-image>
        <a-cylinder class="cliqueable" position="0 0 0.20" rotation="90 0 0"  color="#777574ff" height=".05" radius=".15"></a-cylinder>
        <a-image class="cliqueable" src="assets/m1.png" position="0 0 0.26" width="0.2" height="0.2"></a-image>
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 1" interactivo data-index="1">
        <a-image src="assets/qué le pasó. marcador 2.svg" position="0 0.3 0.2" width="0.6" height="0.2"></a-image>
        <a-cylinder class="cliqueable" position="0 0 0.20" rotation="90 0 0"  color="#777574ff" height=".05" radius=".15"></a-cylinder>
        <a-image class="cliqueable" src="assets/m2.png" position="0 0 0.26" width="0.2" height="0.2"></a-image>
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 2" interactivo data-index="2">
        <a-image src="assets/cómo está presente. marcador 3.svg" position="0 0.3 0.2" width="0.6" height="0.2"></a-image>
        <a-cylinder class="cliqueable" position="0 0 0.20" rotation="90 0 0"  color="#777574ff" height=".05" radius=".15"></a-cylinder>
        <a-image class="cliqueable" src="assets/m3.png" position="0 0 0.26" width="0.2" height="0.2"></a-image>
      </a-entity>
    </a-scene>
  `;
// aparece el botón comenzar
boton.classList.add("fade-in");
boton.style.pointerEvents = "auto";
pantalla.classList.remove("fade-out");
// Al clickearlo, activa MindAR y oculta la pantalla de carga
boton.addEventListener('click', async() => {
boton.style.display = "none"; //para que no sea clickeable de nuevo
pantalla.classList.add('fade-out');
pantalla.addEventListener('transitionend', async () => {
videoRafaga.style.display = "block";
const avanzar = () => {
videoRafaga.classList.add("fade-out");
escena.style.display = "block";
escena.innerHTML = info;
};
setTimeout(avanzar, 29000);
videoRafaga.addEventListener("click", avanzar, { once: true });
const {toggle_menu} = await import('./openclose-menu.js');    
toggle_menu();
}, { once: true });
});
cerrar.addEventListener('click', () => {
  location.reload();
});
}
