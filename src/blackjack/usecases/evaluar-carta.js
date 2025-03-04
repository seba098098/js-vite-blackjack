  
  
  // Función para evaluar el valor de una carta
  export const evaluarCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1); // Extrae el valor de la carta
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : parseInt(valor); // Retorna el valor de la carta
  };
