/**
 * Génère un tableau de nombres aléatoires entre 1 et 10.
 *
 * @param {number} n - Le nombre d'éléments à générer dans le tableau.
 * @returns {Array} Un tableau de n nombres aléatoires entre 1 et 10.
 */
function multiRand(n) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(rand10());
    }
    return randomNumbers;
}
// Demande à l'utilisateur le nombre de nombres aléatoires à générer
const n = parseInt(prompt("Entrez le nombre de nombres aléatoires à générer :"));

// Vérifie si l'entrée est valide
if (isNaN(n) || n <= 0) {
    console.log("Veuillez entrer un nombre entier positif.");
} else {
    // Utilise la fonction multiRand pour générer le tableau
    const randomNumbersArray = multiRand(n);

    // Affiche le tableau de nombres aléatoires
    console.log(`Tableau de ${n} nombres aléatoires entre 1 et 10 :`, randomNumbersArray);
}
