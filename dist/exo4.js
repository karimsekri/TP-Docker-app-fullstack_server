"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo4 = void 0;
function calculDureeStock(stockFoin, consoJourMouton, jourTransformation, nombreMouton) {
    let stock = stockFoin;
    let nbreDeJourConso = 0;
    while (stock > 0) {
        stock = stock - consoJourMouton * nombreMouton;
        if (nbreDeJourConso === 999) {
            nombreMouton--;
        }
        nbreDeJourConso++;
    }
    return nbreDeJourConso;
}
function exo4() {
    console.log("-----------------Exercice n°3---------------------------");
    const STOCK_FOIN = 800;
    const CONSO_JOUR_PAR_MOUTON = 0.25;
    const JOUR_TRANSFORMATION = 1000;
    let dureeStock = calculDureeStock(STOCK_FOIN, CONSO_JOUR_PAR_MOUTON, JOUR_TRANSFORMATION, 2);
    let dureeStock20kg = calculDureeStock(20, CONSO_JOUR_PAR_MOUTON, JOUR_TRANSFORMATION, 2);
    let moutons5 = calculDureeStock(STOCK_FOIN, CONSO_JOUR_PAR_MOUTON, JOUR_TRANSFORMATION, 5);
    console.log("Le stock va durer  ", dureeStock, "  jours");
    console.log("pour 20 kg  et 2 moutons");
    console.log("Le stock va durer  ", dureeStock20kg, "  jours");
    console.log("pour 800 kg  et 5 moutons");
    console.log("Le stock va durer  ", moutons5, "  jours");
}
exports.exo4 = exo4;
