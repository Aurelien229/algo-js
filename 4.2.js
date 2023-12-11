/**
 * Génère un nombre entier aléatoire entre 1 et 10.
 *
 * @returns {number} Un entier aléatoire entre 1 et 10.
 */
function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}
// Utilise la fonction rand10 pour générer un nombre aléatoire
const resultat = rand10();

// Affiche le résultat
console.log(`Le résultat de rand10 est : ${resultat}`);
