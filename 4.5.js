/**
 * Calcule la distance entre deux points dans un espace 2D.
 *
 * @param {number[]} pointA - Les coordonnées du point A [x, y].
 * @param {number[]} pointB - Les coordonnées du point B [x, y].
 * @returns {number} La distance entre les points A et B.
 */
function calcDistance(pointA, pointB) {
    const deltaX = pointB[0] - pointA[0];
    const deltaY = pointB[1] - pointA[1];
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return distance;
}
// Exemples d'utilisation de la fonction calcDistance
const distance1 = calcDistance([1, 1], [2, 2]);
console.log("Distance entre [1, 1] et [2, 2] : " + distance1.toFixed(2));

const distance2 = calcDistance([1, 1], [3, 1]);
console.log("Distance entre [1, 1] et [3, 1] : " + distance2.toFixed(2));

const distance3 = calcDistance([4, 1], [1, 1]);
console.log("Distance entre [4, 1] et [1, 1] : " + distance3.toFixed(2));

const distance4 = calcDistance([-2, 2], [2, -2]);
console.log("Distance entre [-2, 2] et [2, -2] : " + distance4.toFixed(2));
