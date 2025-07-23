/* Contador de marcadores detectados */
export function ContadorMarcadores() {
	const marcadorDetectado = new Set(); // índices de los target ya escaneados
	const totalMarcadores = 3;
	const contadorDiv = document.getElementById("contador-marcadores");
	const actualizarContador = () => {
  contadorDiv.textContent = `Escaneaste ${marcadorDetectado.size} de ${totalMarcadores} imágenes`;
  contadorDiv.style.display = "block";
  clearTimeout(contadorDiv.hideTimeout);
  contadorDiv.hideTimeout = setTimeout(() => {
    contadorDiv.style.display = "none";
  }, 3000);

  if (marcadorDetectado.size === totalMarcadores) {
    setTimeout(() => {
      document.getElementById("mensaje-final").style.display = "block";
    }, 500);
  }
};

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
document.getElementById("mensaje-final").style.display = "none";
	});
}