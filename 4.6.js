/**
 * Calcule la factorielle d'un nombre de manière récursive.
 *
 * @param {number} a - Le nombre dont on souhaite calculer la factorielle.
 * @returns {number} La factorielle de a.
 */
function factorial(a) {
    // Cas de base : la factorielle de 0 ou 1 est toujours 1
    if (a === 0 || a === 1) {
        return 1;
    }

    // Appel récursif : a! = a * (a-1)!
    return a * factorial(a - 1);
}
