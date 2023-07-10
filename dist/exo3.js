"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo3 = void 0;
//fonction doubler un tableau 
function doublerTableau(tableau) {
    let tableauBis = [];
    for (let index = 0; index < tableau.length; index++) {
        tableauBis[index] = tableau[index] * 2;
    }
    return tableauBis;
}
function exo3() {
    console.log("-----------------Exercice n°2---------------------------");
    let monTableau = [];
    for (let index = 0; index < 10; index++) {
        monTableau[index] = index + 1;
    }
    console.log(monTableau);
    console.log("la taille de monTableau est : ", monTableau.length);
    console.log("1er élément de mon tableau est : ", monTableau[0]);
    console.log("dernier élément de mon tableau est : ", monTableau[monTableau.length - 1]);
    console.log("le 4eme élément est : ", monTableau[3]);
    const tableauBis = doublerTableau(monTableau);
    console.log(tableauBis);
}
exports.exo3 = exo3;
