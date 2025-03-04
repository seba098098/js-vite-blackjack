   /*
   import { pedirCarta } from "./pedir-carta";
   import { evaluarCarta } from "./evaluar-carta";
   import { terminarJuego } from "./terminar-juego";
*/
   import { pedirCarta,evaluarCarta,terminarJuego } from "./index";
// Función para el turno de la computadora

    export const turnoComputadora = (puntoJugador,puntosComputadora,jugadorCartasComputadora,deck,smalls, btnPedirCarta,btnDetener) => {
      while (puntosComputadora < puntoJugador && puntoJugador <= 21) {
        // Mientras los puntos de la computadora sean menores que los mínimos requeridos y no se pase de 21
        const cartaComputadora = pedirCarta(deck); // Pass deck as an argument
        puntosComputadora += evaluarCarta(cartaComputadora); // Suma el valor de la carta a los puntos de la computadora
        const imgCarta = document.createElement("img"); // Crea un elemento de imagen
        imgCarta.src = `assets/cartas/${cartaComputadora}.png`; // Asigna la imagen correspondiente a la carta
        imgCarta.classList.add("carta"); // Agrega la clase "carta" al elemento de imagen
        jugadorCartasComputadora.append(imgCarta); // Añade la imagen de la carta al contenedor de cartas de la computadora
        smalls[1].innerText = puntosComputadora; // Actualiza los puntos de la computadora en el HTML
        terminarJuego(puntoJugador, puntosComputadora, btnPedirCarta,btnDetener); // Verifica si el juego debe terminar
      }
    };