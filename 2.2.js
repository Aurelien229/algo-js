
let min_value = parseInt(prompt("Entrez la valeur minimale :"));
let max_value = parseInt(prompt("Entrez la valeur maximale :"));
let current_value = parseInt(prompt("Entrez la valeur actuelle :"));
if (min_value > max_value) {
    console.log("Erreur : La valeur minimale ne peut pas être supérieure à la valeur maximale.");
} else {

    if (min_value <= current_value && current_value <= max_value) {
        console.log("La valeur actuelle est comprise entre la valeur minimale et maximale.");
    } else {
        console.log("La valeur actuelle n'est pas dans la plage spécifiée.");
    }
}