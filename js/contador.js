/* Contador de marcadores detectados */
export function ContadorMarcadores() {
	const marcadorDetectado = new Set(); // índices de los target ya escaneados
	const totalMarcadores = 3;
	const contador = document.getElementById("contador-marcadores");
  contador.addEventListener("click", ()=>{ // cierra mensaje con click
  contador.style.display="none";
  });
	const actualizarContador = () => {
  contador.textContent = `Escaneaste ${marcadorDetectado.size} de ${totalMarcadores} imágenes`;
  contador.style.display = "block";
  clearTimeout(contador.hideTimeout);
  contador.hideTimeout = setTimeout(() => {
    contador.style.display = "none";
  }, 3000);
  if (marcadorDetectado.size === totalMarcadores) {
    setTimeout(() => {
      document.getElementById("mensaje-final").style.display = "block"; //muestra mensaje final
    }, 500);}};
// eventos de detección (si agregamos más targets, modificar índice)
[0, 1, 2].forEach(index => {
const target = document.querySelector(`[mindar-image-target="targetIndex: ${index}"]`);
if (!target) return;
	target.addEventListener("targetFound", () => {
	if (!marcadorDetectado.has(index)) {
		marcadorDetectado.add(index);
		actualizarContador();
		}});});
// cierra mensaje con click
document.getElementById("mensaje-final").addEventListener("click", () => {
document.getElementById("mensaje-final").style.display = "none"});}
