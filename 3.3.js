// Version de base avec push()
function copieAvecPush(tableau) {
    let copie = [];
    for (let i = 0; i < tableau.length; i++) {
        copie.push(tableau[i]);
    }
    return copie;
}

// Version avancée avec slice()
function copieAvecSlice(tableau) {
    // Utilise la méthode slice() pour créer une copie du tableau
    return tableau.slice();
}

// Teste les programmes avec un tableau donné
const tableauOriginal = [1, 2, 3, 4, 5];

// Teste la version avec push()
const copiePush = copieAvecPush(tableauOriginal);
console.log("Copie avec push():", copiePush);

// Teste la version avec slice()
const copieSlice = copieAvecSlice(tableauOriginal);
console.log("Copie avec slice():", copieSlice);
