/**
 * Demande à l'utilisateur des informations sur sa série télévisée préférée
 * et retourne un objet représentant la série.
 *
 * @returns {Object} Un objet contenant les informations sur la série télévisée.
 */
function askTvSerie() {
    // Demande à l'utilisateur de saisir les informations
    const name = prompt("Nom de la série :");
    const productionYear = parseInt(prompt("Année de production :"));

    // Demande à l'utilisateur les noms des membres du casting
    const castMembers = [];
    let moreCastMembers = true;

    while (moreCastMembers) {
        const castMember = prompt("Nom d'un membre du casting :");
        castMembers.push(castMember);

        // Demande à l'utilisateur s'il veut ajouter un autre membre du casting
        moreCastMembers = confirm("Voulez-vous ajouter un autre membre du casting ?");
    }

    // Crée et retourne l'objet représentant la série télévisée
    const tvSerie = {
        name: name,
        productionYear: productionYear,
        castMembers: castMembers
    };

    return tvSerie;
}
// Utilise la fonction askTvSerie pour demander les informations sur une série
const favoriteTvSerie = askTvSerie();

// Affiche l'objet représentant la série télévisée au format JSON
console.log("Série télévisée générée :", JSON.stringify(favoriteTvSerie, null, 2));
