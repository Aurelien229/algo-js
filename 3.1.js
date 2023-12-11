// Fonction pour calculer la somme d'un tableau
function sommeTableau(tableau) {
    // Initialise une variable pour stocker la somme
    let total = 0;

    // Parcourt chaque élément dans le tableau
    for (let i = 0; i < tableau.length; i++) {
        // Ajoute l'élément actuel au total
        total += tableau[i];
    }

    // Renvoie la somme finale
    return total;
}

// Teste le programme avec les tableaux fournis
const tableau1 = [1, 2, 3, 4, 5];
const resultat1 = sommeTableau(tableau1);
console.log(`La somme de [${tableau1}] est : ${resultat1}`);

const tableau2 = [100, 101, 102];
const resultat2 = sommeTableau(tableau2);
console.log(`La somme de [${tableau2}] est : ${resultat2}`);
