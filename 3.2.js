// Fonction pour calculer la moyenne d'un tableau
function moyenneTableau(tableau) {
    // Initialise une variable pour stocker la somme
    let somme = 0;

    // Parcourt chaque élément dans le tableau
    for (let i = 0; i < tableau.length; i++) {
        // Ajoute l'élément actuel à la somme
        somme += tableau[i];
    }

    // Calcule la moyenne en divisant la somme par le nombre d'éléments
    const moyenne = somme / tableau.length;

    // Renvoie la moyenne finale
    return moyenne;
}

// Teste le programme avec les tableaux donnés
const tableau1 = [1, 2, 3, 4, 5];
const moyenne1 = moyenneTableau(tableau1);
console.log(`La moyenne de [${tableau1}] est : ${moyenne1}`);

const tableau2 = [100, 101, 102];
const moyenne2 = moyenneTableau(tableau2);
console.log(`La moyenne de [${tableau2}] est : ${moyenne2}`);
