
export const terminarJuego = (puntoJugador, puntosComputadora, btnPedirCarta,btnDetener) => {
    setTimeout(() => { // Espera 10ms antes de mostrar el resultado
        if (puntoJugador > 21 || (puntoJugador < puntosComputadora && puntosComputadora <= 21)) {
            // Si el jugador tiene más de 21 puntos o la computadora tiene más puntos sin pasarse de 21
            btnPedirCarta.disabled = true; // Desactiva el botón de pedir carta
            btnDetener.disabled = true; // Desactiva el botón de detener
            alert("Perdiste  !"); // Muestra un mensaje de pérdida
        } else if (puntosComputadora > 21) {
            // Si la computadora tiene más de 21 puntos
            btnPedirCarta.disabled = true;
            btnDetener.disabled = true;
            alert("Ganaste  !"); // Muestra un mensaje de victoria
        } else if (puntoJugador === 21) {
            // Si el jugador tiene exactamente 21 puntos
            btnPedirCarta.disabled = true;
            btnDetener.disabled = true;
            alert("Empate dale un beso a sebastian !"); // Muestra un mensaje de empate
        }
    }, 30);
};