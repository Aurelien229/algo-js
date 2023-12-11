/**
 * Calcule la surface d'un rectangle.
 *
 * @param {number} longueur - La longueur du rectangle.
 * @param {number} largeur - La largeur du rectangle.
 * @returns {number} La surface du rectangle.
 */
function calcSurface(longueur, largeur) {
    return longueur * largeur;
}
// Demande à l'utilisateur la longueur du rectangle
const longueur = parseFloat(prompt("Entrez la longueur du rectangle :"));

// Demande à l'utilisateur la largeur du rectangle
const largeur = parseFloat(prompt("Entrez la largeur du rectangle :"));

// Vérifie si les entrées sont valides
if (isNaN(longueur) || isNaN(largeur)) {
    console.log("Veuillez entrer des valeurs numériques valides.");
} else {
    // Utilise la fonction calcSurface pour calculer la surface
    const surface = calcSurface(longueur, largeur);

    // Affiche la surface du rectangle
    console.log(`La surface du rectangle est : ${surface}`);
}
