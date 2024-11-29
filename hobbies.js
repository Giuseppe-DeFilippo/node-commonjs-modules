// 1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.

function hobby(hobbyOne, hobbyTwo, hobbyThree) {
    return {
        hobbies: [
            hobbyOne, hobbyTwo, hobbyThree
        ]
    };
};
module.exports = hobby;