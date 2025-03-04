// Función para pedir una carta del deck
export const pedirCarta = (deck) => { // Accept deck as an argument
  if (deck.length === 0) { // Verifica si no hay cartas en el deck
    throw new Error("No hay cartas en el deck");
  }
  return deck.pop(); // Retira y devuelve la última carta del deck
};