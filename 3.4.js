// Fonction pour afficher le minimum et le maximum d'un tableau
function minMaxTableau(tableau) {
    // Vérifie si le tableau est vide
    if (tableau.length === 0) {
        console.log("Le tableau est vide.");
        return;
    }

    // Initialise les variables pour stocker le minimum et le maximum
    let minimum = tableau[0];
    let maximum = tableau[0];

    // Parcourt chaque élément dans le tableau
    for (let i = 1; i < tableau.length; i++) {
        // Compare avec le minimum
        if (tableau[i] < minimum) {
            minimum = tableau[i];
        }

        // Compare avec le maximum
        if (tableau[i] > maximum) {
            maximum = tableau[i];
        }
    }

    // Affiche le minimum et le maximum
    console.log(`Le minimum du tableau est : ${minimum}`);
    console.log(`Le maximum du tableau est : ${maximum}`);
}

// Teste le programme avec un tableau donné
const tableauExemple = [3, 1, 7, 4, 2, 9];
minMaxTableau(tableauExemple);
