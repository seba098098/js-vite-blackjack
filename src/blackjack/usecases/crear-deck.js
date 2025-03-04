import _ from 'underscore'; 

// Crear un nuevo deck de cartas barajado
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
    let deck = []; // Limpia el deck antes de crear uno nuevo
    for (let tipoDeCarta of tiposDeCartas) {
        for (let tipoEspecial of tiposEspeciales) {
            deck.push(`${tipoEspecial}${tipoDeCarta}`); // Agrega cartas especiales al deck
        }
        for (let numero = 2; numero <= 10; numero++) {
            deck.push(`${numero}${tipoDeCarta}`); // Agrega cartas numéricas al deck
        }
    }
    return _.shuffle(deck); // Mezcla el deck utilizando la función shuffle de underscore
};
