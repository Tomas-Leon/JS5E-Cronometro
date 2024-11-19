let segundos = 0;
let intervaloId = null;

const mostrarCronometro = document.getElementById('cronometro');
const botonIniciar = document.getElementById('iniciar');
const botonPausar = document.getElementById('pausar');
const botonReiniciar = document.getElementById('reiniciar');

function formatearTiempo(segundos) {
    const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const segundosRestantes = String(segundos % 60).padStart(2, '0');
    return `${horas}:${minutos}:${segundosRestantes}`;
}

function actualizarDisplay() {
    mostrarCronometro.textContent = formatearTiempo(segundos);
}

botonIniciar.addEventListener('click', () => {
    if (intervaloId) return; 
    intervaloId = setInterval(() => {
        segundos++;
        actualizarDisplay();
    }, 1000);
});

botonPausar.addEventListener('click', () => {
    clearInterval(intervaloId);
    intervaloId = null;
});

botonReiniciar.addEventListener('click', () => {
    clearInterval(intervaloId);
    intervaloId = null;
    segundos = 0;
    actualizarDisplay();
});

actualizarDisplay();