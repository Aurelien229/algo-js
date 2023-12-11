/**
 * Mélange aléatoirement le casting d'une série télévisée.
 *
 * @param {Object} tvSerie - La structure de données représentant une série télévisée.
 * @returns {Array} Une nouvelle liste du casting dans un ordre aléatoire.
 */
function randomizeCast(tvSerie) {
    // Utilise l'algorithme de Fisher-Yates pour mélanger le casting
    const shuffledCast = [...tvSerie.castMembers];
    for (let i = shuffledCast.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCast[i], shuffledCast[j]] = [shuffledCast[j], shuffledCast[i]];
    }

    return shuffledCast;
}
// Demande à l'utilisateur des informations sur une série télévisée
const tvSerie = askTvSerie();

// Utilise la fonction randomizeCast pour mélanger le casting
const randomizedCast = randomizeCast(tvSerie);

// Affiche le casting aléatoire pour la nouvelle série
console.log("Casting aléatoire pour la nouvelle série :", randomizedCast);
