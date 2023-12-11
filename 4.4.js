/**
 * Sélectionne de manière aléatoire un nombre spécifié d'apprenants parmi un tableau donné.
 *
 * @param {Array} inputAr - Le tableau d'apprenants.
 * @param {number} n - Le nombre d'apprenants à sélectionner (0 < n < inputAr.length).
 * @returns {Array} Un tableau contenant n apprenants sélectionnés de manière aléatoire.
 */
function pickLearner(inputAr, n) {
    // Vérifie si n est valide
    if (n <= 0 || n >= inputAr.length) {
        console.log("Le nombre n doit être supérieur à 0 et inférieur à la longueur de inputAr.");
        return [];
    }

    // Copie du tableau original pour éviter de le modifier directement
    const shuffledArray = [...inputAr];

    // Mélange le tableau (algorithme de Fisher-Yates)
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    // Sélectionne les n premiers apprenants après le mélange
    const selectedLearners = shuffledArray.slice(0, n);

    return selectedLearners;
}
