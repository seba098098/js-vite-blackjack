//import { crearDeck } from "./usecases/crear-deck";
//importar crearDeck
import { crearDeck } from "./crear-deck"; // Correct import path

// Función de inicialización que crea un nuevo deck
export const inicializacion = (tipos, especiales) => {
  return crearDeck(tipos, especiales); // Return the new deck
};