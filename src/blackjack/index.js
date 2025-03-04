import _ from 'underscore'; // para llamar una libreria 

import {pedirCarta ,inicializacion,evaluarCarta, terminarJuego, turnoComputadora} from './usecases/index';

// Se asegura de que el código se ejecute solo después de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  (() => {
    "use strict"; // Modo estricto de JavaScript para ayudar a detectar errores

    let deck = []; // Define the deck variable
    
    // Variables para almacenar los puntos de los jugadores y el deck de cartas
    let puntosJugadores = [],
        puntoJugador = 0,
        puntosComputadora = 0,
        puntosMinimos = 0; // Define puntosMinimos with a default value


    // Tipos de cartas (C=Clubs, D=Diamonds, H=Hearts, S=Spades) y cartas especiales (A, J, Q, K)
     const tipos = ["C", "D", "H", "S"],
          especiales = ["A", "J", "Q", "K"],
          // Referencias a elementos HTML mediante sus IDs o selectores
          btnPedirCarta = document.getElementById("btnPedir"),
          btnDetener = document.getElementById("btnDetener"),
          btnInicial = document.getElementById("btnNuevo"),
          smalls = document.querySelectorAll("small"),
          jugadorCartas = document.querySelector("#jugador-cartas"),
          jugadorCartasComputadora = document.querySelector("#computadora-cartas");


    // Evento para el botón "Pedir Carta"
    btnPedirCarta.addEventListener("click", () => {
      const carta = pedirCarta(deck); // Pass deck as an argument
      puntoJugador += evaluarCarta(carta); // Suma el valor de la carta a los puntos del jugador
      smalls[0].innerText = puntoJugador; // Actualiza los puntos del jugador en el HTML
      const imgCartaJugador = document.createElement("img"); // Crea un elemento de imagen
      imgCartaJugador.src = `assets/cartas/${carta}.png`; // Asigna la imagen correspondiente a la carta
      imgCartaJugador.classList.add("carta"); // Agrega la clase "carta" al elemento de imagen
      jugadorCartas.append(imgCartaJugador); // Añade la imagen de la carta al contenedor de cartas del jugador
      terminarJuego(puntoJugador, puntosComputadora, btnPedirCarta,btnDetener); // Verifica si el juego debe terminar
    });

    // Evento para el botón "Detener"
    btnDetener.addEventListener("click", () => {
      btnPedirCarta.disabled = true; // Desactiva el botón de pedir carta
      btnDetener.disabled = true; // Desactiva el botón de detener
      smalls[0].innerText = puntoJugador; // Actualiza los puntos del jugador en el HTML
      turnoComputadora(puntoJugador,puntosComputadora,jugadorCartasComputadora,deck,smalls, btnPedirCarta,btnDetener); // Inicia el turno de la computadora
    });

    // Evento para el botón "Nuevo Juego"
    btnInicial.addEventListener("click", () => {
      deck = inicializacion(tipos, especiales); // Update deck with the returned value
      puntoJugador = 0; // Reinicia los puntos del jugador
      puntosComputadora = 0; // Reinicia los puntos de la computadora
      btnPedirCarta.disabled = false; // Activa el botón de pedir carta
      btnDetener.disabled = false; // Activa el botón de detener
      smalls[0].innerText = 0; // Reinicia los puntos del jugador en el HTML
      smalls[1].innerText = 0; // Reinicia los puntos de la computadora en el HTML
      jugadorCartas.innerHTML = ""; // Vacía el contenedor de cartas del jugador
      jugadorCartasComputadora.innerHTML = ""; // Vacía el contenedor de cartas de la computadora
    });

    // Inicializa el juego creando el deck
    deck = inicializacion(tipos, especiales); // Update deck with the returned value
  })();
});


