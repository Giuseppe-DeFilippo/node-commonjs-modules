// 3. Crea una funzione che non ha parametri.La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
const names = require("./names.js");
const hobby = require("./hobbies.js");

function people() {
    return { names: names, hobby: hobby }
};
module.exports = people;
